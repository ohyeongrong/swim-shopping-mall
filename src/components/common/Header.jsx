import { Link, useNavigate, useLocation } from "react-router-dom"
import { BackArrowIcon, SearchIcon, CartIcon, Logo, HomeIcon } from "@/components/common/Icon"
import iconLinkItems from "@/data/iconLinkItems";
import useStore from "@/store/useStore"

function Header() {

    const { cartList } = useStore();

    const location = useLocation();
    const path = location.pathname;

    const homePath = path === "/"
    const cartPath = path === "/cart"
    const mylikePath = path === "/mylike"
    const productPath = path === "/product"

    const labelfind = iconLinkItems.find(item => item.url === path);

    const navigate = useNavigate();

    return (
            <header className="w-full">
                <div className="header-container">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3.5">
                            { !homePath && <button type="button" onClick={() => navigate(-1)}><BackArrowIcon/></button> }
                            <h1 className="header-title">
                                { 
                                    homePath || productPath
                                    ? <Link to={"/"}>{ homePath ? <Logo/> : <HomeIcon /> }</Link>
                                    : labelfind.label
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
            </header>
    )
}

export default Header