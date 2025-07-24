import { create } from 'zustand'

const useProdcutStore = create((set, get) => ({

  productsList : [],

  addProducts: (list) => set(() => ({productsList: list})),


  selectedPrd : [],

  thumImg : [], 

  foundPrd : (prdId) => set((state) => {
      
      const found = state.productsList.find(item => item.id === Number(prdId));
      
      if (!found) return {};

      return { 
          selectedPrd : found,
          thumImg : [found.image, ...found.thumbnails] 
      }
  }),

  brandFilter: (prd, brand) => {
    return prd.filter(p => p.brand === brand);
  },

  dcPrice : (prd) => Math.round(prd.price * (1 - prd.saleRate / 100)),

  //토글
  isVisible: false,
  show : () => set({ isVisible: true }),
  hide : () => set({ isVisible : false}),
  toggle : () => set((state)=>({ isVisible: !state.isVisible })),

  //제품 수량
  quantity : 1,
  increase : () => set((state)=>({ quantity : state.quantity + 1 })),
  decrease : () => set((state)=>({ quantity : state.quantity - 1 })),
  setQuantity : (num) => set(() => ({ quantity: num })),


}))

export default useProdcutStore