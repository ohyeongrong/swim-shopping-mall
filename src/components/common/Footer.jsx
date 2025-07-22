import { MoreArrowIcon } from "@/components/common/Icon"
import { useState } from "react"
import { Link } from "react-router-dom"

function Footer() {

    const [isOpen, setIsOpen] = useState(false);
    const [idCheck, setIdCheck] = useState(null);

    const handleToggle = (e) => {
        setIdCheck(e.currentTarget.dataset.id)
        setIsOpen(e.currentTarget.open)
    }

    return (

        <footer className="bg-[var(--color-black)]  text-white text-xs/relaxed">

            {/* 모바일 전용 푸터 */}
            <div className="lg:hidden flex flex-col gap-5 pt-10 px-4 pb-28">
                {/* 영업시간 */}
                <div className="flex flex-col gap-0.5">
                    <a href="tel:1234-5678" className="text-[1.625rem]/relaxed">1234-5678</a>
                    <p><span className="font-bold">업무시간 </span>평일 09:30 ~ 17:30</p>
                    <p><span className="font-bold">점심시간 </span>12:00 ~ 13:00</p>
                    <p><span className="font-bold">휴무일 </span>주말 및 공휴일</p>
                </div>

                {/* 아코디언 UI */}
                <div>
                    <details
                        data-id="1"
                        className="border-t border-[var(--color-gray-800)] py-5"
                        onToggle={ handleToggle }
                    >
                        <summary className="flex items-center justify-between text-base/relaxed font-bold list-none">
                            GANA SWIM 사업자 정보
                            <div className={ idCheck === "1" && isOpen ? "rotate-180 transition-transform" : "transition-transform" } >
                                <MoreArrowIcon stroke="white" />
                            </div>
                        </summary>
                        <ul className="flex flex-col gap-1 mt-5">
                            <li className="flex gap-1.5">
                                <span className="font-bold">대표</span>
                                <p>이름요</p>
                            </li>
                            <li className="flex gap-1.5">
                                <span className="font-bold">사업자등록번호</span>
                                <p>000-00-00000</p>
                                </li>
                            <li className="flex gap-1.5">
                                <span className="font-bold">주소</span>
                                <p>서을특별시 가나구 가나다라로 00길 00, 가나다빌딩</p>
                            </li>
                            <li className="flex gap-1.5">
                                <span className="font-bold">전화번호</span>
                                <p>0000-0000</p>
                            </li>
                            <li className="flex gap-1.5">
                                <span className="font-bold">이메일</span>
                                <p>abcd@abcd.co.kr</p>
                            </li>
                            <li className="flex gap-1.5">
                                <span className="font-bold">통신판매업</span>
                                <p>0000-가나다라-00000</p>
                            </li>
                        </ul>
                    </details>
                    <details
                        data-id="2"
                        className="border-t border-b border-[var(--color-gray-800)] py-5"
                        onToggle={ handleToggle }
                    >
                        <summary className="flex items-center justify-between text-base/relaxed font-bold list-none">
                            CONTACT US
                            <div className={ idCheck === "2" && isOpen ? "rotate-180 transition-transform" : "transition-transform" } >
                                <MoreArrowIcon stroke="white" />
                            </div>
                        </summary>
                        <ul className="flex gap-3 mt-5">
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">자주묻는질문</a></li>
                            <li><a href="#">상품문의</a></li>
                            <li><a href="#">1:1문의</a></li>
                        </ul>
                    </details>
                </div>

                {/* 푸터 메뉴 */}
                <ul className="flex gap-3 font-bold">
                    <li>
                        <a href="#">회사소개</a>
                    </li>
                    <li>
                        <a href="#">이용안내</a>
                    </li>
                    <li>
                        <a href="#" className="underline">개인정보처리방침</a>
                    </li>
                    <li>
                        <a href="#">이용약관</a>
                    </li>
                </ul>

                <p className="font-bold">COPYRIGHTⓒ 2025 ABCDE. ALL RIGHTS RESERVED.</p>

                <div className="text-[var(--color-gray-600)]">
                    <p>일부 상품의 경우 주식회사 가나는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
                        <br/>가나스윔 내 모든 콘텐츠의 저작권은 가나스윔에 귀속되며 콘텐츠산업진흥법에 따라 보호됩니다.</p>
                </div>
            </div>

             {/* PC 푸터 */}
            <div className="hidden lg:block w-[1440px] mx-auto py-10">
                <div className="flex justify-between text-sm">
                
                {/* 회사 정보 */}
                <div className="flex-3/5">
                    <p className="font-bold">GANA SWIM</p>
                    <ul className="flex flex-col gap-1 mt-5">
                        <li className="flex gap-1.5">
                            <span className="font-bold">대표</span>
                            <p>이름요</p>
                        </li>
                        <li className="flex gap-1.5">
                            <span className="font-bold">사업자등록번호</span>
                            <p>000-00-00000</p>
                            </li>
                        <li className="flex gap-1.5">
                            <span className="font-bold">주소</span>
                            <p>서을특별시 가나구 가나다라로 00길 00, 가나다빌딩</p>
                        </li>
                        <li className="flex gap-1.5">
                            <span className="font-bold">전화번호</span>
                            <p>0000-0000</p>
                        </li>
                        <li className="flex gap-1.5">
                            <span className="font-bold">이메일</span>
                            <p>abcd@abcd.co.kr</p>
                        </li>
                        <li className="flex gap-1.5">
                            <span className="font-bold">통신판매업</span>
                            <p>0000-가나다라-00000</p>
                        </li>
                    </ul>
                </div>

                <div className="flex-2/5 flex gap-20">
                    {/* 고객센터 */}
                    <div>
                        <p className="font-bold">CUSTOM CENTER</p>
                        <a href="tel:1234-5678" className="text-[1.625rem]/relaxed">1234-5678</a>
                        <p><span className="font-bold">업무시간 </span>평일 09:30 ~ 17:30</p>
                        <p><span className="font-bold">점심시간 </span>12:00 ~ 13:00</p>
                        <p><span className="font-bold">휴무일 </span>주말 및 공휴일</p>
                    </div>

                    {/* 메뉴 */}
                    <div>
                        <p className="font-bold mb-2">COMPANY</p>
                        <ul className="space-y-1">
                        <li><a href="#">회사소개</a></li>
                        <li><a href="#">이용안내</a></li>
                        <li><a href="#" className="underline">개인정보처리방침</a></li>
                        <li><a href="#">이용약관</a></li>
                        </ul>
                    </div>

                    {/* 문의 */}
                    <div>
                        <p className="font-bold mb-2">CONTACT US</p>
                        <ul className="space-y-1">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">자주 묻는 질문</a></li>
                        <li><a href="#">상품문의</a></li>
                        <li><a href="#">1:1 문의</a></li>
                        <li><a href="#">강사/장애인 회원 신청</a></li>
                        <li><a href="#">매장사업자 회원 신청</a></li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-[var(--color-gray-800)] py-8 text-xs">
                    <p className="font-bold pb-4">COPYRIGHTⓒ 2025 ABCDE. ALL RIGHTS RESERVED.</p>
                    <div className="text-[var(--color-gray-600)]">
                        <p>일부 상품의 경우 주식회사 가나는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
                            <br/>가나스윔 내 모든 콘텐츠의 저작권은 가나스윔에 귀속되며 콘텐츠산업진흥법에 따라 보호됩니다.</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer