import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '@/components/common/ProductCard'

function ProductSwiper({ products }) {

    return (
        <section className="ml-[40px]">
            <div className="swiper-title">
                    <h2>
                        <span>고객님을 위한</span>
                        <span>카테고리별 상품</span>
                    </h2>
                    <span>
                        <Link>더보기</Link>
                    </span>
            </div>
            <div className="ml-[-40px]">
                <Swiper
                    className="!pl-[40px]"
                    slidesPerView="auto"
                    spaceBetween={8}
                    freeMode={true} 
                >
                    {
                        products.map((prd) => {

                            return (
                                <SwiperSlide key={ prd.id } className="!w-[clamp(140px,25vw,180px)] !shrink-0">
                                    <ProductCard prd={ prd }/>
                                </SwiperSlide>
                                )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default ProductSwiper