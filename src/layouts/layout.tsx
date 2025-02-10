import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

function Layout() {

    return (
        <div className="w-full ">
            <div className="p-20">
                <div className=" mx-auto  lg:ml-[100px] max-w-[1660px]  lg:h-screen bg-background">
                    <Outlet />
                </div>
            </div>
            <SideBar />
        </div>
    )
}

export default Layout;