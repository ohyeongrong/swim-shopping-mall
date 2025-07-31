import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { useState } from 'react';


function ThumbSwiperSlider({ imageList }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='flex gap-2 items-start'>
            {/* 메인 이미지 swiper */}
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                className='!min-w-[750px]'
            >
                { imageList.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className='relative aspect-[3/4]'>
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 썸네일 swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView="auto"
                watchSlidesProgress
                direction="vertical"
                className="!h-[800px]"
            >
                { imageList.map((src, i) => (
                    <SwiperSlide 
                        className="!h-[120px] !w-[80px] !flex-shrink-0"
                        key={i}>
                        <div className='relative aspect-[3/4]'>
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default ThumbSwiperSlider