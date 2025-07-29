import { create } from 'zustand'

const useOrderStore = create((set, get) => ({

    orderList : [],

    addOrderList : (order) => set((state) => {
        return { orderList:[...state.orderList, order] }
    }),

}))

export default useOrderStore