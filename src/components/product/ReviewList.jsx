import usePrdReviewStore from "@/store/usePrdReviewStore"
import { Link } from "react-router-dom"
import useFilterPrdPost from "@/hooks/useFilterPrdPost";

function ReviewList() {

    const { reviewList, toggleReview, isExpanded } = usePrdReviewStore();

    const { filterPrdReviewList } = useFilterPrdPost();

    const maskUserId = (id) => {
        const idBackSlice = id.slice(0, -3);
        return `${idBackSlice}***`;
    };

    return (
        <div className="review-list">
            <div className="media-review-summary">
                <ul>
                    {/* 이미지 반복 마지막 이미지에는 위에 더보기 넣기 */}
                    <li><Link><img src="#" alt="리뷰이미지" /></Link></li>
                </ul>
            </div>

            <div className="review-sort-wrap flex justify-between">
                <div>
                    <input type="checkbox" id="my-filter" />
                    <label htmlFor="my-filter">나의 맞춤 필터</label>
                </div>

                <select>
                    <option value="new">최신순</option>
                    <option value="high">평점 높은순</option>
                    <option value="low">평점 낮은순</option>
                </select>

            </div>

            <div className="prd-review-list-wrap">
                <ul>
                    {/* 리뷰 리스트 반복 */}
                    {
                        filterPrdReviewList.map((list, i) =>
                            <li className="prd-review-list" key={ list.id + i }>
                                <div className="review-user-info flex justify-between ">
                                    <div className="flex items-center">
                                        <div className="star-score flex">
                                        {
                                            [...Array(5)].map((_, i) => {
                                                const isFilled = i < list.rating;
                                                return <svg key={ i } className={ isFilled ? "star-fill" : "star-empty" }viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" role="img"><path fill="currentColor" fill-rule="evenodd" d="M8.91 8.584 2 9.639l5 5.125L5.82 22 12 18.583 18.18 22 17 14.764l5-5.125-6.91-1.055L12 2z" clip-rule="evenodd"></path></svg>
                                                }
                                            )
                                        }
                                        </div>
                                        <p>{ maskUserId(list.writer) }</p>
                                    </div>
                                    <p>{ list.writeAt.substring(0, 10) }</p>
                                </div>

                                <div className="review-option flex justify-between">
                                    <div>
                                        <dl className="flex">
                                            {/* 나중에 구매 생기면 옵션 부분 조정 */}
                                            <dt>구매 옵션</dt>
                                            <dd>블랙, M</dd>
                                        </dl>
                                        <dl className="flex">
                                            <dt>체형</dt>
                                            <dd>키 { list.height }cm 체중 { list.weight }kg 평소사이즈 { list.usualSize }</dd>
                                        </dl>
                                    </div>
                                </div>

                                <div className="review-content">
                                    <p className={ !isExpanded && "expand" }>{ list.review }</p>
                                    
                                    {
                                        list.review.length > 25 && (
                                            <button onClick={() => { toggleReview(list.id)}}> 
                                                { !isExpanded ? "더보기" : "접기" }
                                            </button>
                                        )
                                    }
                                    
                                    {
                                        reviewList.map((list, i) => {
                                            if(list.images.length > 0) {
                                                return <img src={ list.image } alt={ list.id + i } key={ list.id + i }/>
                                            }
                                        })
                                    }
                                    
                                </div>

                                <div className="option-items flex gap-2">
                                    <dl className="flex">
                                        <dt>사이즈</dt>
                                        <dd>{ list.sizeFeedback }</dd>
                                    </dl>
                                    <dl className="flex">
                                        <dt>색상</dt>
                                        <dd>{ list.colorFeedback }</dd>
                                    </dl>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>

            <div className="pagination">
                <Link>화살표</Link>
                {/* 여기도 반복문 해야할듯 */}
                <Link>1</Link>
            </div>

        </div>
    )
}

export default ReviewList