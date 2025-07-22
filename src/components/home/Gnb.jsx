import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { SearchIcon, MenuIcon } from "@/components/common/Icon"
import { useState } from 'react';

function Gnb({ showGnb }) {

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

    // 상위 5개와 하위 5개로 나누기
    const firstHalf = gnbMenus.slice(0, 5);
    const secondHalf = gnbMenus.slice(5);

    return (
        <>
        { showGnb &&
            (
                    //모바일 전용 글로벌 네비게이션
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
            )
        }

            {/* PC 전용 글로벌 네비게이션 */}
            <div className="hidden lg:flex justify-between px-4 py-3 text-sm border-b border-gray-200 lg:max-w-[1440px] lg:m-auto">
                <div className='flex gap-8'>
                    <ul className="flex items-center gap-4 text-xl">
                        <li><MenuIcon/></li>
                        {firstHalf.map((menu, i) => (
                            <li key={i}>
                                <Link
                                    to={menu.link}
                                    className="hover:text-[var(--color-black)] transition-colors"
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-4 text-[var(--color-gray-500)]">
                        {secondHalf.map((menu, i) => (
                            <li key={i} className="relative">
                                <Link
                                    to={menu.link}
                                    className="hover:text-[var(--color-black)] transition-colors"
                                >
                                    {menu.name}
                                </Link>
                                {menu.name === '베스트' && (
                                    <div className="absolute -top-1 -right-2 w-1 h-1 bg-[var(--color-main)] rounded-full"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="올 여름 신상 아이템"
                        className="w-80 h-10 border-b focus:outline-none  placeholder:text-[var(--color-gray-500)]"
                    />
                    <div className='absolute top-2 right-2'>
                        <SearchIcon  width="20" height='20'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gnb
