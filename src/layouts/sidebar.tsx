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
                "text-gravel-25 text-18r xl:px-6 px-4  ",
                isActive && "navbar-text-gradient text-18s",

            )}
            onClick={onClick}
        >
            {item.name}
        </Link>
    );
}


function SideBar() {


    return (
        <div className="fixed top-0 left-0 z-50  w-full bg-block-bg  ">
            <div className="flex justify-between px-4 xl:px-0  h-[60px] xl:h-20 xl:max-w-[1040px] items-center mx-auto xl:justify-between bg-block-bg ">
                <p className={cn(
                    "text-14s text-gravel-25 xl:text-18s ",
                    "xl:px-6"
                )}>@jamesdes</p>
                <div className="flex">
                    {SidebarItems.map((item) => (
                        <SidebarItemsRender key={item.id} item={item} />
                    ))}
                </div>

            </div>

        </div>
    )
}


export default SideBar;