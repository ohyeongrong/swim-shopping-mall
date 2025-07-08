import { useParams } from "react-router-dom";
import usePrdInquiryStore from "@/store/usePrdInquiryStore";
import usePrdReviewStore from "@/store/usePrdReviewStore";

function useFilterPrdPost() {
    const { prdId } = useParams();
    const { inquiryList } = usePrdInquiryStore();
    const { reviewList } = usePrdReviewStore();

    function getPrdPost(list, productId) {
        return [...list]
        .filter(item => item.productId === productId)
        .sort((a, b) => new Date(b.writeAt) - new Date(a.writeAt));
    }

    const filterPrdInquiryList = getPrdPost(inquiryList, prdId);
    const filterPrdReviewList = getPrdPost(reviewList, prdId);

    return {
        prdId, filterPrdInquiryList, filterPrdReviewList
    }
        
}

export default useFilterPrdPost