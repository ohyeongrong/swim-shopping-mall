import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GoTopBtn from "@/components/common/GoTopBtn";
import BottomNavBar from "@/components/common/BottomNavBar";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <GoTopBtn />
            <Footer/>
            <BottomNavBar/>
        </>
    )
}

export default Layout