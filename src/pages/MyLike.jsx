import useMyLikeStore from "../store/useMyLikeStore";
import LikeSort from "../components/LikeSort"
import ProductCard from '@/components/common/ProductCard'
import { useState } from "react";
import EmptyState from "@/components/common/EmptyState";
import TapList from "@/components/common/TapList";


function MyLike() {

    const { likeList } = useMyLikeStore();

    const myLikeTabs = [
        { type: "product", label: "상품" },
        { type: "brand", label: "브랜드" },
    ];

    const[onTabClick, setOnTapClick] = useState("product");
    
    return (
        <section>
                <TapList
                    tabList={myLikeTabs}
                    onTabClick={onTabClick}
                    onTabChange={setOnTapClick}
                    ListLength={likeList.length}
                />
                {/* 탭 리스트 콘텐츠 부분 */}
                <div className="flex flex-col gap-4 py-6 px-[var(--spacing-16-32)]">
                {
                    likeList.length > 0
                    ? (
                        <>
                            <div className="flex justify-end">
                                <LikeSort />
                            </div>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-10 pb-10">
                                {
                                    likeList.map( prd => <ProductCard prd={ prd } variant="like"/>)
                                }
                            </div>
                        </>
                    )
                    : <EmptyState type="mylike"/>
                }
                </div>
        </section>
    )
}

export default MyLike