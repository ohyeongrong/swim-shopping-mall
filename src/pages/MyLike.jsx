import useMyLikeStore from "../store/useMyLikeStore";
import ProductCard from '@/components/common/ProductCard'
import { useState } from "react";
import EmptyState from "@/components/common/EmptyState";
import TapList from "@/components/common/TapList";
import { useNavigate } from "react-router-dom";


function MyLike() {

    const { likeList } = useMyLikeStore();
    const navigate = useNavigate();

    const myLikeTabs = [
        { type: "product", label: "상품", length: likeList.length },
        { type: "brand", label: "브랜드", length: 0 },
    ];

    const[onTabClick, setOnTapClick] = useState("product");
    
    return (
        <section className="lg:max-w-[1440px] lg:m-auto">
                <div className="hidden lg:block py-10">
                    <h2 className="text-4xl font-bold">나의 관심</h2>
                </div>
                <TapList
                    tabList={myLikeTabs}
                    onTabClick={onTabClick}
                    onTabChange={setOnTapClick}
                />
                {/* 탭 리스트 콘텐츠 부분 */}
                <div className="flex flex-col gap-4 py-6 px-4 md:px-2 lg:px-0">
                {
                    likeList.length > 0
                    ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-14 pb-10">
                                {
                                    likeList.map((prd, i) => <ProductCard product={ prd } key={i}/>)
                                }
                            </div>
                        </>
                    )
                    : <EmptyState type="mylike" link={() => navigate('/')}/>
                }
                </div>
        </section>
    )
}

export default MyLike