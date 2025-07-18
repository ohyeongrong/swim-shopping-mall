import CartPrdList from "@/components/cart/CartPrdList";
import EmptyState from "@/components/common/EmptyState";
import useCartStore from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";

function Cart() {

    const { cartList } = useCartStore();
    const navigate = useNavigate();

    return (
        <>
            <section> 
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