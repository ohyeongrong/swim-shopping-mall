import { useLocation } from "react-router-dom";
import SearchHeader from "@/components/common/header/mobile/SearchHeader";
import CartHeader from "@/components/common/header/mobile/CartHeader";
import HomeHeader from "@/components/common/header/mobile/HomeHeader";
import MobileHeader from "@/components/common/header/mobile/MobileHeader";

function Header() {
    const location = useLocation();
    const path = location.pathname;

    if (path.startsWith("/search")) return <SearchHeader />;
    if (path === "/cart") return <CartHeader />;
    if (path === "/") return <HomeHeader />;

    return <MobileHeader />;
}

export default Header;
