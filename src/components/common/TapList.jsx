import { useState } from "react"


function TapList() {

    return(
            <div className="prd-detail-info">
                <div className="tap-menu">
                    {/* 스크롤하면 position: fixed로 */}
                    <ul className="tap">
                        <li>
                            <button type="button">상품 0</button>
                        </li>
                        <li>
                            <button type="button">브랜드</button>
                        </li>
                    </ul>
                </div>
                {/* 상세정보, 리뷰, 문의에 따라 변화 */}
                <div className="tap-content">
                    {/* {activeTab === 'detail' && <ProductDetail/>}
                    {activeTab === 'review' && <ProductReview/>}
                    {activeTab === 'inquiry' && <ProductInquiry/>} */}
                </div>
            </div>
    )
}

export default ProductTapMenu