import { useState } from "react"
import ProductDetail from "./ProductDetail"
import ProductReview from "./ProductReview";
import ProductInquiry from "./ProductInquiry"
import usePrdInquiryStore from "@/store/usePrdInquiryStore"
import usePrdInquiry from "@/hooks/usePrdInquiry";


function ProductTapMenu() {

    const [activeTab, setActiveTab] = useState('detail');
    const { inquiryList, hide } = usePrdInquiryStore();

    const { filterPrdInquiryList } = usePrdInquiry();

    return(
            <div className="prd-detail-info">
                <div className="tap-menu">
                    {/* 스크롤하면 position: fixed로 */}
                    <ul className="tap">
                        <li>
                            <button type="button" onClick={()=>{setActiveTab('detail')}}>상세정보</button>
                        </li>
                        <li>
                            <button type="button" onClick={()=>{setActiveTab('review')}} >
                                리뷰 [0]
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={()=>{ setActiveTab('inquiry'), hide() }}>
                                문의 [{ filterPrdInquiryList.length > 0 ? filterPrdInquiryList.length : 0 }]
                            </button>
                        </li>
                    </ul>
                </div>
                {/* 상세정보, 리뷰, 문의에 따라 변화 */}
                <div className="tap-content">
                    {activeTab === 'detail' && <ProductDetail/>}
                    {activeTab === 'review' && <ProductReview/>}
                    {activeTab === 'inquiry' && <ProductInquiry/>}
                </div>
            </div>
    )
}

export default ProductTapMenu