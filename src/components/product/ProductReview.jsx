import ReviewList from "@/components/product/ReviewList"
import ReviewWriteModal from "./ReviewWriteModal"
import usePrdReviewStore from "@/store/usePrdReviewStore"
import FullScreenModal from "../common/FullScreenModal";
import { useRef } from "react";


function ProductReview() {

    const formRef = useRef();

    const { isVisible, show, hide, reviewList, addReviewList } = usePrdReviewStore();

    return (

        <section className="prd-review-warp">
            <div className="review-title flex items-center">
                <h3>리뷰 [{ reviewList.length }]</h3>
                {/* 리스트 평균 별점 구하기 */}
                <div className="star-score flex">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M8.91 8.584 2 9.639l5 5.125L5.82 22 12 18.583 18.18 22 17 14.764l5-5.125-6.91-1.055L12 2z" clip-rule="evenodd"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M8.91 8.584 2 9.639l5 5.125L5.82 22 12 18.583 18.18 22 17 14.764l5-5.125-6.91-1.055L12 2z" clip-rule="evenodd"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M8.91 8.584 2 9.639l5 5.125L5.82 22 12 18.583 18.18 22 17 14.764l5-5.125-6.91-1.055L12 2z" clip-rule="evenodd"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M8.91 8.584 2 9.639l5 5.125L5.82 22 12 18.583 18.18 22 17 14.764l5-5.125-6.91-1.055L12 2z" clip-rule="evenodd"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M8.91 8.584 2 9.639l5 5.125L5.82 22 12 18.583 18.18 22 17 14.764l5-5.125-6.91-1.055L12 2z" clip-rule="evenodd"></path></svg>
                </div>
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