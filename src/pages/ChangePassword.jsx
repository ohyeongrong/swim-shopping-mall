import Button from '@/components/common/Button';
import InputField from "@/components/common/InputField";
import { useState } from 'react';
import useMemberStore from "@/store/useMemberStore";
import { useNavigate } from "react-router-dom";


function ChangePassword() {

    const { changePassword, loginUser, confirmCurrentPwd } = useMemberStore();

    const navigate = useNavigate();

    const [currentPwd, setCurrentPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [currentPwdErrMsg, setCurrentPwdErrMsg] = useState('');
    const [newPwdErrMsg, setNewPwdErrMsg] = useState('');
    const [confirmPwdErrMsg, setConfirmPwdErrMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const isChanged = changePassword(newPwd, currentPwd);

        if (isChanged) {
            alert('비밀번호가 성공적으로 변경됐습니다.');
            setCurrentPwd('');
            setNewPwd('');
            setConfirmPwd('');
            navigate(-1);
            console.log(loginUser);
        } else {
            alert('현재 비밀번호가 틀리거나, 이전 비밀번호와 같습니다.');
        }
    }

    const handleCurrentPwd = () => {
        
        const isCorrect = confirmCurrentPwd(currentPwd)

        if (!isCorrect){
            setCurrentPwdErrMsg('현재 비밀번호가 맞지 않습니다.');
        } else {
            setCurrentPwdErrMsg('');
        }
    }

    const handleNewPwd = () => {

        if(newPwd === currentPwd){
            setNewPwdErrMsg('현재 비밀번호와 변경하려는 비밀번호가 동일합니다.');
            return
        } else {
            setNewPwdErrMsg('')
        }
        
    }

    const handleConfirmPwd = () => {
        if(newPwd !== confirmPwd){
            setConfirmPwdErrMsg('새로운 비밀번호와 정보가 일치하지 않습니다.')
        } else {
            setConfirmPwdErrMsg('')
        }
    }

    return (
        <section className="px-4 py-5 text-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputField
                    id="current-password"
                    label="현재 비밀번호"
                    placeholder="현재 비밀번호를 입력해 주세요."
                    type="password"
                    value={currentPwd}
                    onChange={e => setCurrentPwd(e.target.value)}
                    onBlur={handleCurrentPwd}
                    errorMessage={currentPwdErrMsg}
                    required
                />

                <InputField
                    id="new-password"
                    label="새로운 비밀번호"
                    type="password"
                    placeholder="영문+숫자 조합 8~16자리"
                    required
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                    minLength="6"
                    maxLength="16"
                    value={newPwd}
                    onChange={e => setNewPwd(e.target.value)}
                    onBlur={handleNewPwd}
                    errorMessage={newPwdErrMsg}
                />

                <InputField
                    id="confirm-password"
                    label="비밀번호 확인"
                    type="password"
                    placeholder="영문+숫자 조합 8~16자리"
                    required
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                    minLength="6"
                    maxLength="16"
                    value={confirmPwd}
                    onChange={e => setConfirmPwd(e.target.value)}
                    onBlur={handleConfirmPwd}
                    errorMessage={confirmPwdErrMsg}
                />
                <Button type="submit" content="비밀번호 재설정 하기" className="w-full"/>
            </form>
        </section>
    )
}

export default ChangePassword