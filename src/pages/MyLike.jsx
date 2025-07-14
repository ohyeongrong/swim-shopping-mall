import useStore from "../store/useStore";
import LikeSort from "../components/LikeSort"
import ProductCard from '@/components/common/ProductCard'
import { useState } from "react";
import EmptyState from "@/components/common/EmptyState";

function MyLike() {

    const { likeList } = useStore();

    const myLikeTabs = [
        { id: "product", label: "상품" },
        { id: "brand", label: "브랜드" },
    ];
    const[onTabClick, setOnTapClick] = useState("product");
    
    return (
        <section>
            <div className="mylist-warp">
                {/* 탭 리스트 나중에 따로 분리 */}
                <div className="tap-list text-sm font-bold">
                    <ul className="flex w-full justify-center items-center text-center">

                        {
                            myLikeTabs.map((tap, i)=>
                                <li 
                                    key={i} 
                                    className= {`w-full py-3 border-b-2 ${ onTabClick === tap.id ? "border-[var(--color-black)] text-[var(--color-black)]" : "border-[var(--color-gray-300)]  text-[var(--color-gray-500)]" }`}>
                                    <button type="button" onClick={() => setOnTapClick(tap.id)}>
                                        <div className="flex items-center gap-1">
                                            {tap.label} 
                                            <span className="text-xs  text-[var(--color-gray-500)]">
                                                {tap.id === "product" ? likeList.length : 0}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            )
                        }

                    </ul>
                </div>
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
                {/* EmptyState - 비어있는 컴포넌트 만들거임 */}

            </div>
        </section>
    )
}

export default MyLike