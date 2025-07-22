import { Link, useNavigate, useLocation, useParams } from "react-router-dom"
import { BackArrowIcon, SearchIcon, CartIcon, Logo, HomeIcon, MyLikeIcon, MyPageIcon, LoginIcon } from "@/components/common/Icon"
import iconLinkItems from "@/data/iconLinkItems";
import useCartStore from "@/store/useCartStore"
import "@/components/common/Header.css"
import Gnb from "@/components/home/Gnb";

function Header() {

    const { cartList } = useCartStore();

    const location = useLocation();
    const path = location.pathname;

    const homePath = path === "/"
    const cartPath = path === "/cart"
    const mylikePath = path === "/mylike"
    const productPath = path.startsWith("/product")

    const labelFind = iconLinkItems.find(item => item.url === path);

    const navigate = useNavigate();

    return (
        <>
            <header className="w-full">
                <div className="px-4 lg:max-w-[1440px] lg:m-auto">
                    {/* 모바일 전용 헤더 */}
                    <div className="py-3 lg:hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3.5">
                                { !homePath && <button type="button" onClick={() => navigate(-1)}><BackArrowIcon/></button> }
                                <h1 className="header-title">
                                    { 
                                        homePath || productPath
                                        ? <Link to={"/"}>{ homePath ? <Logo/> : <HomeIcon /> }</Link>
                                        : labelFind?.label
                                    }
                                </h1>
                            </div>
                            <nav>
                                <ul className="flex gap-3.5">
                                    { 
                                        cartPath
                                        ? <li><Link to={"/"}><HomeIcon /></Link></li>
                                        : (<>
                                            <li>
                                                <Link to={"/search"} aria-label="검색">
                                                    <SearchIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <div className="relative">
                                                    <Link to={"/cart"} aria-label="장바구니">
                                                        <CartIcon />
                                                        { 
                                                            cartList.length > 0 
                                                            &&                                                     
                                                            <div className="count">
                                                                <span aria-label={`${ cartList.length }개의 상품이 담겨 있습니다.`}>{ cartList.length }</span>
                                                            </div>
                                                        }
                                                    </Link>
                                                </div>
                                            </li>
                                        </>)
                                    }
                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
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

                <Gnb showGnb={homePath ? true : false}/>
            </header>
        </>
    )
}

export default Header