import { SectionWrapper } from "@/components/sections-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WashUp as Datas } from "@/configs/datas/wash-up";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { LayoutProjectSection } from "@/layouts";
import { cn } from "@/libs/utils";
import { useState } from "react";

function TabsController() {
  const isLargeScreen = useResponsiveProps({ xl: true });
  const [tabsActive, setTabsActive] = useState("Vehicle wash app");
  return (
    <div>
      <Tabs defaultValue="Vehicle wash app">
        {!isLargeScreen ? (
          <SectionWrapper
            wrapperClassName={cn(
              "relative w-full overflow-visible  xl:rounded-[28px] rounded-[20px] xl:max-w-[600px] 3xl:max-w-[1064px] h-fit rounded-bl-none rounded-br-none !pr-0 !pb-0 xl:pr-[1px] xl:pb-[1px]",
            )}
            divClassName="flex flex-col gap-6 pl-[15px] pr-[16px] pt-[19px] py-[20px] xl:p-[15px] xl:rounded-[28px] 3xl:p-[27px] height-fit rounded-bl-none rounded-br-none "
          >
            <div className="flex items-center justify-between">
              <p className="text-20b text-gravel-300">Wash Up</p>
              <Drawer>
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
                      value={"Vehicle wash app"}
                      onClick={() => setTabsActive("Vehicle wash app")}
                    >
                      Vehicle wash app
                      {!isLargeScreen && tabsActive === "Vehicle wash app" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"Insurance Feature"}
                      onClick={() => setTabsActive("Insurance Feature")}
                    >
                      Insurance Feature
                      {!isLargeScreen && tabsActive === "Insurance Feature" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"Technician app"}
                      onClick={() => setTabsActive("Technician app")}
                    >
                      Technician app
                      {!isLargeScreen && tabsActive === "Technician app" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                    <TabsTrigger
                      className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                      value={"Technician Order"}
                      onClick={() => setTabsActive("Technician Order")}
                    >
                      Technician Order
                      {!isLargeScreen && tabsActive === "Technician Order" && (
                        <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                      )}
                    </TabsTrigger>
                  </TabsList>
                </DrawerContent>
              </Drawer>
            </div>
          </SectionWrapper>
        ) : (
          <SectionWrapper
            wrapperClassName={cn("relative w-full overflow-visible  xl:rounded-[8px] h-fit ")}
            divClassName="flex flex-col gap-6  xl:rounded-[8px] height-fit "
          >
            <TabsList>
              <TabsTrigger
                className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                value={"Vehicle wash app"}
                onClick={() => setTabsActive("Vehicle wash app")}
              >
                Vehicle wash app
                {!isLargeScreen && tabsActive === "Vehicle wash app" && (
                  <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                )}
              </TabsTrigger>
              <TabsTrigger
                className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                value={"Insurance Feature"}
                onClick={() => setTabsActive("Insurance Feature")}
              >
                Insurance Feature
                {!isLargeScreen && tabsActive === "Insurance Feature" && (
                  <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                )}
              </TabsTrigger>
              <TabsTrigger
                className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                value={"Technician app"}
                onClick={() => setTabsActive("Technician app")}
              >
                Technician app
                {!isLargeScreen && tabsActive === "Technician app" && (
                  <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                )}
              </TabsTrigger>
              <TabsTrigger
                className="[state=active]:xl:text-gravel-25 flex h-[44px] w-full justify-between px-4 text-14r xl:h-auto xl:text-18s xl:text-gravel-300"
                value={"Technician Order"}
                onClick={() => setTabsActive("Technician Order")}
              >
                Technician Order
                {!isLargeScreen && tabsActive === "Technician Order" && (
                  <img alt="" src="/vehicle-wash-app/icons/check.svg" />
                )}
              </TabsTrigger>
            </TabsList>
          </SectionWrapper>
        )}
        <TabsComponent />
      </Tabs>
    </div>
  );
}

function TabsComponent() {
  return (
    <>
      <TabsContent className="text-gravel-25" value="Vehicle wash app">
        haha
      </TabsContent>
      <TabsContent className="text-gravel-25" value="Insurance Feature">
        hehe
      </TabsContent>
      <TabsContent className="text-gravel-25" value="Technician app">
        hihi
      </TabsContent>
      <TabsContent className="text-gravel-25" value="Technician Order">
        hoho
      </TabsContent>
    </>
  );
}

function WashUp() {
  const isLargeScreen = useResponsiveProps({ xl: true });
  const [hoverBreadcrumb, setHoverBreadcrumb] = useState({
    home: false,
    projectHighlights: false,
  });
  return (
    <div className="flex flex-col gap-6 xl:gap-[60px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={Datas.breadCrumbHref[0]}
              className="shadow-text"
              onMouseEnter={() => setHoverBreadcrumb({ ...hoverBreadcrumb, home: true })}
              onMouseLeave={() => setHoverBreadcrumb({ ...hoverBreadcrumb, home: false })}
            >
              {hoverBreadcrumb.home ? (
                <img alt="" src="/home/icons/hh.svg" />
              ) : (
                <img alt="" src="/home/icons/ha.svg" />
              )}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={Datas.breadCrumbHref[1]}
              className="shadow-text text-gravel-300"
              onMouseEnter={() =>
                setHoverBreadcrumb({ ...hoverBreadcrumb, projectHighlights: true })
              }
              onMouseLeave={() =>
                setHoverBreadcrumb({ ...hoverBreadcrumb, projectHighlights: false })
              }
            >
              {isLargeScreen ? (
                "Project Highlights"
              ) : hoverBreadcrumb.projectHighlights ? (
                <img alt="" src="/home/icons/bh.svg" />
              ) : (
                <img alt="" src="/home/icons/ba.svg" />
              )}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={Datas.breadCrumbHref[2]}
              className="shadow-text text-12r text-gravel-25 xl:text-18r"
            >
              Washup - Vehicle wash app
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6">
        <TabsController />
        <LayoutProjectSection listIds={[]} />
      </div>
    </div>
  );
}

export default WashUp;
