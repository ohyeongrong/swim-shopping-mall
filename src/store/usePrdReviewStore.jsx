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
    toggle : () => set((state)=>({ isVisible: !state.isVisible })),


}))

export default usePrdReviewStore;