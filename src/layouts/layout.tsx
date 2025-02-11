import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

function Layout() {

    return (
        <div className="w-full no-scrollbar ">
            <div className=" lg:ml-[100px] lg:p-10  3xl:p-20 3xl:pb-0 no-scrollbar">
                <div className=" mx-auto lg:max-w-[1100px] 3xl:max-w-[1660px]   bg-background ">
                    <Outlet />
                </div>
            </div>
            <SideBar />
        </div>
    )
}

export default Layout;