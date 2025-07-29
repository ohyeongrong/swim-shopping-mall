import useCartStore from "@/store/useCartStore"
import { useState } from "react";
import { CheckBoxIcon, CloseIcon } from "@/components/common/Icon";
import useStore from "@/store/useProdcutStore"
import ProductCard from "../common/ProductCard";
import Button from '@/components/common/Button';
import BottomActionBar from '@/components/common/BottomActionBar';
import OptionBottomSheet from "../common/OptionBottomSheet";
import { MoreArrowIcon } from "@/components/common/Icon";
import { useNavigate } from "react-router-dom";

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

    const checkedItems = cartList.filter(item => item.checked);

    const navigate = useNavigate()


    return (
        
        <div className="grid lg:grid-cols-6 lg:gap-16 lg:py-1 relative">
            {/* 카트 리스트 */}
            <div className="lg:col-span-4 text-sm lg:text-base flex flex-col gap-4 pb-10">
                {/* 상단 타이틀 진행도 */}
                <div className="hidden lg:flex justify-between py-10">
                    <h2 className="text-4xl font-bold">장바구니</h2>
                    <div className="flex items-center gap-2 font-bold">
                        <p>01 장바구니</p>
                        <div className="rotate-90">
                            <MoreArrowIcon stroke="var(--color-gray-400)"/>
                        </div>
                        <p className="text-[var(--color-gray-400)]">02 주문서 작성</p>
                        <div className="rotate-90">
                            <MoreArrowIcon stroke="var(--color-gray-400)"/>
                        </div>
                        <p className="text-[var(--color-gray-400)]">03 주문완료</p>
                    </div>
                </div>

                {/* 상품 선택, 삭제 */}
                <div className="flex justify-between  font-bold border-b-2 border-[var(--color-black)] py-3  px-4 lg:px-0">
                    <label className="flex items-center gap-1.5" htmlFor="all-checked">
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
                    <div className="text-xs lg:text-sm  text-[var(--color-gray-700)]">
                        <button 
                            type="button"
                            onClick={ removeChecked }
                        >
                            선택 삭제</button>
                    </div>
                </div>

                {/* 카트 제품 반복 구간 */}
                <div className="flex flex-col gap-4.5 justify-between px-4 lg:px-0">
                    {
                        cartList.map((prd, i)=> {
                            return (
                                
                                    <div className="w-full flex flex-col gap-4.5" key={prd.id + i}>

                                        <div className="flex justify-between font-bold">
                                            <label className="flex items-center  gap-1.5" htmlFor={`item-checked-${prd.id}`}>
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
                                        <ProductCard product={prd} direction='horizontal' showOption={true} showBrand={false} imgHeight="h-30 lg:h-40"/>
                                        
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

                                            <Button 
                                                className="w-full"  
                                                size="sm" 
                                                content="바로 구매"
                                                onClick={() => navigate('/order', { state: { products: [prd] } })}
                                            />
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
            <div className="border-t-8  border-[var(--color-gray-300)] lg:hidden"></div>       
            {/* 총 결제 금액 */}
            <div className="lg:col-span-2 lg:border-l lg:border-[var(--color-gray-300)] text-[var(--color-black)]  px-4 lg:px-10 flex flex-col gap-4 py-10">
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
                    content={`${(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원 주문하기 (${checkedItems.length}개)`} 
                    size="xl" className="w-full"
                    onClick={() => navigate('/order', { state: { products: checkedItems } })}
                    />
                }
            />

        </div>
    )
}

export default CartPrdList