import { 
    CategoryIcon, SearchIcon, HomeIcon, MyLikeIcon, MyPageIcon, BackArrowIcon, CartIcon, CloseIcon,
    LoginIcon
} from '@/components/common/Icon';

const routeMeta = {
    "/": {
        label: "홈",
        icon: HomeIcon,
        requiresAuth: false,
        layout: "main"
    },
    "/cart": {
        label: "장바구니",
        icon: CartIcon,
        requiresAuth: false,
        layout: "main"
    },
    "/mylike": {
        label: "나의 관심",
        icon: MyLikeIcon,
        requiresAuth: false,
        layout: "main"
    },
    "/search": {
        label: "검색",
        icon: SearchIcon,
        requiresAuth: false,
        layout: "main"
    },
    "/category": {
        label: "카테고리",
        icon: CategoryIcon,
        requiresAuth: false,
        layout: "main"
    },
    "/mypage": {
        label: "마이페이지",
        icon: MyPageIcon,
        requiresAuth: true,
        layout: "main"
    },
    "/login": {
        label: "로그인",
        icon: LoginIcon,
        requiresAuth: false,
        layout: "simple"
    },
    "/join": {
        label: "회원가입",
        icon: null,
        requiresAuth: false,
        layout: "simple"
    },
};

export default routeMeta
