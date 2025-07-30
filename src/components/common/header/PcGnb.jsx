import { SearchIcon, MenuIcon } from "@/components/common/Icon"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useProdcutStore from "@/store/useProdcutStore";
import useSearchStore from "@/store/useSearchStore";
import { useEffect, useState } from "react";

function PcGnb() {

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

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const [inputValue, setInputValue] = useState(keyword);

    const { productsList } = useProdcutStore();
    const { keywordFilter, resetSearchList } = useSearchStore();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputValue.trim()) return;
        navigate(`/search?keyword=${inputValue}`)
    }

    useEffect(()=>{
        if(keyword) {
            keywordFilter(productsList, keyword)
            setInputValue(keyword)
        } else {
            resetSearchList();
            setInputValue("")
        }
    }, [productsList, keyword])

    return (
        <>
            {/* PC 전용 글로벌 네비게이션 */}
            <div className="hidden lg:flex justify-between py-3 text-sm  lg:max-w-[1440px] lg:m-auto">
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
                <div className="relative border-b w-70">
                    <form  onSubmit={ handleSubmit }>
                        <label htmlFor="search" className="flex items-center">
                            <input 
                                value={ inputValue }
                                type="search" 
                                id="search" 
                                className="w-full focus:outline-none  placeholder:text-sm"
                                placeholder="검색어를 입력해주세요."
                                onChange={e => { setInputValue(e.target.value) }}
                            />
                            <button type="submit">
                                <SearchIcon />
                            </button>
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PcGnb
