import { Link } from "react-router-dom";
import { Logo, SearchIcon, CartIcon } from "@/components/common/Icon";
import useCartStore from "@/store/useCartStore";
import { CartBtn } from "@/components/common/header/mobile/CartBtn";

function HomeHeader() {
    
    const { cartList } = useCartStore();

    return (
        <div className="w-full lg:hidden">
                <div className="py-3 px-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <nav>
                            <ul className="flex gap-3.5">
                                <li>
                                    <Link to="/search">
                                    <SearchIcon />
                                    </Link>
                                </li>
                                <li>
                                    <CartBtn />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
    );
}

export default HomeHeader;