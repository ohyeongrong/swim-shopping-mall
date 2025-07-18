import { 
    CategoryIcon, SearchIcon, HomeIcon, MyLikeIcon, MyPageIcon, BackArrowIcon, CartIcon, CloseIcon
} from '@/components/common/Icon';

const iconLinkItems = [
    { id: "home", url: "/", icon: <HomeIcon />, label: "홈" },
    { id: "back", url: "/", icon: <BackArrowIcon />, label: "뒤로가기" },
    { id: "cart", url: "/cart", icon: <CartIcon />, label: "장바구니" },
    { id: "mylike", url: "/mylike", icon: <MyLikeIcon />, label: "나의 관심" },
    { id: "category", url: "/category", icon: <CategoryIcon />, label: "카테고리" },
    { id: "search", url: "/search", icon: <SearchIcon />, label: "검색" },
    { id: "mypage", url: "/mypage", icon: <MyPageIcon />, label: "마이페이지" },
]

export default iconLinkItems