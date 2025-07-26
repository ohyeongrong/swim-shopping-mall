import ChangePassword from '@/pages/ChangePassword';
import { create } from 'zustand'

const useMemberStore = create((set, get) => ({

    memberList : [
        { email: 'qwer@naver.com', password:'qwer1234', name:'다다다' },
    ],

    loginUser: null,

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
            memberList: [...state.memberList, newMember],
            loginUser : newMember
        }));

        return true
    },

    withdraw: () => {
        const currentUser = get().loginUser;

        if (!currentUser) return false;

        set((state)=>({
            memberList : state.memberList.filter(user => user.email !== currentUser.email),
            loginUser: null
        }))
    },

    login : (info) => {
        const email = info.email
        const password = info.password

        const foundUser = get().memberList.find(user => user.email === email && user.password === password)

        if(!foundUser) return false

        set(() => ({loginUser : foundUser}));

        return true
    },

    logout : () => set(() => ({ loginUser: null })),

    changePassword: (newPwd, currentPwd) => {

        const currentUser = get().loginUser;

        if (!currentUser) return false;

        if (currentUser.password !== currentPwd) return false;
        if (currentUser.password === newPwd) return false;

        set((state)=>({
            memberList : state.memberList.map(user =>
                user.email === currentUser.email
                ? { ...user, password: newPwd}
                : user
            ),
            loginUser: { ...currentUser, password: newPwd }
        }))

        return true;
    },

    confirmCurrentPwd: (currentPwd) => {
        const loginUser = get().loginUser;
        return loginUser && loginUser.password === currentPwd;
    },
    
}))

export default useMemberStore