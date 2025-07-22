import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ProductCard from '@/components/common/ProductCard'

function ProductSwiper({ product }) {

    return (
<>
        <section className="ml-[16px]">
            <div className="ml-[-16px] lg:ml-0">
                <Swiper
                    modules={[Navigation]}
                    className="!pl-[16px] lg:!pl-0"
                    slidesPerView="auto"
                    freeMode={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 3.1,
                            spaceBetween: 4
                        },
                        768: {
                            slidesPerView: 4.1,
                            spaceBetween: 6
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 8,
                        },
                    }} 
                >
                    {
                        product.map((prd) => {

                            return (
                                <SwiperSlide key={ prd.id } >
                                    <ProductCard product={prd} direction='vertical'/>
                                </SwiperSlide>
                                )
                        })
                    }
                </Swiper>
            </div>
        </section>
</>
    )
}

export default ProductSwiper