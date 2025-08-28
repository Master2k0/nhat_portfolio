import { Outlet, ScrollRestoration } from "react-router-dom";
import SideBar from "./sidebar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/libs/utils";
import { siteConfig } from "@/configs";
import Footer from "./footer";
function Layout() {

  const listWithoutPadding = [
    siteConfig.pageList.home.href,
    siteConfig.pageList.otherProjects.href,
  ]
  const isMatchWithoutPadding = listWithoutPadding.includes(window.location.pathname);
  console.log("isMatchWithoutPadding", isMatchWithoutPadding);
  return (
    <div className="no-scrollbar w-full">
      <SideBar />
      <div className={cn(
        "no-scrollbar min-h-screen mt-[60px] mb-8 ", !isMatchWithoutPadding && "px-4  ",
        "  lg:mt-20 lg:mb-[100px]", !isMatchWithoutPadding && "lg:p-10",

      )}>
        <div className={cn(
          "mx-auto w-full bg-background ",
          !isMatchWithoutPadding && "xl:max-w-[1100px] 3xl:max-w-[1660px]"
        )}>
          <Outlet />
        </div>
      </div>
      <Toaster />
      <Footer />
      <ScrollRestoration />

    </div>
  );
}

export default Layout;
