import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import useProdcutStore from "@/store/useProdcutStore";
import LikeBtn from "../components/common/LikeBtn";
import ProductTapMenu from "../components/product/ProductTapMenu";
import SwiperSlider from "@/components/common/SwiperSlider";
import { StarIcon } from "@/components/common/Icon"
import useFilterPrdPost from "@/hooks/useFilterPrdPost";
import Button from '@/components/common/Button';
import BottomActionBar from '@/components/common/BottomActionBar';
import useCartStore from "@/store/useCartStore";
import OptionBottomSheet from "@/components/common/OptionBottomSheet";
import OptionSelectorPC from "@/components/common/OptionSelectorPC";

import { useMediaQuery } from 'react-responsive';
import ThumbSwiperSlider from "@/components/common/ThumbSwiperSlider";




function Product() {

    const { prdId } = useParams();
    const { productsList, isVisible, show, dcPrice, hide, foundPrd, selectedPrd, thumImg } = useProdcutStore();
    const quantity = useProdcutStore((state) => state.quantity);
    const setQuantity = useProdcutStore((state) => state.setQuantity);
    const { addCartList } = useCartStore();

    const [selectedOption, setSelectedOption] = useState("");

    const { filterPrdReviewList } = useFilterPrdPost();

    useEffect(()=>{
        foundPrd(prdId);
    },[prdId, productsList, foundPrd, selectedPrd]);

    useEffect(()=>{
        hide()
    },[]);


    const handleAddCartList = () => {

        if(!selectedOption){
            alert("옵션을 먼저 선택해 주세요.")
            return;
        }

        const cartItem = {
            ...selectedPrd,
            checked : true,
            selectedOption : selectedOption,
            quantity
        };

        addCartList(cartItem);
        setSelectedOption("");
        setQuantity(1);
        hide();
    };

    
    const reviewRatingAverage = () => {
        if(filterPrdReviewList.length > 0) {
            return filterPrdReviewList.reduce((acc, cur) => acc + cur.rating, 0) / filterPrdReviewList.length
        } 
        return 0
    }

    const isMobile = useMediaQuery({ maxWidth: 1024 });

    return (
        <>
            <section className="lg:max-w-[1440px] lg:m-auto relative">
                {/* 상품 정보 영역 */}
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* 상품 섬네일 */}
                    <div className="order-1 flex flex-col gap-8 col-span-3 lg:pb-30">
                        {
                            isMobile 
                            ? <SwiperSlider imageList={thumImg} paginationType={'progressbar'} sildeView="1"/>
                            : <ThumbSwiperSlider imageList={thumImg} />
                        }
                        
                    </div>
                    {/* 상품 기본 정보 */}
                    <aside className="order-2 col-span-2 p-4 lg:p-16 pb-8 flex flex-col gap-2 lg:gap-4 lg:sticky top-10 self-start">
                        <div className="relative flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <Link className="text-sm lg:text-base">{selectedPrd.brand}</Link>
                                <h2 className="text-lg lg:text-2xl font-bold">{selectedPrd.name}</h2>
                            </div>
                            <div className="absolute top-0 right-0">
                                <LikeBtn prd={selectedPrd}/>
                            </div>
                        </div>
                        <div className="flex gap-1 text-xs lg:text-sm text-[var(--color-gray-600)]">
                            <div className="w-3">
                                <StarIcon/>
                            </div>
                            <p> { reviewRatingAverage().toFixed(1) }점 | { filterPrdReviewList.length }건 </p>
                        </div>
                        <div className="price">
                                {
                                    selectedPrd.saleRate > 0
                                    ? <>
                                        <del className="text-sm lg:text-base text-[var(--color-gray-500)]">{(selectedPrd.price).toLocaleString()}원</del>
                                        <div className="flex gap-1 text-xl lg:text-2xl">
                                            <strong className="text-[var(--color-main)]">{ selectedPrd.saleRate }%</strong>
                                            <strong>{(dcPrice(selectedPrd)).toLocaleString()}원</strong>
                                        </div>
                                    </>
                                    :   <div className="text-xl lg:text-2xl">
                                            <strong>{dcPrice(selectedPrd).toLocaleString()}원</strong>
                                        </div>
                                }
                        </div>
                        <div className="hidden lg:block lg: pt-10">
                            <OptionSelectorPC
                                mode="add"
                                sizes={selectedPrd.sizes}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                quantity={quantity}
                                setQuantity={setQuantity}            
                                showDelete={true}
                                totalPrice={(dcPrice(selectedPrd) * quantity)}
                                onSubmit={() => {
                                    handleAddCartList()
                                }}
                                onClose={() => {
                                    setSelectedOption("");
                                    setQuantity(1);
                                }}
                            />
                        </div>
                    </aside>

                    <div className="order-3 col-span-3">
                        <ProductTapMenu/>
                    </div>
                </div>

                {/* 모바일 구매 버튼*/}
                <BottomActionBar 
                content={ 
                    <>
                        <div className="absolute left-8 bottom-4.5">
                            <LikeBtn  prd={selectedPrd}/>
                        </div>
                        <Button content="구매하기" size="xl" className="w-full" onClick={ show }/>
                    </>
                }
                />
            </section>

            {/* 모바일 바텀 옵션 시트 */}
            { isVisible && 
            (
                <OptionBottomSheet
                    mode="add"
                    sizes={selectedPrd.sizes}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    quantity={quantity}
                    setQuantity={setQuantity}            
                    submitLabel="장바구니에 담기"
                    showDelete={true}
                    totalPrice={(dcPrice(selectedPrd) * quantity)}
                    onSubmit={() => {
                        handleAddCartList()
                        hide();
                    }}
                    onClose={() => {
                        setSelectedOption("");
                        setQuantity(1);
                        hide();
                    }}
                />
            )}
        </>
    )
}

export default Product