import { 
    CategoryIcon, SearchIcon, HomeIcon, MyLikeIcon, MyPageIcon, BackArrowIcon, CartIcon, CloseIcon,
    LoginIcon
} from '@/components/common/Icon';

const iconLinkItems = [
    { type: "home", url: "/", icon: HomeIcon, label: "홈" },
    { type: "back", url: -1, icon: BackArrowIcon, label: "뒤로가기" },
    { type: "cart", url: "/cart", icon: CartIcon, label: "장바구니" },
    { type: "mylike", url: "/mylike", icon: MyLikeIcon, label: "나의 관심" },
    { type: "category", url: "/category", icon: CategoryIcon, label: "카테고리" },
    { type: "search", url: "/search", icon: SearchIcon, label: "검색" },
    { type: "mypage", url: "/mypage", icon: MyPageIcon, label: "마이페이지" },
    { type: "login", url: "/login", icon: LoginIcon , label: "로그인" },
    { type: "join", url: "/join", icon: null, label: "회원가입" },
]

export default iconLinkItems