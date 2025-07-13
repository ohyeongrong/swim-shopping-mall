import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function GnbSwiper() {

    const gnbMenus = [
        { name: '홈', link: '/' },
        { name: '베스트', link: '/' },
        { name: '신상', link: '/' },
        { name: '세일', link: '/' },
        { name: '브랜드', link: '/' },
        { name: '#SOTD', link: '/' },
        { name: '기획전', link: '/' },
    ];

    return (
        <div className="gnb-bar">
            <Swiper slidesPerView="auto"
                    freeMode={true}>
                {
                    gnbMenus.map((menu, i) => 
                        <SwiperSlide key={i} className="!w-auto"> 
                            <button className="px-3 py-2 whitespace-nowrap">
                                {menu.name}
                            </button>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}

export default GnbSwiper;
