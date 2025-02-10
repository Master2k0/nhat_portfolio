import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

function Layout() {

    return (
        <div className="w-full ">
            <div className=" p-20 lg:ml-[100px]   lg:h-screen bg-background">
                <Outlet />
            </div>
            <SideBar />
        </div>
    )
}

export default Layout;