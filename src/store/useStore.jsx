import { create } from 'zustand'

const useStore = create((set, get) => ({

  productsList : [],

  addProducts: (list) => set(() => ({productsList: list})),

  //mylike 페이지

  likeList : [],
  
  addLikeList : (list) => set((state) => {

    const exists = state.likeList.some(item => item.id === list.id);

    if(exists){
      return {
        likeList : state.likeList.filter(item => item.id !== list.id)
      }
    } else {
      return {
        likeList : [...state.likeList, list]
      }
    }

  }),
  
  sortLikeList : (selected) => set((state) => {

    const sortFn = {
      newheart : (a, b) => new Date(b.likedAt) - new Date(a.likedAt),
      discount : (a, b) => b.saleRate - a.saleRate,
      priceLow : (a, b) => a.dcPrice- b.dcPrice,
      priceHigh : (a, b) => b.dcPrice - a.dcPrice
    };

    return { likeList : [...state.likeList].sort(sortFn[selected]) }

  }),

  //product 페이지
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

  //cart 페이지

  cartList: [],

  addCartList: (list) => set((state) => {

    // 1. 같은 상품(id 기준) 이 있는지 확인
    const prdFound = state.cartList.find(item => item.id ===list.id);

    // 2. 있다면 → 옵션(예: 사이즈 등) 이 같은지 확인
    const hasSameOption = state.cartList.some(item => 
      item.id === list.id && item.selectedOption === list.selectedOption);

    // 2-1. 같으면 → 수량만 더함 (기존 항목 업데이트)
    if (prdFound && hasSameOption){
        return{
          cartList: state.cartList.map(item => {
            if (item.id === list.id && item.selectedOption === list.selectedOption) {
              return {
                ...item,
                quantity: item.quantity + list.quantity
              };
            }
  return item; // 조건 안 맞으면 원래 항목 그대로 반환
})
          }
    } else {
      // 2-2. 다르면 → 새 항목으로 추가
       // 3. 없다면 → 새로 추가 
        return {
          cartList: [...state.cartList, list]
        }
    }
  }),

  removeCartList : (list) => set((state) => {

  const prdFilter = state.cartList.filter(item => !(item.id === list.id && item.selectedOption === list.selectedOption))

  return {
    cartList : prdFilter
  }

  }),

  //카트 페이지 - 선택 제품

  removeChecked : () => set((state)=>{
    const checkedFilter = state.cartList.filter(item => !item.checked)

    return {
      cartList : checkedFilter
    }
  }),

  toggleItemChecked : (list) => set((state)=>{
    return{
      cartList : state.cartList.map(item => item.id === list.id && item.selectedOption === list.selectedOption ? {...item, checked : !item.checked } : item)
    }
  }),

  toggleAllChecked : () => set((state)=>{

    const allChecked = state.cartList.every(item => item.checked);

    return {
      cartList : state.cartList.map(item => {
        return{
          ...item, checked :!allChecked
        }
      })
    }
  }),

  //가격 계산

  dcPrice : (prd) => Math.round(prd.price * (1 - prd.saleRate / 100)),

  getTotalProductPrice : () => {
    const checkedItem = get().cartList.filter(item => item.checked);
    return checkedItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  //할인금액 계싼해야함
  getTotalDiscount : () => {
    const checkedItem = get().cartList.filter(item => item.checked);
    return checkedItem.reduce((sum, item) => sum + Math.round(item.price * (item.saleRate / 100)), 0) 
  },


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

export default useStore;