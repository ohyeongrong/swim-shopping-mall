import Button from '@/components/common/Button';
import InputField from "@/components/common/InputField";
import { useNavigate } from 'react-router-dom';
import useMemberStore from "@/store/useMemberStore";


function UserInfoPage() {

    const { loginUser, withdraw } = useMemberStore();

    const navigate = useNavigate()

    const handleWithdraw = () => {
        if(window.confirm('정말 탈퇴하시겠습니까?'))
        withdraw();
        alert('회원 탈퇴가 완료되었습니다.');
        navigate('/');
    }

    return (
        <section className="px-4 py-5 text-sm">
                <InputField
                    id="name"
                    label="이름"
                    type="text"
                    value={loginUser.name}
                    disabled
                />

                <InputField
                    id="email"
                    label="이메일 아이디"
                    type="email"
                    placeholder="example@email.com"
                    value={loginUser.email}
                    disabled
                />
                <InputField
                    id="password"
                    label="비밀번호"
                    type="password"
                    value={loginUser.password}
                    disabled
                />
                <Button onClick={()=>{navigate('/ChangePassword')}} variant="textBtn" content="비밀번호 재설정하기" className='flex justify-end text-[var(--color-gray-500)]'/> 
                <Button onClick={ handleWithdraw } variant="textBtn" content="회원 탈퇴" className='flex justify-end text-[var(--color-gray-500)]'/> 
        </section>
    )
}

export default UserInfoPage