import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function MainSwiper() {
    return (
        <section>
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ type: 'fraction' }}
            >
                <SwiperSlide>
                    <img src="https://swim.cdn-nhncommerce.com/20250624/135028.75388705/2538WST_08.jpg" alt="배너1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://image2.barreltravel.co.kr/socal/2025/swim/e_03_B5SWSWS046BLK.jpg" alt="배너2"/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default MainSwiper;
