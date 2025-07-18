import feedbackOptions from "@/data/feedbackOptions"
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import useStore from "@/store/useProdcutStore";
import usePrdReviewStore from "@/store/usePrdReviewStore";
import { useParams } from "react-router-dom";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { StarIcon, PlusIcon, DeleteIcon } from "@/components/common/Icon";



const ReviewWriteModal = forwardRef((props, ref) => {

        const { prdId } = useParams();

        const { reviewList, isVisible } = usePrdReviewStore();

        const { selectedPrd } = useStore(); //나중에 구매 상품 생기면 삭제하면 될듯

        useBodyScrollLock(isVisible)

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

        useEffect(() => {
            return () => {
                images.forEach(image => URL.revokeObjectURL(image));
            };
        }, [images]);

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
            images,
            writeAt: new Date().toISOString(),
            })
        }));


    return (
        <>
            <div className="flex flex-col gap-2">
                <p className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']">상품에 만족하셨나요?</p>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {
                            Array.from({ length: ratingStar }).map((_,i) =>
                                <button type="button" key={i} onClick={()=> setRating(i + 1)}>
                                    <div>
                                        <StarIcon width="24" height="24" fill={ i < rating ? "var(--main-black)" : "var(--color-gray-400)"}/>
                                    </div>
                                </button>
                            )
                        }
                    </div>
                    <div className="text-xs text-[var(--color-gray-600)]">
                        { rating > 0 ? <p>{ ratingMessage[rating - 1] }</p> : <p>이 상품 어때요?</p>}
                    </div>
                </div>
            </div>

            {
                feedbackOptions.map((feedOpt, i) =>
                    <div
                        className="flex flex-col gap-2"
                        key={feedOpt + i}>
                        <p className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']">{ feedOpt.label }</p>
                        <div className="flex gap-2">
                            {
                                feedOpt.options.map((opt, i) => 
                                    <label key={opt + i} className="cursor-pointer">
                                        <input
                                            id={feedOpt.key + opt}
                                            className="peer hidden"
                                            type="radio"
                                            name={feedOpt.key}
                                            value={opt}
                                            required
                                            onChange={(e) => {
                                            if (feedOpt.key === "size") setSizeFeedback(e.target.value);
                                            else if (feedOpt.key === "color") setColorFeedback(e.target.value);
                                            }}
                                        />
                                        <div className="bg-[var(--color-gray-300)] peer-checked:bg-[var(--color-black)] peer-checked:text-[var(--color-white)] px-4 py-1.5 rounded-full text-[var(--color-gray-600)] text-sm text-center">
                                            {opt}
                                        </div>
                                    </label>
                                )
                            }
                        </div>
                    </div>
                )
            }

            <div className="flex flex-col gap-2">
                <p className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']">후기 작성</p>
                <div className="flex gap-2">
                    <label htmlFor="review-photo">
                        <input
                            className="peer hidden"
                            type="file" 
                            id="review-photo"
                            accept=".png, .jpg" 
                            multiple
                            onChange={(e)=>{ 
                                const newFile = Array.from(e.target.files);
                                if(images.length + newFile.length > 5){
                                    alert("이미지는 최대 5개까지 첨부할 수 있어요.");
                                    return
                                }
                                setImages(prev => [...prev, ...newFile]) 
                            }}
                        />
                        <div className="w-14 h-14 text-[var(--color-gray-600)] border border-[var(--color-gray-400)] flex flex-col items-center justify-center text-xs">
                            <PlusIcon width="12" height="12" fill="var(--color-gray-400)"/>
                            { images.length }/5
                        </div>
                    </label>
                    <div className="file-thum flex">
                        {/* 첨부파일 썸네일, 첨부파일 삭제 */}
                        { 
                            images.length > 0 
                            && images.map((image, i) => (
                                <div className="relative">
                                    <button className="absolute z-10 right-1 top-1" type="button" onClick={() => {
                                        setImages(prev => prev.filter((_, index) => index !== i));
                                    }}>
                                        <DeleteIcon stroke="var(--color-black)"/>
                                    </button>
                                    <img 
                                    key={i}
                                    src={URL.createObjectURL(image)} 
                                    alt={`preview-${i}`}
                                    className="w-14 h-14 object-cover"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <textarea
                    className="px-4 py-3 border border-[var(--color-gray-400)] h-60 focus:outline-none"
                    id="review-write" 
                    placeholder="구매하신 아이템의 후기를 20자이상 넘겨주세요."
                    maxLength="5000"
                    minLength="20"
                    required
                    onChange={(e)=>{ setReview(e.target.value) }}
                ></textarea>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                    {/* 키 입력 */}
                    <label htmlFor="height" className="flex flex-col gap-1 w-1/2">
                    <p className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']">키</p>
                    <div className="flex items-center gap-2">
                        <input
                        id="height"
                        type="number"
                        min="100"
                        max="250"
                        step="1"
                        placeholder="키를 입력해주세요."
                        required
                        onChange={(e) => setHeight(e.target.value)}
                        className="px-3 py-2 border border-[var(--color-gray-400)] focus:outline-none w-full placeholder:text-xs"
                        />
                        <p className="text-sm">cm</p>
                    </div>
                    </label>

                    {/* 몸무게 입력 */}
                    <label htmlFor="weight" className="flex flex-col gap-1 w-1/2">
                        <p className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']">몸무게</p>
                        <div className="flex items-center gap-2">
                            <input
                            id="weight"
                            type="number"
                            min="10"
                            max="200"
                            step="1"
                            placeholder="몸무게를 입력해주세요."
                            required
                            onChange={(e) => setWeight(e.target.value)}
                            className="px-3 py-2 border border-[var(--color-gray-400)] focus:outline-none w-full placeholder:text-xs"
                            />
                            <p className="text-sm">kg</p>
                        </div>
                    </label>
                </div>

                {/* 평소 사이즈 선택 */}
                <div className="flex flex-col gap-2">
                    <p className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']">평소 사이즈</p>
                    <div className="flex gap-2 flex-wrap">
                    {
                        usualSize.map((opt, i) => (
                        <label
                            key={opt + i}
                            htmlFor={`usualSize-${opt}`}
                            className="cursor-pointer"
                        >
                            <input
                            id={`usualSize-${opt}`}
                            type="radio"
                            name="usualSize"
                            value={opt}
                            className="peer hidden"
                            required
                            onChange={(e) => setSelUsualSize(e.target.value)}
                            />
                            <div className="px-4 py-1.5 rounded-full bg-[var(--color-gray-300)] text-[var(--color-gray-600)] peer-checked:bg-[var(--color-black)] peer-checked:text-[var(--color-white)]">
                            {opt}
                            </div>
                        </label>
                        ))
                    }
                    </div>
                </div>
            </div>


        </>
    )
});

export default ReviewWriteModal