import { useState } from "react";
import useCartStore from "@/store/useCartStore";
import { DeleteIcon, MoreArrowIcon, PlusIcon, MinusIcon } from "@/components/common/Icon";
import useStore from "@/store/useProdcutStore"
import ProductCard from "../common/ProductCard";


function OptionEditModal ({selectedPrd}) {

    const { editOptQty, cartList } = useCartStore();
    const { hide } = useStore();

    const [editSelOpt, setEditSelOpt] = useState( selectedPrd.selectedOption || "");
    const [editQty, setEditQty] = useState( selectedPrd.quantity || 1);
    const increase = () => setEditQty(prev => prev + 1);
    const decrease = () => setEditQty(prev => Math.max(1, prev - 1));

    return (
        <>
            <div className="text-sm text-[var(--color-black)] font-bold  px-[var(--spacing-16-32)] pt-4 pb-5">

                <div className="w-full flex flex-col gap-0.5">
                    <div>
                        <select className="w-full border border-[var(--color-gray-500)] px-4 py-3.5 appearance-none" value={ editSelOpt } onChange={ e => setEditSelOpt(e.target.value) }>
                            {
                                selectedPrd.sizes.map((size, i)=>
                                    <option value={ size.label } key={i}>{ size.label }</option>
                                )
                            }
                        </select>
                    </div>
                    <div>
                    {/* 선택 옵션 수량 조절 */}
                    {
                        selectedPrd.selectedOption
                        &&
                        <ul className="pl-2 py-3.5">
                            <li className="flex justify-between">
                                <div className="flex items-center gap-1">
                                    <span>{ editSelOpt }</span>
                                    <button 
                                        type="button"
                                        onClick={()=>{
                                            setEditSelOpt("");
                                            setEditQty(1);
                                        }}
                                    >
                                        <DeleteIcon/>
                                    </button>
                                </div>
                                {/* 수량 조절 */}
                                <div className="flex items-center border border-[var(--color-gray-500)]">
                                    <div className="flex justify-center items-center w-8 h-8  bg-[var(--color-gray-100)]">
                                        <button type="button" onClick={ decrease }>
                                            <MinusIcon/>
                                        </button>
                                    </div>
                                    <input className="text-center p-0 px-2 text-xs" type="number" onChange={(e)=>{ setEditQty(e.target.value)} } value={ editQty } min="1" max="100" step="1" />
                                    <div className="flex justify-center items-center w-8 h-8  bg-[var(--color-gray-300)]">
                                        <button className="" type="button" onClick={ increase }>
                                            <PlusIcon/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    }
                    </div>

                </div>
            </div>

            {/* 바텀액션바 - 공용 분리해서 작업 필요 */}
            <div className="btn-area">
                <button 
                    type="button"
                    onClick={()=>{
                        editOptQty(editSelOpt, editQty, selectedPrd)
                        console.log(cartList);
                        hide()
                    }}    
                >변경하기</button>
            </div>
        </>
    )
}

export default OptionEditModal