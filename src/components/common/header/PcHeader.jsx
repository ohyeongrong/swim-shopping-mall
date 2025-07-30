import useCartStore from "@/store/useCartStore";
import { Link } from "react-router-dom";
import { Logo, CartIcon, MyLikeIcon, MyPageIcon, LoginIcon } from "@/components/common/Icon";
import PcGnb from "./PcGnb";

function PcHeader() {

    const { cartList } = useCartStore();

    return (
        <header className="w-full hidden lg:block">
            <div className="px-4 lg:max-w-[1440px] lg:m-auto lg:px-0 ">
                {/* PC 전용 헤더 */}
                <div className="hidden lg:flex justify-between items-center py-4">
                    {/* 왼쪽: 로고 + 검색창 */}
                    <div className="flex items-center gap-8">
                        <Link to="/" aria-label="홈">
                            <Logo width="130" height="30"/>
                        </Link>
                    </div>

                    {/* 오른쪽: 링크들 */}
                    <ul className="flex items-center gap-3 text-sm font-medium">
                        <li>
                            <Link to="/mylike"><MyLikeIcon/></Link>
                        </li>
                        <li className="relative">
                            <Link to="/cart">
                            <CartIcon/>
                            {cartList.length > 0 && (
                                <span className="absolute -top-1.5 left-3.5 bg-[var(--color-main)] text-white text-xs rounded-full w-4.5 h-4.5 flex justify-center items-center">
                                {cartList.length}
                                </span>
                            )}
                            </Link>
                        </li>
                        <li>
                            <Link to="/mypage"><MyPageIcon/></Link>
                        </li>
                        <li>
                            <Link to="/login"><LoginIcon/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <PcGnb />
        </header>
    )
}

export default PcHeader