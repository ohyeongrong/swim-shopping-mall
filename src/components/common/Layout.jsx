import { Outlet } from "react-router-dom";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/Footer";
import GoTopBtn from "@/components/common/GoTopBtn";
import BottomNavBar from "@/components/common/BottomNavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSearchStore from "@/store/useSearchStore";

function Layout() {

    const location = useLocation();
    const { resetSearchList  } = useSearchStore();

    useEffect(() => {
        resetSearchList ();
    }, [location.pathname]); // 경로 바뀌면 reset

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <GoTopBtn />
            <Footer/>
            <BottomNavBar/>
        </>
    )
}

export default Layout