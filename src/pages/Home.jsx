import ProductSwiper from "@/components/common/ProductSwiper";
import useStore from "../store/useStore";
import "@/pages/Home.css";
import MainSwiper from "@/components/home/MainSwiper";
import GnbSwiper from "@/components/home/GnbSwiper";

function Home() {

    const { productsList } = useStore();
    

    return (
        <>
        {/* 글로벌 네비게이션 바 */}
        <GnbSwiper />

        {/* 메인 스와이퍼 영역 */}
        <MainSwiper />
        
        {/* 제품 스와이퍼 영역 */}
        <ProductSwiper products={productsList} />

        </>
    )
}

export default Home