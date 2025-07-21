import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '@/components/common/ProductCard'

function ProductSwiper({ product }) {

    return (
<>
        <section className="ml-[16px]">
            <div className="ml-[-16px]">
                <Swiper
                    className="!pl-[16px]"
                    slidesPerView="auto"
                    spaceBetween={8}
                    freeMode={true} 
                >
                    {
                        product.map((prd) => {

                            return (
                                <SwiperSlide key={ prd.id } className="!w-[clamp(140px,25vw,180px)] !shrink-0">
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