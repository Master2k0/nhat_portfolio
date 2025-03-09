import { SectionWrapper } from "@/components/sections-wrapper";
import { WashUp as Datas } from "@/configs/datas/wash-up";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import TabContent from "./tab-content";
import Divider from "../../../../../components/divider";
import Header from "@/components/header";
import Content from "@/components/content";

function TabOne() {
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <div className="flex flex-col gap-6">
      <SectionWrapper
        wrapperClassName="rounded-tl-none rounded-tr-none !pl-0 !pt-0 xl:!pl-[1px] xl:!pt-[1px] xl:mt-6 lg:rounded-tl-none lg:rounded-tr-none xl:rounded-[8px] 3xl:rounded-[8px]"
        divClassName="rounded-tl-none rounded-tr-none  lg:rounded-tl-none lg:rounded-tr-none xl:rounded-[8px]  !pt-4 !pb-[19px] !pr-[15px] 3xl:rounded-[8px] xl:!p-[31px] "
        id="introduction"
      >
        <div className="flex flex-col gap-4">
          <Header
            title={
              isLargeScreen
                ? Datas.vehicleWashApp.section1.pcTitle
                : Datas.vehicleWashApp.section1.title
            }
          />
          {Datas.vehicleWashApp.section1.content.map((content, index) => (
            <Content content={content} key={index} />
          ))}
        </div>
        <img alt="" src={Datas.vehicleWashApp.section1.img} className="mt-6 w-full" />
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="identifying-users"
      >
        <div className="flex flex-col">
          <Header title={Datas.vehicleWashApp.section2.title} />
          <Divider />
          <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2 xl:gap-10">
            {Datas.vehicleWashApp.section2.content.map((content, index) => (
              <TabContent
                key={index}
                description={content.description}
                icon={content.icon}
                title={content.title}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="key-features"
      >
        <div className="flex flex-col">
          <Header title={Datas.vehicleWashApp.section3.title} />
          <Divider />
          <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2 xl:gap-10">
            {Datas.vehicleWashApp.section3.content.map((content, index) => (
              <TabContent
                key={index}
                description={content.description}
                icon={content.icon}
                title={content.title}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="user-journeys"
      >
        <div className="flex flex-col">
          <Header title={Datas.vehicleWashApp.section4.title} />
          <Divider />
          <img
            src={
              isLargeScreen
                ? Datas.vehicleWashApp.section4.imgPc
                : Datas.vehicleWashApp.section4.imgMobile
            }
            alt=""
          />
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="user-flow"
      >
        <div className="flex flex-col">
          <Header title={Datas.vehicleWashApp.section5.title} />
          <Divider />
          <img src={Datas.vehicleWashApp.section5.img} alt="" />
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="ui-design"
      >
        <div className="flex flex-col">
          <Header title={Datas.vehicleWashApp.section6.title} />
          <Divider />
          <img src={Datas.vehicleWashApp.section6.img} alt="" />
        </div>
      </SectionWrapper>
    </div>
  );
}

export default TabOne;
