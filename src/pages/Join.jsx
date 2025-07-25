import { useState } from "react";
import Button from '@/components/common/Button';
import useMemberStore from "@/store/useMemberStore";
import { useNavigate } from "react-router-dom";

function Join() {

    const { joinMember, getMemberByEmail, memberList } = useMemberStore();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [pwErrMsg, setPwErrMsg] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert('비밀번호 정보가 일치하지 않습니다.');
            return;
        } 

        const newMember = { email, password, name };
        const isJoined = joinMember(newMember)

        if(!isJoined) return;

        console.log(memberList);

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        navigate('/')
    }

    const handleConfirmPw = () => {
        if(password !== confirmPassword){
            setPwErrMsg('비밀번호 정보가 일치하지 않습니다.')
        } else {
            setPwErrMsg('')
        }
    }

    const handleConfirmEmail = () => {
        const memberEmail = getMemberByEmail(email)
        if(memberEmail){
            setEmailErrMsg('이미 가입된 이메일입니다.')
        } else {
            setEmailErrMsg('')
        }
    }

    return (
        <section className="px-4 py-5 text-sm">
            <form onSubmit={ handleSubmit }className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']" htmlFor="email">이메일 아이디</label>
                    <input 
                        className="px-4 py-3 border border-[var(--color-gray-400)]  bg-[var(--color-white)] focus:outline-none" 
                        type="email" 
                        id="email" 
                        placeholder="example@email.com"
                        required
                        onChange={e => setEmail(e.target.value)}
                        onBlur={handleConfirmEmail}
                        value={email}
                        />
                    {emailErrMsg && <p className="text-xs text-[var(--color-red)]">{emailErrMsg }</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']" htmlFor="password">비밀번호</label>
                    <input 
                        className="px-4 py-3 border border-[var(--color-gray-400)]  bg-[var(--color-white)] focus:outline-none" 
                        type="password" 
                        id="password" 
                        placeholder="영문+숫자 조합 8~16자리"
                        minLength="6" 
                        maxLength="16"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                    {pwErrMsg && <p className="text-xs text-[var(--color-red)]">{pwErrMsg}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']" htmlFor="confirmPassword">비밀번호 확인</label>
                    <input 
                        className="px-4 py-3 border border-[var(--color-gray-400)]  bg-[var(--color-white)] focus:outline-none" 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="비밀번호를 다시 입력해 주세요."
                        minLength="6" 
                        maxLength="16"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        onBlur={handleConfirmPw}
                        />
                    
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']" htmlFor="name">이름</label>
                    <input 
                        className="px-4 py-3 border border-[var(--color-gray-400)]  bg-[var(--color-white)] focus:outline-none" 
                        type="text" 
                        id="name" 
                        placeholder="이름을 입력해 주세요."
                        minLength="2" 
                        maxLength="30"
                        pattern="^[가-힣a-zA-Z\s]+$" 
                        required
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />
                </div>
                <div className="flex flex-col gap-2 pt-5">
                    <Button type="submit" content="회원가입 하기" className="w-full"/>
                    <Button type="button" content="취소 하기" onClick={() => navigate(-1)} className="w-full" variant='secondary'/>
                </div>
            </form>
        </section>
    )
}

export default Join