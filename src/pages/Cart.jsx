import { Link } from "react-router-dom"
import CartPrdList from "@/components/cart/CartPrdList";
import useStore from "@/store/useStore";
import Header from "@/components/common/Header";

function Cart() {

    const { cartList } = useStore();

    return (
        <>
            {/* 마이페이지, 카트, 로그인 페이지 등 헤더 공통으로 사용하면 좋을 듯 */}
            <Header/>

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