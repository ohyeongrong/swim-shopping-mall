import { Link } from "react-router-dom"

function Cart() {
    return (
        <>
            {/* 마이페이지, 카트, 로그인 페이지 등 헤더 공통으로 사용하면 좋을 듯 */}
            <header>
                <div className="back-link">
                    <Link aria-label="뒤로가기">뒤로가기</Link>
                </div>
                <h1>CART</h1>
            </header>

            <section>
                {/* 이 부분은 제품 추가 될때 마다 반복 하면 될 듯 */}
                <div className="cart-warp">
                    <div className="select-area">
                        <div className="checkbox">
                            <input type="checkbox" id="all-checkbox" />
                            <label htmlFor="all-checkbox">전체 상품(1)</label>
                        </div>
                        <div className="delete-btn">
                            <button type="button">선택 삭제</button>
                            <button type="button">품절 삭제</button>
                        </div>
                    </div>
                    
                    <div className="product-area">
                        <Link to={"/product"}>
                            <div className="product-item">
                                <div className="item-select">
                                    <input type="checkbox" id="all-checkbox" />
                                    <label htmlFor="all-checkbox">브랜드명</label>
                                    <button type="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 4.99609L11.9961 11.9961L4.99609 18.9961" stroke="#AAAAAA" stroke-width="2" stroke-miterlimit="10"></path><path d="M19.0039 18.9961L14.0039 13.9961" stroke="#AAAAAA" stroke-width="2" stroke-miterlimit="10"></path><path d="M5.00391 4.99609L10.0039 9.99609" stroke="#AAAAAA" stroke-width="2" stroke-miterlimit="10"></path></svg>
                                    </button>
                                </div>
                                <div className="item-area">
                                    <div className="prd-thumb">
                                        <img src="#" alt="상품이미지" />
                                        <button type="button">좋아요</button>
                                    </div>
                                    <div className="prd-info">
                                        <p>상품명</p>
                                        <p>색상 / 사이즈 / 수량</p>
                                        <p>가격</p>
                                    </div>
                                </div>
                                <div className="buy-btn">
                                    <button type="button">옵션 변경</button>
                                    <button type="button">바로 구매</button>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                    <div className="calculate-item">
                        <p>4,000 원 + 배송비 3,000 원 = 7,000원 </p>
                    </div>
                </div>

                <div className="total-area">
                    <dl className="total-sum">
                        <dt>총 결제 금액</dt>
                        <dd>123,000원</dd>
                    </dl>
                    <dl className="total-detail">
                        <dt>총 상품 금액</dt>
                        <dd>130,000원</dd>
                        <dt>총 배송비</dt>
                        <dd>3,000원</dd>
                        <dt>총 할인 금액</dt>
                        <dd>-5,400원</dd>
                    </dl>
                </div>
                {/* 하단에 접착해야함 */}
                <div className="order-btn-area">
                    <p>총 1개</p>
                    <button type="button">12,000원 주문하기</button>
                </div>
            </section>
        </>
    )
}

export default Cart