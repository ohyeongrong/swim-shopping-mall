import { useParams } from "react-router-dom";
import usePrdInquiryStore from "@/store/usePrdInquiryStore";

function usePrdInquiry() {
    const { prdId } = useParams();
    const { inquiryList } = usePrdInquiryStore();

    function getPrdInquiry(list, productId) {
        return [...list]
        .filter(item => item.productId === productId)
        .sort((a, b) => new Date(b.writeAt) - new Date(a.writeAt));
    }

    const filterPrdInquiryList = getPrdInquiry(inquiryList, prdId);

    return {
        prdId, filterPrdInquiryList
    }
        
}

export default usePrdInquiry