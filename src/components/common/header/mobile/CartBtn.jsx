import { Link } from "react-router-dom";
import { CartIcon } from "@/components/common/Icon";
import useCartStore from "@/store/useCartStore";

export function CartBtn() {

    const { cartList } = useCartStore();

    return (
        <div className="relative">
            <Link to="/cart">
                <CartIcon />
                {cartList.length > 0 && (
                    <div className="bg-[var(--color-red)] text-white rounded-full text-xs w-5 h-5 flex justify-center items-center absolute -top-2 -right-2">
                        <p>{cartList.length}</p>
                    </div>
                )}
            </Link>
        </div>
    )

}