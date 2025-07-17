import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '@/components/common/SwiperSlider.css'

function SwiperSlider({ imageList, paginationType, ratio = '3/4', ...options }) {
    return (
        <section>
            <Swiper
                modules={[Pagination]}
                pagination={{ 
                    clickable: true, 
                    type: paginationType, 
                }}
                loop={true}
                {...options}
            >
                {
                    imageList.map((img, i)=>
                        <SwiperSlide key={i} >
                            <div style={{ aspectRatio: ratio }}>
                                <img 
                                    src={img} 
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    )
                }
                {paginationType === 'progressbar' && ( <div className="swiper-pagination-progressbar"></div>)}
            </Swiper>
        </section>
    );
}

export default SwiperSlider;
