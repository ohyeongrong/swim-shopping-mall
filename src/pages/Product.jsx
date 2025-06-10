function Product() {
    return (
        <>
            {/* 공용헤더 */}

            {/* 상품 섬네일 영영 */}
            <section className="prd-thum">
                <div className="swiper-area">
                    <ul>
                        {/* 여기도 상품 썸네일 갯수에 따라 반복문 */}
                        <li aria-label="1 / 3"><img src="#" alt="상품명" /></li>
                    </ul>
                </div>
                {/* 프로그레스 바 */}
                <div className="slide-pagination">
                    <div className="progressbar-fill"></div>
                </div>
            </section>

            {/* 상품 기본 정보 영역 */}
            <section className="prd-default-info">
                <div className="prd-title">
                    <button type="button">좋아요</button>
                    <Link>브랜드명</Link>
                    <p>제품명</p>
                </div>
                <div className="price-info">
                    <del>159,000</del>
                    <div>
                        <span>20%</span>
                        <span>127,200</span>
                        <span>쿠폰적용가</span>
                        <button type="button">쿠폰받기</button>
                    </div>
                </div>
            </section>

            {/* 상품 디테일 정보 영영 */}
            <section className="prd-detail-info">
                <div className="tap-menu">
                    <ul>
                        <li>
                            <Link>상세정보</Link>
                        </li>
                        <li>
                            <Link>리뷰</Link>
                        </li>
                        <li>
                            <Link>문의</Link>
                        </li>
                    </ul>
                </div>
                {/* 상세정보, 리뷰, 문의에 따라 변화 */}
                <div className="tap-content">
                    <p>제품 상세 정보</p>
                </div>
            </section>
        </>
    )
}

export default Product