import { MoreArrowIcon } from "@/components/common/Icon"
import { useState } from "react"
import { Link } from "react-router-dom"

function Footer() {

    const [isOpen, SetIsOpen] = useState(false);

    return (
            <footer>
                <details onToggle={(e)=> SetIsOpen(e.currentTarget.open)}>
                    <summary className="flex items-center justify-between">
                        GANA SWIM 사업자 정보
                        <div className={ isOpen ? "rotate-180 transition-transform" : "transition-transform" } >
                            <MoreArrowIcon stroke="white" />
                        </div>
                    </summary>
                    <ul>
                        <li><span>대표</span>이름요</li>
                        <li><span>사업자등록번호</span>000-00-00000</li>
                        <li><span>주소</span>서을특별시 가나구 가나다라로 00길 00, 가나다빌딩 </li>
                        <li><span>전화번호</span>0000-0000</li>
                        <li><span>이메일</span>abcd@abcd.co.kr</li>
                        <li><span>통신판매업</span>0000-가나다라-00000</li>
                    </ul>
                </details>
                {/* 푸터 메뉴 */}
                <ul className="flex gap-3">
                    <li>
                        <Link>회사소개</Link>
                    </li>
                    <li>
                        <Link>고객센터</Link>
                    </li>
                    <li>
                        <Link>이용약관</Link>
                    </li>
                    <li>
                        <Link>개인정보처리방침</Link>
                    </li>
                </ul>

                <p>COPYRIGHTⓒ 2025 ABCDE. ALL RIGHTS RESERVED.</p>

            </footer>
    )
}

export default Footer