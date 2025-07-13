import { Link } from "react-router-dom"
import { CategoryIcon, SearchIcon, HomeIcon, MyLikeIcon, MyPageIcon } from '@/components/common/Icon';

function BottomActionBar() {

    const actionBarItems = [
        { to: "/category", icon: <CategoryIcon />, label: "카테고리" },
        { to: "/search", icon: <SearchIcon />, label: "검색" },
        { to: "/", icon: <HomeIcon />, label: "홈" },
        { to: "/mylike", icon: <MyLikeIcon />, label: "좋아요" },
        { to: "/mypage", icon: <MyPageIcon />, label: "마이페이지" },
    ];


    return (
        <div className="actionbar-area">
            <nav>
                <ul className="flex justify-between">
                    {
                        actionBarItems.map((item, i) => 
                        <li key={ item.label + i }>
                            <Link to={ item.to }>
                                { item.icon }
                            </Link>
                        </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default BottomActionBar