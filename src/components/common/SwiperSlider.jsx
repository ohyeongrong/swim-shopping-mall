import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '@/components/common/SwiperSlider.css'


function SwiperSlider({ sildeView = "auto", imageList, paginationType, renderSlide, ...options }) {

    return (
        <section>
            <div className='relative'>
                <Swiper
                    slidesPerView={ sildeView }
                    modules={[Pagination, Autoplay]}
                    centeredSlides={true}
                    pagination={{ 
                        clickable: true, 
                        type: paginationType, 
                    }}
                    loop={true}
                    lazy={true}
                    preloadImages={false}
                    watchSlidesProgress={true}
                    observer={true}
                    observeParents={true}
                    {...options}
                    
                >
                    { imageList.map((item, i) => (
                        <SwiperSlide key={i}>
                            {renderSlide
                                ? renderSlide(item)
                                : typeof item === 'string'
                                ? (
                                    // 단순 이미지 배열
                                    <div className='aspect-[3/4]'>
                                        <img
                                            src={item}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    // 객체 배열 처리 (기본 배너 형식)
                                    <div className='aspect-[3/4]'>
                                        <img
                                            src={item.image}
                                            alt={item.title || ""}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="overlay"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end gap-3 pl-6 pb-8 text-white">
                                            {item.subtitle && (
                                                <p className="text-xs font-extrabold">{item.subtitle}</p>
                                            )}
                                            {item.title && (
                                                <h2 className="text-2xl font-bold whitespace-pre-line">
                                                    {item.title}
                                                </h2>
                                            )}
                                        </div>
                                    </div>
                                )}
                        </SwiperSlide>
                    ))}

                    {paginationType === 'progressbar' && (
                        <div className="swiper-pagination"></div>
                    )}

                </Swiper>
            </div>
        </section>
    );
}

export default SwiperSlider;
