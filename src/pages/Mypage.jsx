import useMemberStore from "@/store/useMemberStore";
import Button from '@/components/common/Button';
import { Link } from "react-router-dom";

function Mypage() {

    const { loginUser, logout } = useMemberStore();

    return (
        <section>
            <div className="bg-[var(--color-black)] text-white flex flex-col px-4 py-8 gap-6">
                <div>
                    <p className="text-2xl font-bold">{ loginUser.name }님</p>
                    <Button variant="textBtn" content="로그아웃" onClick={() => logout()}/> 
                </div>
            </div>
            <div className="px-4 flex flex-col text-sm gap-4">
                <div className="py-4">
                    <div className="flex justify-between items-center border-b  border-[var(--color-gray-300)] pb-4">
                        <h4 className="text-lg font-bold">주문 배송 조회</h4>
                    </div>
                    <div className="flex gap-4 justify-between pt-4">
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl text-[var(--color-gray-500)]">0</p>
                            <p >입금대기</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl text-[var(--color-gray-500)]">0</p>
                            <p>결제완료</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl text-[var(--color-gray-500)]">0</p>
                            <p>배송 준비중</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl text-[var(--color-gray-500)]">0</p>
                            <p>배송중</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl text-[var(--color-gray-500)]">0</p>
                            <p>배송완료</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center border-b  border-[var(--color-gray-300)] pb-4">
                        <Link to={'/UserInfoPage'}>
                            <h4 className="text-lg font-bold">나의 정보 관리</h4>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center border-b  border-[var(--color-gray-300)] pb-4">
                        <Link>
                            <h4 className="text-lg font-bold">나의 관심</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mypage