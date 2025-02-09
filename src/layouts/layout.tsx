import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

function Layout () {

    return (
        <div className="flex flex-col lg:flex-row-reverse w-full ">
            <div className="w-full h-[calc(100vh-68px)] lg:w-[calc(100vw-100px)] lg:h-screen bg-background px-4">
                <Outlet/>
            </div>

            <SideBar/>
        </div>
    )
}

export default Layout;