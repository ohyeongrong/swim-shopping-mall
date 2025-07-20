import useMyLikeStore from "../store/useMyLikeStore";
import LikeSort from "../components/LikeSort"
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
        <section>
                <TapList
                    tabList={myLikeTabs}
                    onTabClick={onTabClick}
                    onTabChange={setOnTapClick}
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
                                    likeList.map((prd, i) => <ProductCard prd={ prd } variant="like" key={i}/>)
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