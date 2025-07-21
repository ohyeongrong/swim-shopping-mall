import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import ProductSwiper from '@/components/common/ProductSwiper';
import useProdcutStore from "@/store/useProdcutStore";

function BrandFilterList() {

    const { productsList, brandFilter } = useProdcutStore();

    const [shuffledList, setShuffledList] = useState([]);

    useEffect(()=>{
        const shuffled = [...productsList].sort(() => Math.random() - 0.5);
        setShuffledList(shuffled)
    },[productsList])
    
    const [brandMenu, setBrandMenu] = useState('전체');

    const brandPrd = brandFilter(productsList, brandMenu);

    
    return (
            <div className='flex flex-col gap-2 my-16'>
                <div className='px-4'>
                    <h2 className='text-2xl'>뉴 시즌 셀렉션</h2>
                </div>
                <div>
                    <div className="ml-4 text-xs text-[var(--color-gray-600)]">
                        <div className='ml-[-16px]'>
                            <Swiper slidesPerView="auto"
                                    freeMode={true}
                                    className='!pl-4'>
                                {
                                    ["전체", "아레나", "키치피치","루프루프", "후그", "배럴", "나이키", "애디블"].map((menu, i) => 
                                        <SwiperSlide key={i} className="!w-auto relative"> 
                                            <div className='pt-2.5 pb-3'>
                                                <button 
                                                    className={`inline-blockwhitespace-nowrap px-3 py-2 ${brandMenu === menu && "bg-[var(--color-black)] rounded-full text-white"} `}
                                                    onClick={() => setBrandMenu(menu)}>
                                                    {menu}
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div>
                        <ProductSwiper product={brandMenu === '전체' ? shuffledList : brandPrd}/>
                    </div>
                </div>
            </div>
    )
}

export default BrandFilterList