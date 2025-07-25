import { create } from 'zustand'

const useMemberStore = create((set, get) => ({

    memberList : [],

    getMemberByEmail: (email) => {
        return get().memberList.find(user => user.email === email);
    },

    joinMember : (newMember) => {
        const email = newMember.email;
        const isDuplicate = get().memberList.some(user => user.email === email);

        if(isDuplicate){
            alert('이미 가입된 이메일입니다.');
            return false
        }
        set((state)=>({
            memberList: [...state.memberList, newMember]
        }));

        return true
    },

    loginMember: [],

    login : (info) => {
        const email = info.email
        const password = info.password

        const MemberConfirm = get().memberList.find(user => user.email === email && user.password === password)

        if(!MemberConfirm) return false

        set(() => ({loginMember : MemberConfirm}));

        return true
    },

    logout : () => set(() => ({loginMember:[]})),
    
}))

export default useMemberStore