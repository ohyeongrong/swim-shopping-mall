function ProductReview() {
    return(
        <div className="prd-review-warp">
            <div className="review-title">
                <h3>리뷰 [0]</h3>
            </div>
            <div className="review-panel">
                <div className="rating">
                    <div>구매자평점</div>
                    <div>별아이콘</div>
                    <span>4.5</span>
                </div>
                <div className="review-score">
                    <ul>
                        <li>
                            <span>아주 좋아요</span>
                            <div>바</div>
                            <span>00</span>
                        </li>
                        <li>
                            <span>맘에 들어요</span>
                            <div>바</div>
                            <span>00</span>
                        </li>
                        <li>
                            <span>보통이에요</span>
                            <div>바</div>
                            <span>00</span>
                        </li>
                        <li>
                            <span>그냥 그래요</span>
                            <div>바</div>
                            <span>00</span>
                        </li>
                        <li>
                            <span>별로예요</span>
                            <div>바</div>
                            <span>00</span>
                        </li>
                    </ul>
                </div>
            </div>
            <button type="button">상품 리뷰 작성하기</button>
            <div className="media-review-summary">
                <span>사진/동영상</span>
                <span>00</span>
                <div>
                    <img src="#" alt="리뷰이미지" />
                </div>
            </div>
            <div className="review-sort-wrap">
                    <select>
                        <option value="">최신순</option>
                        <option value="">평점 높은순</option>
                        <option value="">평점 낮은순</option>
                    </select>
            </div>
            <div className="prd-review-list">
                <ul>
                    <li>
                        <div className="review-user-info">
                            <p>유저아이디</p>
                            <div className="star-score">
                                별점
                            </div>
                            <p>날짜</p>
                            <button type="button">추천</button>
                        </div>

                        <div className="review-option">
                            <dl>
                                <dt>구매옵션</dt>
                                <dd>블랙, M</dd>
                            </dl>
                        </div>
                        <div className="review-comment">
                            <p>리뷰내용</p>
                            <button type="button">더보기</button>
                        </div>
                        <div className="review-summary">
                            <div className="review-summary-item">
                                <label>사이즈</label>
                                <sapn>잘맞아요</sapn>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductReview