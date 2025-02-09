import Icon from "@/components/icon";
import { SidebarItems, siteConfig } from "@/configs";
import { cn } from "@/libs/utils";
import { ISidebarItem, StatusEnum } from "@/types/config";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";


interface SidebarItemsProps {
    item: ISidebarItem;
}



function SidebarItemsRender({ item }: SidebarItemsProps) {
    const location = useLocation();

    const isActive = useMemo(() => {
        if (item.href === siteConfig.pageList.home.href) {
            return location.pathname === siteConfig.pageList.home.href;
        }
        return location.pathname.startsWith(item.href);
    }, [location, item.href]);

    const currentStatus = useMemo(() => isActive ? StatusEnum.active : StatusEnum.normal, [isActive,]);

    return (
        <Link
            key={item.id}
            to={item.href}
            className={cn(
                "col-span-1 auto-rows-fr grid place-items-center",
                isActive ? "bg-39" : "bg-transparent"
            )}
        >
            <div className={cn("relative size-11")}>
                <Icon
                    icon={item.status[currentStatus].icon}
                    alt={item.status[currentStatus].alt}
                />
            </div>
        </Link>
    );
}


function SideBar () {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-[68px] bg-24">
            <div className="grid grid-cols-4 h-full">
                {SidebarItems.map((item) => (
                    <SidebarItemsRender key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}


export default SideBar;