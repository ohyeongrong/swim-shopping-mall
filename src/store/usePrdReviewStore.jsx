import { create } from 'zustand'

const usePrdReviewStore = create((set, get) => ({

    //ProductReview - 전역에 쓰는 리뷰 리스트
    reviewList: [],

    addReviewList : (write) => set((state) => {
        return {
            reviewList: [...state.reviewList, write]
        }
    }),

    //ReviewWriteModal - 리뷰 글쓰기 모달창
    isVisible: false,
    show : () => set({ isVisible: true }),
    hide : () => set({ isVisible : false}),

    //ReviewWriteModal - 리뷰 글쓰기 사진 파일 첨부
    imageList: [],
    addImageList : (list) => set((state) => {
        return { imageList: [...state.imageList, list] }
    }),

    //ReviewList - 리뷰 리스트 글 더보기/접기
    isExpanded: false,
    expandedReviewId: null,
    toggleReview: (id) => set((state) => {
        return { 
            expandedReviewId : state.expandedReviewId === id ? null : id,
            isExpanded: state.expandedReviewId === id ? true : false
        }
    }),

}))

export default usePrdReviewStore;