// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지가 바뀔 때마다 스크롤을 맨 위로
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
