import { SectionWrapper } from "@/components/sections-wrapper";
import Header from "./header";
import { WashUp as Datas } from "@/configs/datas/wash-up";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import Content from "./content";
import Divider from "./divider";
import { cn } from "@/libs/utils";

function TabFour() {
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <div className="flex flex-col gap-6">
      <SectionWrapper
        wrapperClassName="rounded-tl-none rounded-tr-none !pl-0 !pt-0 xl:!pl-[1px] xl:!pt-[1px] xl:mt-6 lg:rounded-tl-none lg:rounded-tr-none xl:rounded-[8px] 3xl:rounded-[8px]"
        divClassName="rounded-tl-none rounded-tr-none  lg:rounded-tl-none lg:rounded-tr-none xl:rounded-[8px]  !pt-4 !pb-[19px] !pr-[15px] 3xl:rounded-[8px] xl:!p-[31px] "
        id="introduction"
      >
        <div className="flex flex-col gap-4 xl:gap-10">
          <Header
            title={
              isLargeScreen
                ? Datas.technicianTask.section1.pcTitle
                : Datas.technicianTask.section1.title
            }
          />
          <div className="flex flex-col gap-6 xl:gap-10">
            <Content content={Datas.technicianTask.section1.content} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] !px-0 py-[19px] xl:py-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="some-ux-points"
      >
        <div className="flex flex-col">
          <Header title={Datas.technicianTask.section2.title} className="px-[15px] xl:px-[31px]" />
          <Divider className="mx-[15px] !w-auto xl:mx-[31px]" />
          <div className="flex flex-col gap-10">
            <Content
              content={Datas.technicianTask.section2.content}
              className="px-[15px] xl:px-[31px]"
            />
            <div className="flex flex-col xl:flex-row xl:gap-10 xl:px-[31px]">
              <div className="flex items-center gap-5 bg-gravel-800 px-4 py-6 xl:bg-inherit xl:p-0">
                <img
                  src={Datas.technicianTask.section2.description.img[0]}
                  alt=""
                  className="aspect-[120/307] max-w-[120px] xl:aspect-[375/812] xl:max-w-[375px]"
                />
                {!isLargeScreen && (
                  <div className="flex flex-col gap-3">
                    <p className="text-14m xl:text-24b">
                      {Datas.technicianTask.section2.description.title}
                    </p>
                    <p className="text-10r text-gravel-100 xl:text-18r">
                      {Datas.technicianTask.section2.description.content[0]}
                    </p>
                    <p className="text-10r text-gravel-100 xl:text-18r">
                      {Datas.technicianTask.section2.description.content[1]}
                    </p>
                  </div>
                )}
              </div>
              <div className="relative flex items-center gap-5 px-4 py-6 xl:flex-col xl:items-start xl:p-0">
                {isLargeScreen && (
                  <>
                    <p className="z-10 text-14m xl:text-24b">
                      {Datas.technicianTask.section2.description.title}
                    </p>
                    <p className="z-10 text-10r text-gravel-100 xl:text-18r">
                      {Datas.technicianTask.section2.description.content[0]}
                    </p>
                    <p className="z-10 text-10r text-gravel-100 xl:text-18r">
                      {Datas.technicianTask.section2.description.content[1]}
                    </p>
                  </>
                )}
                <p
                  className={cn(
                    "text-10r text-gravel-100 xl:text-18r",
                    isLargeScreen && "z-10 text-yellow",
                  )}
                >
                  {Datas.technicianTask.section2.description.content[2]}
                </p>
                <img
                  src={
                    !isLargeScreen
                      ? Datas.technicianTask.section2.description.img[1]
                      : Datas.technicianTask.section2.description.img[2]
                  }
                  alt=""
                  className={cn(
                    "aspect-[120/307] max-w-[120px] xl:aspect-[375/812] xl:max-w-[375px]",
                    isLargeScreen && "absolute left-1/2 -translate-x-1/2",
                  )}
                />
              </div>
            </div>
            <Content
              className="px-[15px] xl:px-[31px]"
              content={Datas.technicianTask.section2.endContent}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="conclusion"
      >
        <div className="flex flex-col">
          <Header title={Datas.technicianTask.section3.title} />
          <Divider />
          <Content content={Datas.technicianTask.section3.description} />
        </div>
      </SectionWrapper>
    </div>
  );
}

export default TabFour;
