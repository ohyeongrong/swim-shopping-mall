import { create } from 'zustand'

const usePrdInquiryStore = create((set, get) => ({

    //ProductInquiry - 전역에 쓰는 문의글 리스트
    inquiryList: [],

    //InquiryList - 문의글 아코디언
    openedInquiryId: null,
    toggleInquiry : (id, Secret) => set((state) => { 
        if(Secret === "public"){
            return { openedInquiryId : state.openedInquiryId === id ? null : id }
        } else {
            alert('비밀글 입니다.')
            return { openedInquiryId: null }
        }
    }),

    //InquiryWriteModal - 문의 글쓰기 모달창
    isVisible: false,
    show : () => set({ isVisible: true }),
    hide : () => set({ isVisible : false}),
    toggle : () => set((state)=>({ isVisible: !state.isVisible })),

    ////InquiryWriteModal - 문의글 리스트에 저장하기
    addInquiryList : (write) => set((state) => {
        return {
            inquiryList: [...state.inquiryList, write]
        }
    }),

}))

export default usePrdInquiryStore;