import { create } from 'zustand'

const useStore = create((set) => ({

  Prds : [],

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

}))

export default useStore;