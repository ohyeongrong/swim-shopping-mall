import useCartStore from "@/store/useCartStore"
import { useState } from "react";
import { CheckBoxIcon, CloseIcon } from "@/components/common/Icon";
import useStore from "@/store/useProdcutStore"
import ProductCard from "../common/ProductCard";
import Button from '@/components/common/Button';
import BottomActionBar from '@/components/common/BottomActionBar';
import OptionBottomSheet from "../common/OptionBottomSheet";

function CartPrdList() {

    const { 
        cartList, removeCartList, toggleAllChecked, 
        toggleItemChecked, removeChecked, editOptQty,
        getTotalProductPrice, getTotalDiscount
    } = useCartStore();

    const { show, hide, isVisible } = useStore();

    const [selectedPrd, setSelectedPrd] = useState(null);
    const [editSelOpt, setEditSelOpt] = useState("");
    const [editQty, setEditQty] = useState(1);


    return (
        <>
            {/* 카트 리스트 */}
            <div className="text-sm flex flex-col gap-4 text-[var(--color-gray-700)] pb-10">

                {/* 상품 선택, 삭제 */}
                <div className="flex justify-between font-bold border-b-2 border-[var(--color-black)] py-3  px-[var(--spacing-16-32)]">
                    <label className="flex gap-1.5" htmlFor="all-checked">
                        <input
                            className="peer hidden"
                            type="checkbox" 
                            id="all-checked" 
                            checked= { cartList.length > 0 && cartList.every((item => item.checked)) }
                            onChange={ toggleAllChecked }
                        />
                        <CheckBoxIcon className="fill-[var(--color-gray-400)] peer-checked:fill-[var(--color-black)]" />
                        <p className="peer-checked:text-[var(--color-black)] flex items-center gap-1">전체 상품<span className="text-xs text-[var(--color-gray-500)]">{ cartList.length }</span></p>
                    </label>
                    <div className="text-xs">
                        <button 
                            type="button"
                            onClick={ removeChecked }
                        >
                            선택 삭제</button>
                    </div>
                </div>

                {/* 카트 제품 반복 구간 */}
                <div className="flex flex-col gap-4.5 justify-between px-[var(--spacing-16-32)]">
                    {
                        cartList.map((prd, i)=> {
                            return (
                                
                                    <div className="w-full flex flex-col gap-4.5" key={prd.id + i}>

                                        <div className="flex justify-between font-bold">
                                            <label className="flex gap-1.5" htmlFor={`item-checked-${prd.id}`}>
                                                <input 
                                                    className="peer hidden" 
                                                    id={`item-checked-${prd.id}`} 
                                                    type="checkbox" 
                                                    checked={ prd.checked } 
                                                    onChange={()=>{ toggleItemChecked(prd) }}/>
                                                <CheckBoxIcon 
                                                    className="fill-[var(--color-gray-400)] peer-checked:fill-[var(--color-black)]" />
                                                <span className="peer-checked:text-[var(--color-black)]">{ prd.brand }</span>
                                            </label>
                                            <button 
                                                type="button"
                                                onClick={()=>{
                                                    removeCartList(prd)
                                                }}
                                            >
                                                <CloseIcon width="18" height="18" />
                                            </button>
                                        </div>

                                        {/* 제품 카드 */}
                                        <ProductCard product={prd} direction='horizontal' showOption={true} showBrand={false} imgHeight="h-30"/>
                                        
                                        {/* 카트 제품 버튼 구간 */}
                                        <div className="flex justify-between gap-2">
                                            <Button
                                                className="w-full"
                                                variant="secondary"
                                                content="옵션 변경"
                                                size="sm"
                                                onClick={() => {
                                                    setSelectedPrd(prd);
                                                    setEditSelOpt(prd.selectedOption || "");
                                                    setEditQty(prd.quantity || 1);
                                                    show();
                                                }}
                                                />

                                            <Button className="w-full"  size="sm" content="바로 구매"/>
                                        </div>

                                        <div className="border-b border-[var(--color-gray-300)]"></div>
                                        
                                        
                                        {
                                            isVisible && selectedPrd 
                                            && (
                                                <OptionBottomSheet
                                                    sizes={selectedPrd.sizes}
                                                    selectedOption={editSelOpt}
                                                    setSelectedOption={setEditSelOpt}
                                                    quantity={editQty}
                                                    setQuantity={setEditQty}
                                                    submitLabel="변경 저장"
                                                    showDelete={true}
                                                    onSubmit={() => {
                                                        editOptQty(editSelOpt, editQty, selectedPrd);
                                                        setSelectedPrd(null);
                                                        hide();
                                                    }}
                                                    onClose={() => {
                                                        setSelectedPrd(null);
                                                        setEditSelOpt("");
                                                        setEditQty(1);
                                                        hide();
                                                    }}
                                                />
                                                )
                                        }

                                    </div>
                            )
                        })
                    }

                    {/* 선택 상품 총 금액 */}
                    <div className="w-full flex justify-center pb-4.5 border-b border-[var(--color-black)]">
                        <p>{(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원 + 배송비 0원 =
                            <span className=" text-[var(--color-black)] font-extrabold">
                                {(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원 
                            </span>
                        </p>
                    </div>

                </div>
                
            </div>

            {/* 총 결제 금액 */}
            <div className="border-t-8 text-[var(--color-black)] border-[var(--color-gray-300)] px-[var(--spacing-16-32)] flex flex-col gap-4 py-10">
                <ul>
                    <li className="flex justify-between items-center">
                        <strong>총 결제 금액</strong>
                        <strong className="text-xl font-extrabold">{(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원</strong>
                    </li>
                </ul>
                <div className="border-t"></div>
                <ul className="text-sm flex flex-col gap-2">
                    <li className="flex justify-between">
                        <p className=" text-[var(--color-gray-600)]">총 상품 금액</p>
                        <span>{getTotalProductPrice().toLocaleString()}원</span>
                    </li>
                    <li className="flex justify-between">
                        <p className=" text-[var(--color-gray-600)]">총 배송비</p>
                        <span>0원</span>
                    </li>
                    <li className="flex justify-between">
                        <p className=" text-[var(--color-gray-600)]">총 할인 금액</p>
                        <span>
                            {getTotalDiscount() > 0 && '-'}
                            {getTotalDiscount().toLocaleString()}원
                        </span>
                    </li>
                </ul>
            </div>

            <BottomActionBar 
                content={ 
                    <Button 
                    content={`${(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원 주문하기 (${cartList.length}개)`} 
                    size="xl" className="w-full"/>
                }
            />

        </>
    )
}

export default CartPrdList