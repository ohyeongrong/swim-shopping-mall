import { Link, useLocation } from "react-router-dom";
import { SearchIcon, CartIcon } from "@/components/common/Icon";
import { BackBtn } from "@/components/common/header/mobile/BackBtn";
import iconLinkItems from "@/data/iconLinkItems";
import useCartStore from "@/store/useCartStore";
import { CartBtn } from "@/components/common/header/mobile/CartBtn";


function MobileHeader() {

    const location = useLocation();
    const path = location.pathname;

    const { cartList } = useCartStore();
    const labelFind = iconLinkItems.find((item) => item.url === path);
    const isProduct = path.startsWith("/product");
    const isJoin = path.endsWith('/join');
    const isLogin = path.endsWith('/login')

    return (
        <div className="w-full lg:hidden">
                <div className="py-3 px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <BackBtn/>
                            <h1 className="text-lg/0 font-bold">
                                {labelFind?.label || isProduct && ""}
                            </h1>
                        </div>
                        <nav>
                            <ul className="flex gap-3.5">
                                <li>
                                    <Link to="/search">
                                        <SearchIcon />
                                    </Link>
                                </li>
                                <li>
                                    <CartBtn/>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
    );
}

export default MobileHeader;
