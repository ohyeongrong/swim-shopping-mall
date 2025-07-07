import feedbackOptions from "@/data/feedbackOptions"
import { useState, forwardRef, useImperativeHandle } from "react";
import useStore from "@/store/useStore";
import usePrdReviewStore from "@/store/usePrdReviewStore";
import { useParams } from "react-router-dom";


const ReviewWriteModal = forwardRef((props, ref) => {

        const { prdId } = useParams();

        const { reviewList } = usePrdReviewStore();

        const { selectedPrd } = useStore(); //나중에 구매 상품 생기면 삭제하면 될듯

        const ratingStar = 5;
        const [rating, setRating] = useState(0);
        const ratingMessage = [
            "별로예요 😞",
            "그저그래요 😐",
            "괜찮아요 🙂",
            "만족해요 😄",
            "아주 좋아요! 🤩"
        ];

        const [sizeFeedback, setSizeFeedback] = useState("");
        const [colorFeedback, setColorFeedback] = useState("");
        const [review, setReview] = useState("");
        const [images, setImages] = useState([]);

        const [height, setHeight] = useState("");
        const [weight, setWeight] = useState("");
        const [selUsualSize, setSelUsualSize] = useState("");
        const [usualSize, setUsualSize] = useState(['S', 'M', 'L', 'XL', 'XXL']);

        // 리스트 목록
        // id: reviewList.length + 1, //나중에 변경 해야함
        // productId: prdId,
        // brandName: "",
        // productName: "",
        // option: "",
        // writer: 'abcdefg', //로그인 구현하면 나중에 넣기
        // rating: 0,
        // sizeFeedback: "",
        // colorFeedback: "",
        // images: [],
        // review: "",
        // writeAt: new Date().toISOString()

        useImperativeHandle(ref, () => ({
            getFormData: () => ({
            id: reviewList.length + 1,
            writer: "abcdefg",
            productId: prdId,
            rating,
            sizeFeedback,
            colorFeedback,
            review,
            height,
            weight,
            usualSize: selUsualSize,
            images: Array.from(images),
            writeAt: new Date().toISOString(),
            })
        }));


    return (
        <div className="review-write-modal">
        
            <div className="review-prd flex">
                <div>
                    <img src={ selectedPrd.image } alt={ selectedPrd.name } />
                </div>
                <div>
                    <p>{ selectedPrd.brand }</p>
                    <p>{ selectedPrd.name }</p>
                    {/* <p>구매한 옵션</p> 이거 나중에 로그인 기능 추가하면 */}
                </div>
            </div>

            <div className="rationg-area">
                <h4>상품에 만족하셨나요?</h4>
                <div className="flex gap-2">
                    <div>
                        {
                            Array.from({ length: ratingStar }).map((_,i) =>
                                <button type="button" key={i} onClick={()=> setRating(i + 1)}>
                                    <div className="star">
                                        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.54739 0.964187C5.72735 0.58081 6.27265 0.58081 6.45261 0.964188L7.58625 3.37915C7.65704 3.52994 7.79827 3.63558 7.96291 3.66088L10.5389 4.0568C10.941 4.1186 11.1049 4.6092 10.8207 4.9003L8.92637 6.8404C8.81546 6.95399 8.76508 7.1135 8.79064 7.27019L9.23322 9.98359C9.30041 10.3956 8.86306 10.7036 8.49778 10.5016L6.24196 9.2542C6.0914 9.17094 5.9086 9.17094 5.75804 9.2542L3.50223 10.5016C3.13694 10.7036 2.69959 10.3956 2.76678 9.98359L3.20936 7.27019C3.23492 7.1135 3.18454 6.95399 3.07363 6.8404L1.17935 4.9003C0.895122 4.6092 1.05902 4.1186 1.46114 4.0568L4.03709 3.66088C4.20173 3.63558 4.34296 3.52994 4.41375 3.37915L5.54739 0.964187Z" 
                                            fill={ i < rating ? "var(--main-color)" : "var(--gray-03)"}>
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                            )
                        }
                    </div>
                { rating > 0 ? <p>{ ratingMessage[rating - 1] }</p> : <p>이 상품 어때요?</p>}
                </div>
            </div>

            <div className="feedback">
                {
                    feedbackOptions.map((feedOpt, i) =>
                        <div key={feedOpt + i}>
                            <h4>{ feedOpt.label }</h4>
                            <div className="flex gap-2">
                                {
                                    feedOpt.options.map((opt, i) => 
                                        <label key={opt + i}>
                                            <input type="radio" name={ feedOpt.key } value={ opt } required 
                                                onChange={(e)=> { 
                                                    if(feedOpt.key === "size"){ setSizeFeedback(e.target.value) }
                                                    else if(feedOpt.key === "color"){ setColorFeedback(e.target.value) } 
                                                }}/>
                                            <span class="radio-button">{ opt }</span>
                                        </label>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="review-area">
                <h4>후기 작성</h4>
                <input 
                    type="file" 
                    id="review-write"
                    accept=".png, .jpg" 
                    multiple
                    onChange={(e)=>{ setImages(e.target.files) }}
                />
                <textarea 
                    id="review-write" 
                    placeholder="구매하신 아이템의 후기를 20자이상 넘겨주세요."
                    maxLength="5000"
                    minLength="20"
                    required
                    onChange={(e)=>{ setReview(e.target.value) }}
                ></textarea>
            </div>

            <div className="user-spec flex flex-col gap-3">
                <div>
                    <label htmlFor="height">키</label>
                    <div className="flex items-center gap-2">
                        <input 
                            type="number" id="height" maxLength="3" min="100" max="250" step="1" 
                            placeholder="키를 입력해주세요." required
                            onChange={ e => setHeight(e.target.value) }
                        />
                        <span>cm</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="weight">몸무게</label>
                    <div className="flex items-center gap-2">
                        <input 
                            type="number" id="weight" maxLength="2" min="10" max="200" step="1" 
                            placeholder="몸무게를 입력해주세요." required
                            onChange={ e => setWeight(e.target.value) }
                        />
                        <span>kg</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h4>평소 사이즈</h4>
                    <div className="flex gap-2">
                        {
                            usualSize.map((opt, i) => 
                                <label key={ opt + i }>
                                    <input type="radio" name="usualSize" value={ opt } required 
                                        onChange={(e)=> { setSelUsualSize(e.target.value) }}/>
                                    <span className="radio-button">{ opt }</span>
                                </label>
                            )
                        }
                    </div>    
                </div>
            </div>

        </div>
    )
});

export default ReviewWriteModal