import { useState } from "react"
import ProductDetail from "./ProductDetail"
import ProductReview from "./ProductReview";
import ProductInquiry from "./ProductInquiry"
import usePrdInquiryStore from "@/store/usePrdInquiryStore"
import TapList from "@/components/common/TapList";
import usePrdReviewStore from "@/store/usePrdReviewStore";
import useFilterPrdPost from "@/hooks/useFilterPrdPost";


function ProductTapMenu() {

    const { reviewList } = usePrdReviewStore();
    const { inquiryList } = usePrdInquiryStore();

    const { filterPrdInquiryList, filterPrdReviewList } = useFilterPrdPost();

    const ProductTabs = [
        { type: 'detail', label: "상세정보"},
        { type: 'review', label: "리뷰" , length: filterPrdReviewList.length },
        { type: 'inquiry', label: "문의", length: filterPrdInquiryList.length },
    ];

    
    const[onTabClick, setOnTapClick] = useState('detail');


    return(
            <>
                <TapList 
                    tabList={ProductTabs}
                    onTabClick={onTabClick}
                    onTabChange={setOnTapClick}
                />
                {/* 상세정보, 리뷰, 문의에 따라 변화 */}
                <section>
                    {onTabClick === 'detail' && <ProductDetail/>}
                    {onTabClick === 'review' && <ProductReview/>}
                    {onTabClick === 'inquiry' && <ProductInquiry/>}
                </section>
            </>
    )
}

export default ProductTapMenu