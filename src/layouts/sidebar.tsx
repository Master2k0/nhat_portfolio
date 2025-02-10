import Icon from "@/components/ui/icon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SidebarItems, siteConfig } from "@/configs";
import { cn } from "@/libs/utils";
import { ISidebarItem, StatusEnum } from "@/types/config";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";


interface SidebarItemsProps {
    item: ISidebarItem;
}



function SidebarItemsRender({ item }: SidebarItemsProps) {
    const location = useLocation();
    const [status, setStatus] = useState<StatusEnum>(StatusEnum.normal);

    const isActive = useMemo(() => {
        if (item.href === siteConfig.pageList.home.href) {
            return location.pathname === siteConfig.pageList.home.href;
        }
        return location.pathname.startsWith(item.href);
    }, [location, item.href]);

    const currentStatus = useMemo(() => isActive ? StatusEnum.active : status, [isActive, status]);

    return (
        <TooltipProvider >
            <Tooltip >
                <Link
                    key={item.id}
                    to={item.href}
                    className={cn(
                        "col-span-1 auto-rows-fr grid place-items-center",
                        isActive ? "bg-select" : "bg-transparent"
                    )}
                    onMouseEnter={() => setStatus(StatusEnum.hover)}
                    onMouseLeave={() => setStatus(StatusEnum.normal)}
                >

                    <TooltipTrigger>
                        <div className='relative lg:p-7'>
                            <Icon
                                icon={item.status[currentStatus].icon}
                                alt={item.status[currentStatus].alt}
                            />
                        </div>
                    </TooltipTrigger>
                </Link>
                <TooltipContent side='right' hidden={isActive} className={cn('bg-gradient-2', 'text-14 border-0')} sideOffset={-25}>
                    {item.name}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}


function SideBar() {
    return (
        <div className="fixed bottom-0 left-0 z-50 bg-block-bg w-full h-[68px] lg:left-0  lg:w-[100px] lg:h-screen">
            <div className="grid grid-cols-4 h-full lg:flex lg:flex-col lg:justify-start lg:items-center lg:pt-[80px]">
                {SidebarItems.map((item) => (
                    <SidebarItemsRender key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}


export default SideBar;