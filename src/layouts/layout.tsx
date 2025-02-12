import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import { Toaster } from "@/components/ui/toaster";
function Layout() {
  return (
    <div className="no-scrollbar w-full">
      <div className="no-scrollbar mb-[68px] min-h-screen px-4 pb-10 pt-5 lg:mb-0 lg:ml-[100px] lg:p-10 xl:grid xl:place-items-center 3xl:p-20">
        <div className="mx-auto w-full bg-background lg:flex lg:h-[100%] xl:max-w-[1100px] 3xl:max-w-[1660px]">
          <Outlet />
        </div>
      </div>
      <SideBar />
      <Toaster />
    </div>
  );
}

export default Layout;
