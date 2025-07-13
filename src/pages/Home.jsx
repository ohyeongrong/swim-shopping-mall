import ProductSwiper from "@/components/common/ProductSwiper";
import useStore from "../store/useStore";
import "@/pages/Home.css";
import MainSwiper from "@/components/home/MainSwiper";
import GnbSwiper from "@/components/home/GnbSwiper";
import BottomActionBar from "@/components/common/BottomActionBar";
import Footer from "@/components/common/Footer";
import GoTopBtn from "@/components/common/GoTopBtn";
import Header from "@/components/common/Header";


function Home() {

    const { productsList } = useStore();
    

    return (
        <>
        {/* 헤더영역 */}
        <Header />

        {/* 글로벌 네비게이션 바 */}
        <GnbSwiper />

        <main>
            {/* 메인 스와이퍼 영역 */}
            <MainSwiper />
            {/* 제품 스와이퍼 영역 */}
            <ProductSwiper products={productsList} />
        </main>

        {/* gotop 버튼*/}
        <GoTopBtn />

        {/* 푸터영역 */}
        <Footer/>

        {/* 하단 액션바 메뉴 */}
        <BottomActionBar />

        </>
    )
}

export default Home