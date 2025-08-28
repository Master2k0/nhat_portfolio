import { Button } from "@/components/ui/button";
import { SidebarItems, siteConfig } from "@/configs";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";
import { ISidebarItem } from "@/types/config";
import { Menu } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";


interface SidebarItemsProps {
    item: ISidebarItem;
    onClick?: () => void;
}



function SidebarItemsRender({ item, onClick }: SidebarItemsProps) {
    const location = useLocation();

    const isActive = useMemo(() => {
        if (item.href === siteConfig.pageList.home.href) {
            return location.pathname === siteConfig.pageList.home.href;
        }
        return location.pathname.startsWith(item.href);
    }, [location, item.href]);
    return (
        <Link
            key={item.id}
            to={item.href}
            data-label={item.name}
            className={cn(
                "text-gravel-25 text-18r px-6  ",
                isActive && "navbar-text-gradient text-18s",

            )}
            onClick={onClick}
        >
            {item.name}
        </Link>
    );
}


function SideBar() {
    const isLarge = useResponsiveProps({ lg: true });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="fixed top-0 left-0 z-50  w-full h-[68px] ">
            <div className="flex justify-between px-4 lg:px-[200px] h-[60px] lg:h-20 items-center relative z-10 bg-block-bg">
                <p className="text-14s text-gravel-25 lg:text-18s ">@jamesnguyendesign</p>
                {isLarge ? (
                    <div className="flex">
                        {SidebarItems.map((item) => (
                            <SidebarItemsRender key={item.id} item={item} />
                        ))}
                    </div>

                ) : (
                    <>
                        <Button className="!bg-block-bg" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                            <Menu />
                        </Button>

                    </>
                )}
            </div>
            {!isLarge && (
                <div className={cn(
                    isMenuOpen ? 'translate-y-[0px]' : 'translate-y-[-300px]',
                    'w-full absolute  mt-[60px] top-0 left-0 transition-all bg-background '
                )}>
                    <div className="flex flex-col items-end gap-4 px-3 py-2 z-[-1]">
                        {SidebarItems.map((item) => (
                            <SidebarItemsRender key={item.id} item={item} onClick={() => {
                                setIsMenuOpen(false);
                            }} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}


export default SideBar;