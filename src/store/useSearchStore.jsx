import { create } from 'zustand'

const useSearchStore = create((set, get) => ({

    searchList : [],

    keywordFilter : (list, keyword) => set(() => {
        const filtered = list.filter(item => (
            item.name.includes(keyword) || item.brand.includes(keyword)
        ))
        return {searchList: filtered}
    }),
    
    resetSearchList : () => set({ searchList: [] }),
}))

export default useSearchStore