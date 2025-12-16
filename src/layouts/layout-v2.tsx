import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/configs";
import { cn } from "@/libs/utils";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./footer";
import SideBar from "./sidebar";
function LayoutV2() {
  const listWithoutPadding = [
    siteConfig.mainPage.home.href,
    // siteConfig.pageList.otherProjects.href,
  ];
  const isMatchWithoutPadding = listWithoutPadding.includes(window.location.pathname);

  const listWithoutMaxWidth = [siteConfig.mainPage.home.href];

  const isMatchWithoutMaxWidth = listWithoutMaxWidth.includes(window.location.pathname);
  return (
    <div className="no-scrollbar relative w-full">
      <SideBar />
      <div
        className={cn(
          "no-scrollbar mb-8 mt-[60px]",
          !isMatchWithoutPadding && "px-4",
          "xl:mb-[100px] xl:mt-20",
          !isMatchWithoutPadding && "xl:mb-[60px] xl:p-10",
        )}
      >
        <div
          className={cn("mx-auto w-full bg-background", !isMatchWithoutMaxWidth && "max-w-[864px]")}
        >
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
