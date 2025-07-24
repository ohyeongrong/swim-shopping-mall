import ProductCard from "@/components/common/ProductCard";
import TapList from "@/components/common/TapList";
import useProdcutStore from "@/store/useProdcutStore";
import useSearchStore from "@/store/useSearchStore";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LikeSort from "@/components/LikeSort"
import EmptyState from "@/components/common/EmptyState";

function Search() {

    const { searchList } = useSearchStore();
    
    const navigate = useNavigate();

    const searchTabs = [
        { type: "product", label: "상품", length: searchList.length },
        { type: "brand", label: "브랜드", length: 0 },
        { type: "event", label: "기획전", length: 0 },
    ];

    const[onTabClick, setOnTapClick] = useState("product");

    return (
        <section>

            <TapList
                tabList={searchTabs}
                onTabClick={onTabClick}
                onTabChange={setOnTapClick}
            />

                {/* 탭 리스트 콘텐츠 부분 */}
                <div className="flex flex-col gap-4 py-6 px-4 md:px-2 lg:px-0">
                {
                    searchList.length > 0 
                    ? (
                        <>
                            <div className="flex justify-end">
                                <LikeSort />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-14 pb-10">
                                {
                                    searchList.map((prd, i) => <ProductCard product={ prd } key={i}/>)
                                }
                            </div>
                        </>
                    )
                    : <EmptyState type="search" link={() => navigate('/')}/>
                }
                </div>

        </section>
    )
}

export default Search