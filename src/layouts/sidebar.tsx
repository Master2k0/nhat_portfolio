import { SidebarItems, siteConfig } from "@/configs";
import { cn } from "@/libs/utils";
import { ISidebarItem } from "@/types/config";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemsProps {
  item: ISidebarItem;
  onClick?: () => void;
}

function SidebarItemsRender({ item, onClick }: SidebarItemsProps) {
  const location = useLocation();
  const isActive = useMemo(() => {
    if (item.href === siteConfig.mainPage.home.href) {
      return location.pathname === siteConfig.mainPage.home.href;
    }
    return location.pathname.startsWith(item.href);
  }, [location, item.href]);
  return (
    <Link
      key={item.id}
      to={item.href}
      data-label={item.name}
      className={cn(
        "px-4 text-14r text-gravel-25 xl:px-6 xl:text-20r",
        isActive && "text-14m text-yellow xl:text-20m",
      )}
      onClick={onClick}
    >
      {item.name}
    </Link>
  );
}

function SideBar() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-block-bg">
      <div className="mx-auto flex h-[60px] items-center justify-between bg-block-bg px-4 xl:h-20 xl:max-w-[1040px] xl:justify-between xl:px-0">
        <p className={cn("text-14s text-gravel-25 xl:text-18s", "xl:px-6")}>@jamesdes</p>
        <div className="flex">
          {SidebarItems.map((item) => (
            <SidebarItemsRender key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
