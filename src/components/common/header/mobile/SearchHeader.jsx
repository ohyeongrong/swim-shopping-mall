import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BackArrowIcon, SearchIcon, CartIcon } from "@/components/common/Icon";
import { CartBtn } from "@/components/common/header/mobile/CartBtn";
import useProdcutStore from "@/store/useProdcutStore";
import useSearchStore from "@/store/useSearchStore";
import { useEffect, useState } from "react";

function SearchHeader() {
    
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const [inputValue, setInputValue] = useState(keyword);

    const { productsList } = useProdcutStore();
    const { searchList, keywordFilter, resetSearchList } = useSearchStore();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchParams({ keyword : inputValue })
        keywordFilter(productsList, inputValue)
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
            <header className="w-full border-b border-[var(--color-gray-300)]">
                <div className="py-3 lg:hidden px-4">
                    <div className="flex items-center gap-3.5">
                        <button type="button" onClick={() => navigate(-1)}>
                            <BackArrowIcon />
                        </button>
                        <form onSubmit={ handleSubmit } className="w-full">
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
                        <CartBtn/>
                    </div>
                </div>
            </header>
    );
}

export default SearchHeader;