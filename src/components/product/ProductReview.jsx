import ReviewList from "@/components/product/ReviewList"
import ReviewWriteModal from "./ReviewWriteModal"
import usePrdReviewStore from "@/store/usePrdReviewStore"
import FullScreenModal from "../common/FullScreenModal";
import { useRef } from "react";
import useFilterPrdPost from "@/hooks/useFilterPrdPost";
import EmptyState from "@/components/common/EmptyState"



function ProductReview() {

    const formRef = useRef();

    const { isVisible, show, hide, reviewList, addReviewList } = usePrdReviewStore();

    const { filterPrdReviewList } = useFilterPrdPost();

    return (
        <>
            <div className="px-4 lg:px-0 py-10">
                <div>
                    <h3 className="font-bold text-xl">리뷰 <span className="text-[var(--color-gray-500)]">{ filterPrdReviewList.length }</span></h3>
                </div>
    
                { 
                    reviewList.length > 0
                    ? <ReviewList />
                    : <EmptyState type={'review'} link={ show }/>
                }
    
            </div>
            { 
                isVisible 
                && <FullScreenModal 
                    modalContent= { <ReviewWriteModal ref={ formRef } /> } 
                    title= "리뷰 작성하기"
                    onClose= { hide }
                    submitLabel= "등록하기"
                    onSubmit={() => {
                        const data = formRef.current?.getFormData?.();
                        addReviewList(data)
                        console.log(reviewList);
                        hide();
                    }}
                    />
            }
        </>
)
}

export default ProductReview