import CartPrdList from "@/components/cart/CartPrdList";
import useCartStore from "@/store/useCartStore";

function Cart() {

    const { cartList } = useCartStore();

    return (
        <>
            <section> 
                {
                    cartList.length > 0
                    ? <CartPrdList/>
                    : <p>장바구니 비었음</p>
                }
                
            </section>
        </>
    )
}

export default Cart