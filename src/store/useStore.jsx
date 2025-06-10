import { create } from 'zustand'

const useStore = create((set) => ({

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

  })

}))

export default useStore;