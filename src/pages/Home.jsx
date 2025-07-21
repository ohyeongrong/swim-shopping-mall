import useProdcutStore from "../store/useProdcutStore";
import GnbSwiper from "@/components/home/GnbSwiper";
import SwiperSlider from "@/components/common/SwiperSlider";
import { mainBannerList } from "@/data/mainBannerList";
import BrandFilterList from "@/components/home/BrandFilterList";
import BrandBanner from "@/components/home/BrandBanner";

function Home() {

    const { productsList } = useProdcutStore();


    return (
        <>
        {/* 글로벌 네비게이션 바 */}
        <GnbSwiper />

        {/* 메인 스와이퍼 영역 */}
        <SwiperSlider 
            imageList={mainBannerList} 
            autoplay={{ delay: 3000, disableOnInteraction: false}} 
            className="!px-[16px]" 
            paginationType={'fraction'} 
        />
        
        {/* 제품 스와이퍼 영역 */}
        
        {/* 예시로 아레나 상품 */}
        <section>
                <BrandFilterList/>
                <BrandBanner brand="루프루프" title="마음속에 오래 머무는 여름의 온도를 담은 컬렉션.zip📂" subTitle="솔티브리즈 SUMMER 10% OFF" img="https://swim.cdn-nhncommerce.com/Mall-No-k12B/20250712/131603.160572919/썸네일_SU%20Cherry%20Bomb%20Ivory_롯데면세점1.jpg"/>
                <BrandBanner brand="후그"title="프린트 위에 입체적인 감각을 더한 컬렉션.zip📂" subTitle="도드라지는 더욱 새로워진 EMBOSS" img="https://swim.cdn-nhncommerce.com/20250624/100226.765126009/2521WHT_14.jpg"/>
        </section>
        </>
    )
}

export default Home