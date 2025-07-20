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

    return (
        <>
            <section>
                {/* 상품 정보 영역 */}
                <div>
                    {/* 상품 섬네일 */}
                    <SwiperSlider imageList={thumImg} paginationType={'progressbar'}/>

                    {/* 상품 기본 정보 */}
                    <div className="px-[var(--spacing-16-32)] py-4 pb-8 flex flex-col gap-2">
                        <div className="relative flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <Link className="text-sm">{selectedPrd.brand}</Link>
                                <h2 className="text-lg font-bold">{selectedPrd.name}</h2>
                            </div>
                            <div className="absolute top-0 right-0">
                                <LikeBtn prd={selectedPrd}/>
                            </div>
                        </div>
                        <div className="flex gap-1 text-xs text-[var(--color-gray-600)]">
                            <div className="w-3">
                                <StarIcon/>
                            </div>
                            <p> { reviewRatingAverage().toFixed(1) }점 | { filterPrdReviewList.length }건 </p>
                        </div>
                        <div className="price">
                                {
                                    selectedPrd.saleRate > 0
                                    ? <>
                                        <del className="text-sm  text-[var(--color-gray-500)]">{(selectedPrd.price).toLocaleString()}원</del>
                                        <div className="flex gap-1 text-xl">
                                            <strong className="text-[var(--color-main)]">{ selectedPrd.saleRate }%</strong>
                                            <strong>{(dcPrice(selectedPrd)).toLocaleString()}원</strong>
                                        </div>
                                    </>
                                    :   <div className="text-xl">
                                            <strong>{dcPrice(selectedPrd).toLocaleString()}원</strong>
                                        </div>
                                }
                        </div>
                    </div>
                </div>
                
                <ProductTapMenu/>

                {/* 상품 구매 버튼 - 이거 공용버튼으로 묶어서 재 작업 필요*/}

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