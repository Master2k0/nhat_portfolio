import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
function Layout() {
    return (
        <div className="no-scrollbar w-full">
            <div className="no-scrollbar mb-[68px] p-5 lg:h-screen lg:mb-0 lg:ml-[100px] lg:p-10 3xl:p-20  ">
                <div className="mx-auto bg-background w-full lg:max-w-[1100px] 3xl:max-w-[1660px] lg:h-[100%] lg:flex lg:flex-col lg:justify-center">
                    <Outlet />
                </div>
            </div>
            <SideBar />
        </div>
    );
}

export default Layout;
