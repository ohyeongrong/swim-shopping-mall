import { Link } from "react-router-dom";
import { HomeIcon } from "@/components/common/Icon";
import { BackBtn } from "@/components/common/header/mobile/BackBtn";

function CartHeader() {
    return (
        <header className="w-full">
            <div className="py-3 px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <BackBtn/>
                        <h1 className="text-lg/0 font-bold">장바구니</h1>
                    </div>
                    <nav>
                        <ul className="flex gap-3.5">
                            <li>
                                <Link to="/">
                                    <HomeIcon />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default CartHeader;