import { useState } from "react";
import Button from '@/components/common/Button';
import useMemberStore from "@/store/useMemberStore";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {

    const { login, loginUser } = useMemberStore();

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const userInfo = { email, password }
        const isLogin = login(userInfo)

        if(!isLogin){
            setErrMsg('이메일 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
            return;
        }

        console.log(loginUser);

        setEmail('');
        setPassword('');
        navigate(location.state?.from || "/", { replace: true });

    }


    return (

        <section className="px-4 py-5 text-sm flex flex-col gap-8">

            <h2 className="text-3xl/10">
                <strong>가나스윔</strong>에<br/>오신것을 환영해요!
            </h2>

            <form onSubmit={ handleSubmit }className="flex flex-col gap-4">

                <div className="flex flex-col gap-2">
                    <label className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']" htmlFor="email">아이디</label>
                    <input 
                        className="px-4 py-3 border border-[var(--color-gray-400)]  bg-[var(--color-white)] focus:outline-none" 
                        type="email" 
                        id="email" 
                        placeholder="아이디(이메일)"
                        required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold after:ml-0.5 after:text-[var(--color-red)] after:content-['*']" htmlFor="password">비밀번호</label>
                    <input 
                        className="px-4 py-3 border border-[var(--color-gray-400)]  bg-[var(--color-white)] focus:outline-none" 
                        type="password" 
                        id="password" 
                        placeholder="비밀번호(영문+숫자 조합 8~16자리)"
                        minLength="6" 
                        maxLength="16"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                </div>

                {errMsg && <p className="text-xs text-[var(--color-red)]">{errMsg}</p>}

                <div className="flex flex-col gap-2 pt-5">
                    <Button type="submit" content="로그인" className="w-full"/>
                    <Button type="button" content="회원가입" onClick={() => navigate('/join')} className="w-full" variant='secondary'/>
                    <div className="flex justify-center gap-2 text-[var(--color-gray-500)]">
                        <Button type="button" content="아이디 찾기" variant='textBtn'/>
                        <Button type="button" content="비밀번호 찾기" variant='textBtn'/>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default Login


