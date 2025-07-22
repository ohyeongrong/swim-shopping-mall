import { CategoryIcon, SearchIcon, HomeIcon, MyLikeIcon, MyPageIcon } from '@/components/common/Icon';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function BottomNavBar() {

const NavBarItems = [
    { type: "category", to: "/", icon: CategoryIcon, label: "카테고리" },
    { type: "search", to: "/", icon: SearchIcon, label: "검색" },
    { type: "home", to: "/", icon: HomeIcon, label: "홈" },
    { type: "mylike", to: "/mylike", icon: MyLikeIcon, label: "좋아요" },
    { type: "mypage", to: "/", icon: MyPageIcon, label: "마이페이지" },
];

const [onIconChange, setOnIconChange] = useState('home');

const  navigate = useNavigate();

    return (
        <div className="lg:hidden z-98 fixed bottom-0 border-t border-[var(--color-gray-300)] bg-[var(--color-white)] w-full px-6 py-2">
            <nav>
                <ul className="flex justify-between items-center">
                    {
                        NavBarItems.map((item, i) => 
                        <li key={ item.label + i }>
                            <button type="button" to={ item.to } onClick={()=> {setOnIconChange(item.type); navigate(item.to)}}>
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