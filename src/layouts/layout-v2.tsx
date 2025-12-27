import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/libs/utils";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./footer";
import SideBar from "./sidebar";
function LayoutV2() {
  return (
    <div className="no-scrollbar relative w-full">
      <SideBar />
      <div className={cn("no-scrollbar mb-8 mt-[60px]", "xl:mb-[100px]")}>
        <div className={cn("mx-auto w-full bg-background px-4 py-10 xl:px-0", "xl:max-w-[864px]")}>
          <Outlet />
        </div>
      </div>
      <Toaster />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default LayoutV2;
