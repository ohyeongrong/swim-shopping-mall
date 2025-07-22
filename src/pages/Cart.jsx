import CartPrdList from "@/components/cart/CartPrdList";
import EmptyState from "@/components/common/EmptyState";
import useCartStore from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";
import { CheckBoxIcon, CloseIcon, MoreArrowIcon } from "@/components/common/Icon";


function Cart() {

    const { cartList } = useCartStore();
    const navigate = useNavigate();

    return (
        <>
            <section className="lg:max-w-[1440px] lg:m-auto"> 
                {
                    cartList.length > 0
                    ? <CartPrdList/>
                    : <EmptyState type={'cart'} link={() => navigate('/')}/>
                }
                
            </section>
        </>
    )
}

export default Cart