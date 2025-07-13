import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GoTopBtn from "@/components/common/GoTopBtn";
import BottomActionBar from "@/components/common/BottomActionBar";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <GoTopBtn />
            <Footer/>
            <BottomActionBar />
        </>
    )
}

export default Layout