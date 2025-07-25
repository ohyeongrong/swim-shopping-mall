import { CategoryIcon, SearchIcon, HomeIcon, MyLikeIcon, MyPageIcon } from '@/components/common/Icon';
import iconLinkItems from '@/data/iconLinkItems';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function BottomNavBar() {

const [onIconChange, setOnIconChange] = useState('home');

const selectedTypes = ["category", "search", "home", "mylike", "mypage"];

const filterNavItems = selectedTypes.map(type => iconLinkItems.find(item => item.type === type));

const  navigate = useNavigate();

    return (
        <div className="lg:hidden z-98 fixed bottom-0 border-t border-[var(--color-gray-300)] bg-[var(--color-white)] w-full px-6 py-2">
            <nav>
                <ul className="flex justify-between items-center">
                    {
                        filterNavItems.map((item, i) => 
                        <li key={ item.label + i }>
                            <button type="button" onClick={()=> {setOnIconChange(item.type); navigate(item.url)}}>
                                <div className="flex flex-col items-center gap-0.5">
                                    <item.icon stroke={ onIconChange === item.type ? "var(--color-black)" : "var(--color-gray-400)"}/>
                                    <span className={`text-[8px] font-extrabold ${ onIconChange === item.type ? "text-[var(--color-black)]" : "text-[var(--color-gray-400)]"}`}>{ item.type.toUpperCase() }</span>
                                </div>
                            </button>
                        </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default BottomNavBar