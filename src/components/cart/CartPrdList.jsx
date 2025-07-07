import { Link } from "react-router-dom"
import useStore from "@/store/useStore"
import BottomSheetModal from "@/components/common/BottomSheetModal";
import OptionEditModal from "@/components/cart/OptionEditModal";
import { useState } from "react";

function CartPrdList() {
    

    const { 
        cartList, removeCartList, toggleAllChecked, 
        toggleItemChecked, removeChecked, dcPrice, 
        getTotalProductPrice, getTotalDiscount, show, isVisible
    } = useStore();

    const [selectedPrd, setSelectedPrd] = useState(null);

    return (
        <>
            <div className="cart-warp">
                <div className="select-area">
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            id="all-checked" 
                            checked= { cartList.length > 0 && cartList.every((item => item.checked)) }
                            onChange={ toggleAllChecked }
                        />
                        <label htmlFor="all-checked">전체 상품({cartList.length})</label>
                    </div>
                    <div className="delete-btn">
                        <button 
                            type="button"
                            onClick={ removeChecked }
                        >
                            선택 삭제</button>
                    </div>
                </div>

                <div className="product-area">
                    {/* 제품 반복 */}
                    {
                        cartList.map((prd, i)=> {
                            return (
                                
                                    <div className="product-item" key={prd.id + i}>

                                        <div className="item-select">
                                            <div>
                                                <input id="item-checked" type="checkbox" checked={ prd.checked } onChange={()=>{ toggleItemChecked(prd) }}/>
                                                <label htmlFor="item-checked">{ prd.brand }</label>
                                            </div>
                                            <button 
                                                type="button"
                                                onClick={()=>{
                                                    removeCartList(prd)
                                                }}
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 4.99609L11.9961 11.9961L4.99609 18.9961" stroke="var(--gray-02)"></path><path d="M19.0039 18.9961L14.0039 13.9961" stroke="var(--gray-02)"></path><path d="M5.00391 4.99609L10.0039 9.99609" stroke="var(--gray-02)"></path></svg>
                                            </button>
                                        </div>

                                        <Link to={`/product/${prd.id}`}>
                                            <div className="item-area">
                                                <div className="prd-thumb">
                                                    <img src={ prd.image } alt={ prd.name } />
                                                    {/* <LikeBtn /> */}
                                                </div>
                                                <div className="prd-info">
                                                    <p>{ prd.name }</p>
                                                    <p>사이즈 { prd.selectedOption } / 수량 { prd.quantity }</p>
                                                    
                                                    {
                                                        prd.saleRate > 0
                                                        ? <>
                                                            <del>{(prd.price * prd.quantity).toLocaleString()}</del>
                                                            <div>
                                                                <span className="discount">{ prd.saleRate }%</span>
                                                                <span>{(dcPrice(prd) * prd.quantity).toLocaleString()}원</span>
                                                            </div>
                                                        </>
                                                        :   <div>
                                                                <span>{(dcPrice(prd) * prd.quantity).toLocaleString()}원</span>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="buy-btn">
                                            <button 
                                                type="button"
                                                onClick={()=>{
                                                    setSelectedPrd(prd)
                                                    show()
                                                }}
                                            >
                                                옵션 변경</button>
                                            <button type="button">바로 구매</button>
                                        </div>

                                        <div className="calculate-item">
                                            <p>{(dcPrice(prd) * prd.quantity).toLocaleString()} 원 + 배송비 0 원 = {(dcPrice(prd) * prd.quantity).toLocaleString()}원 </p>
                                        </div>

                                        {
                                            isVisible
                                            && <BottomSheetModal modalContent={<OptionEditModal selectedPrd={selectedPrd}/> } />
                                        }

                                    </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="total-area">
                <dl className="total-sum">
                    <dt>총 결제 금액</dt>
                    <dd>{(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원</dd>
                </dl>
                <dl className="total-detail">
                    <dt>총 상품 금액</dt>
                    <dd>{ (getTotalProductPrice()).toLocaleString() }원</dd>
                    <dt>총 배송비</dt>
                    <dd>0원</dd>
                    <dt>총 할인 금액</dt>
                    <dd>
                        {
                            getTotalDiscount() > 0
                            && '-'
                        }
                        { (getTotalDiscount()).toLocaleString() }원</dd>
                </dl>
            </div>

            {/* 하단에 접착해야함 */}
            <div className="btn-area">
                <button type="button">{(getTotalProductPrice() - getTotalDiscount()).toLocaleString()}원 주문하기 ({cartList.length}개)</button>
            </div>
        </>
    )
}

export default CartPrdList