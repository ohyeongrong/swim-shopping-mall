import ReviewList from "@/components/product/ReviewList"
import ReviewWriteModal from "./ReviewWriteModal"
import usePrdReviewStore from "@/store/usePrdReviewStore"
import FullScreenModal from "../common/FullScreenModal";
import { useRef } from "react";
import useFilterPrdPost from "@/hooks/useFilterPrdPost";


function ProductReview() {

    const formRef = useRef();

    const { isVisible, show, hide, reviewList, addReviewList } = usePrdReviewStore();

    const { filterPrdReviewList } = useFilterPrdPost();

    return (

        <section className="prd-review-warp">
            <div className="review-title flex items-center">
                <h3>리뷰 [{ filterPrdReviewList.length }]</h3>
            </div>

            { 
                reviewList.length > 0
                ? <ReviewList />
                : <div>
                    <p>리뷰가 없습니다.</p>
                </div>
            }

            {/* 리뷰 있없 유무 상관없이 */}
            <button type="button" onClick={ show }>상품 리뷰 작성하기</button>

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

        </section>
    )
}

export default ProductReview