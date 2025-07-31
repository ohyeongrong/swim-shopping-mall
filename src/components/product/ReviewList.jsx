import usePrdReviewStore from "@/store/usePrdReviewStore"
import useFilterPrdPost from "@/hooks/useFilterPrdPost";
import { StarIcon } from "@/components/common/Icon";
import Button from '@/components/common/Button';


function ReviewList() {

    const { reviewList, toggleReview, isExpanded, show } = usePrdReviewStore();

    const { filterPrdReviewList } = useFilterPrdPost();

    const maskUserId = (id) => {
        const idBackSlice = id.slice(0, -3);
        return `${idBackSlice}***`;
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-4">
                <ul className="flex flex-col w-full">
                    {/* 리뷰 리스트 반복 */}
                    {
                        filterPrdReviewList.map((list, i) =>
                            <li key={ list.id + i } className="border-b  border-[var(--color-gray-400)] flex flex-col gap-3 py-6">

                                {/* 별점, 글쓴이, 날짜 */}
                                <div className="flex justify-between text-xs">
                                    <div className="flex items-center gap-1">
                                        <div className="flex">
                                        {
                                            [...Array(5)].map((_, i) => {
                                                const isFilled = i < list.rating;
                                                return <StarIcon key={i} fill={ !isFilled && "var(--color-gray-400)" }/>
                                                }
                                            )
                                        }
                                        </div>
                                        <p>{ maskUserId(list.writer) }</p>
                                    </div>
                                    <p className="text-[var(--color-gray-500)]">{ list.writeAt.substring(0, 10) }</p>
                                </div>

                                {/* 구매한 옵션 */}
                                <div className="flex flex-col gap-0.5 border-t border-b border-[var(--color-gray-300)] p-2 text-xs text-[var(--color-gray-700)] ">
                                    <dl className="flex gap-1">
                                        <dt className="font-bold">구매 옵션</dt>
                                        <dd>블랙, M</dd>
                                    </dl>
                                    <dl className="flex gap-1">
                                        <dt className="font-bold">체형</dt>
                                        <dd>키 { list.height }cm | 체중 { list.weight }kg | 평소사이즈 { list.usualSize }</dd>
                                    </dl>
                                </div>

                                {/* 리뷰 이미지 */}
                                {
                                    reviewList.map((list, i) => {
                                        if(list.images.length > 0) {
                                            return <div className="flex aspect-square"><img src={ list.image } alt={ list.id + i } key={ list.id + i }/></div>
                                        }
                                    })
                                }
                                {/* 리뷰 내용 */}
                                <div className="text-sm">
                                    <p className={ !isExpanded && "line-clamp-1 text-ellipsis" }>{ list.review }</p>
                                    {
                                        list.review.length > 25 && (
                                            <button className="text-xs text-[var(--color-gray-500)]" onClick={() => { toggleReview(list.id)}}> 
                                                <u>{ !isExpanded ? "더보기" : "접기" }</u> 
                                            </button>
                                        )
                                    }
                                </div>

                                {/* 사이즈, 컬러 피드백 */}
                                <div className="flex gap-2 text-xs">
                                    <dl className="flex gap-1 border px-1.5 py-0.5 border-[var(--color-gray-400)] ">
                                        <dt className="font-bold after:ml-1 after:content-['|']">사이즈</dt>
                                        <dd>{ list.sizeFeedback }</dd>
                                    </dl>
                                    <dl className="flex gap-1 border px-1.5 py-0.5  border-[var(--color-gray-400)] ">
                                        <dt className="font-bold after:ml-1 after:content-['|']">색상</dt>
                                        <dd>{ list.colorFeedback }</dd>
                                    </dl>
                                </div>
                            </li>
                        )
                    }

                </ul>

                <Button content="상품 리뷰 작성하기" size="lg" className="w-full"  onClick={ show }/>

            </div>
        </div>
    )
}

export default ReviewList