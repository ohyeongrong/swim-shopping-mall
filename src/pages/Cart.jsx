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
                <div className="cart-area">
                    <div className="select-area">
                        <div className="checkbox">
                            <input type="checkbox" id="all-checkbox" />
                            <label htmlFor="all-checkbox">전체상품 (0)</label>
                        </div>
                        <button type="button">선택 삭제</button>
                        <button type="button">품절 삭제</button>
                    </div>
                    <div className="product-area">
                        <Link>
                            <div className="product-item">
                                <div className="item-thumb">
                                    <img src="#" alt="상품이미지" />
                                    <button type="button">좋아요</button>
                                </div>
                                <div className="item-info">
                                    <p>브랜드명</p>
                                    <p>상품명</p>
                                    <p>가격</p>
                                    <p>색상 / 사이즈 / 수량</p>
                                </div>
                                <div className="buy-btn">
                                    <button type="button">옵션 변경</button>
                                    <button type="button">바로 구매</button>
                                </div>
                                <button type="button">장바구니에서 삭제</button>
                            </div>
                        </Link>
                    </div>
                    <div className="calculate-item">
                        <p>4,000 원 + 배송비 3,000 원 = 7,000원 </p>
                        <button type="button">툴팁</button>
                        <div className="tooltip">
                            <p> [업체배송] 무료배송</p>
                            <p> [업체배송] 1000원 미만 결제 시 배송비 3,000원</p>
                        </div>
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