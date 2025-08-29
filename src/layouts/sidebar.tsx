import { Button } from "@/components/ui/button";
import { SidebarItems, siteConfig } from "@/configs";
import { useGlobalContext } from "@/context/global-context";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";
import { ISidebarItem } from "@/types/config";
import { Menu, PanelRightClose } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Overlay from "./overlay";


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
                "text-gravel-25 text-18r lg:px-6 px-4  ",
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
    const { setOverlay } = useGlobalContext()
    const sidebarRef = useRef<HTMLDivElement>(null);

    const onClickHambuger = () => {
        setIsMenuOpen(!isMenuOpen);
        setOverlay(!isMenuOpen);
    }

    useEffect(() => {
        setIsMenuOpen(false);
        setOverlay(false);
    }, [isLarge, setOverlay])

    // Handle click outside
    useEffect(() => {
        if (!isMenuOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
                setOverlay(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, setOverlay]);

    return (
        <div className="fixed top-0 left-0 z-50  w-full bg-block-bg  ">
            <div className="flex justify-between px-4 lg:px-0  h-[60px] lg:h-20 lg:max-w-[1040px] items-center mx-auto lg:justify-between bg-block-bg ">
                <p className="text-14s text-gravel-25 lg:text-18s ">@jamesnguyendesign</p>
                {isLarge ? (
                    <div className="flex">
                        {SidebarItems.map((item) => (
                            <SidebarItemsRender key={item.id} item={item} />
                        ))}
                    </div>

                ) : (
                    <>
                        <Button className="!bg-block-bg" onClick={onClickHambuger} >
                            <Menu />
                        </Button>

                    </>
                )}
            </div>
            {!isLarge && (
                <>
                    <Overlay className="absolute top-0 right-0 w-full h-screen z-0" />
                    <div className={cn(
                        isMenuOpen ? 'translate-x-[0px]' : 'translate-x-[100%]',
                        'w-[71%] absolute  top-0 right-0 h-screen transition-all bg-block-bg '
                    )}
                        ref={sidebarRef}
                    >
                        <div className="flex flex-col items-start">
                            <div className={cn(
                                "w-11 h-11 ml-1 my-2 cursor-pointer flex items-center justify-center",
                                ""
                            )} onClick={onClickHambuger} >
                                <PanelRightClose className="text-gravel-25 h-5 w-5 " />
                            </div>
                            {SidebarItems.map((item) => (
                                <div key={item.id} className="h-[52px]">
                                    <SidebarItemsRender item={item} onClick={onClickHambuger} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* <Drawer>
                <DrawerTrigger asChild>
                  <Button className="flex gap-2 bg-select">
                    <img src="/vehicle-wash-app/icons/grid.svg" alt="" className="h-4 w-4" />
                    Orther sections
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-block-bg">
                  <TabsList className="flex h-fit flex-col !items-start">
                    <p className="p-4 text-18s text-gravel-25 xl:hidden">Other sections</p>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"Consumer Product"}
                      onClick={() => setCurrentTab("Consumer Product")}
                    >
                      Consumer Product
                      {!isLargeScreen && currentTab === "Consumer Product" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"Design System"}
                      onClick={() => setCurrentTab("Design System")}
                    >
                      Design System
                      {!isLargeScreen && currentTab === "Design System" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"POS System"}
                      onClick={() => setCurrentTab("POS System")}
                      disabled
                    >
                      POS System
                      {!isLargeScreen && currentTab === "POS System" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"Admin System"}
                      onClick={() => setCurrentTab("Admin System")}
                      disabled
                    >
                      Admin System
                      {!isLargeScreen && currentTab === "Admin System" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                  </TabsList>
                </DrawerContent>
              </Drawer> */}
        </div>
    )
}


export default SideBar;