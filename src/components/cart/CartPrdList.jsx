import { Link } from "react-router-dom"
import useCartStore from "@/store/useCartStore"
import BottomSheetModal from "@/components/common/BottomSheetModal";
import OptionEditModal from "@/components/cart/OptionEditModal";
import { useState } from "react";
import { CheckBoxIcon, CloseIcon } from "@/components/common/Icon";
import LikeBtn from "@/components/common/LikeBtn";
import useStore from "@/store/useProdcutStore"
import ProductCard from "../common/ProductCard";

function CartPrdList() {
    

    const { 
        cartList, removeCartList, toggleAllChecked, 
        toggleItemChecked, removeChecked, dcPrice, 
        getTotalProductPrice, getTotalDiscount
    } = useCartStore();

    const { show, isVisible } = useStore();

    const [selectedPrd, setSelectedPrd] = useState(null);

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
                                        <ProductCard prd={prd} type='cart'/>
                                        
                                        {/* 카트 제품 버튼 구간 */}
                                        <div className="flex justify-between gap-2">
                                            <button
                                                className="px-4 py-2 border border-[var(--color-gray-500)] flex-1/2 text-[var(--color-black)]"
                                                type="button"
                                                onClick={()=>{
                                                    setSelectedPrd(prd)
                                                    show()
                                                }}
                                            >
                                                옵션 변경</button>
                                            <button className="px-4 py-2 bg-[var(--color-black)] text-[var(--color-white)] flex-1/2" type="button">바로 구매</button>
                                        </div>

                                        <div className="border-b border-[var(--color-gray-300)]"></div>
                                        
                                        {/* 옵션 변경 모달창 - 현재 오류 있음 닫기 안됨 */}
                                        {
                                            isVisible
                                            && <BottomSheetModal modalContent={<OptionEditModal selectedPrd={selectedPrd}/> } />
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
                <div className="border-t-1 border-[]"></div>
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

            {/* 바텀액션바 - 공용 분리해서 작업하고 home꺼는 nav로 따로 컴포넌트 생성 */}
            <div className="order-btn-warp">
                <div className="btn-area">
                    <button type="button">{(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원 주문하기 ({cartList.length}개)</button>
                </div>
            </div>
        </>
    )
}

export default CartPrdList