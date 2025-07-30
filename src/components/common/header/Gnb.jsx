import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function Gnb() {

    const gnbMenus = [
        { name: '홈', link: '/' },
        { name: '여성', link: '/' },
        { name: '남성', link: '/' },
        { name: '아동', link: '/' },
        { name: '용품', link: '/' },
        { name: '베스트', link: '/' },
        { name: '신상', link: '/' },
        { name: '세일', link: '/' },
        { name: '브랜드', link: '/' },
        { name: '#SOTD', link: '/' },
    ];

    return (
        <>
            <div className="text-sm lg:hidden">
                <div>
                    <Swiper slidesPerView="auto"
                            freeMode={true}
                            className='!pl-6'>
                        {
                            gnbMenus.map((menu, i) => 
                                <SwiperSlide key={i} className="!w-auto relative"> 
                                    <Link className={`inline-block pr-6 pt-2.5 pb-3 whitespace-nowrap ${menu.name !== '홈' && "text-[var(--color-gray-500)]"}`}>
                                        {menu.name}
                                    </Link>
                                    {menu.name === '베스트' && <div className='absolute top-2.5 right-4.5 w-1 h-1 bg-[var(--color-main)] rounded-full'></div>
                        }
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Gnb
