import CartPrdList from "@/components/cart/CartPrdList";
import EmptyState from "@/components/common/EmptyState";
import useCartStore from "@/store/useCartStore";

function Cart() {

    const { cartList } = useCartStore();

    return (
        <>
            <section> 
                {
                    cartList.length > 0
                    ? <CartPrdList/>
                    : <EmptyState type={'cart'}/>
                }
                
            </section>
        </>
    )
}

export default Cart