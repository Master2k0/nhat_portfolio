import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/configs";
import { cn } from "@/libs/utils";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./footer";
import SideBar from "./sidebar";
function Layout() {

  const listWithoutPadding = [
    siteConfig.pageList.home.href,
    siteConfig.pageList.otherProjects.href,
  ]
  const isMatchWithoutPadding = listWithoutPadding.includes(window.location.pathname);

  const listWithoutMaxWidth = [
    siteConfig.pageList.home.href,
  ]

  const isMatchWithoutMaxWidth = listWithoutMaxWidth.includes(window.location.pathname);
  return (
    <div className="no-scrollbar w-full relative">
      <SideBar />
      <div className={cn(
        "no-scrollbar mt-[60px] mb-8 ", !isMatchWithoutPadding && "px-4  ",
        "  xl:mt-20 xl:mb-[100px]", !isMatchWithoutPadding && "xl:p-10 xl:mb-[60px]",

      )}>
        <div className={cn(
          "mx-auto w-full bg-background  ",
          !isMatchWithoutMaxWidth && "max-w-[1040px]"
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
