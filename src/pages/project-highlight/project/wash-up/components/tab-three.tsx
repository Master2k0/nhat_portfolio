import { SectionWrapper } from "@/components/sections-wrapper";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { WashUp as Datas } from "@/configs/datas/wash-up";
import Divider from "../../../../../components/divider";
import TabContent from "./tab-content";
import ReceptionUI from "./reception-ui";
import Header from "@/components/header";
import Content from "@/components/content";

function TabThree() {
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
                ? Datas.technicianApp.section1.pcTitle
                : Datas.technicianApp.section1.title
            }
          />
          <div className="flex flex-col gap-6 xl:gap-10">
            <Content content={Datas.technicianApp.section1.content} />
            <img
              className="rounded-[8px] xl:rounded-[12px]"
              src={Datas.technicianApp.section1.img}
            />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="identifying-users"
      >
        <div className="flex flex-col">
          <Header title={Datas.technicianApp.section2.title} />
          <Divider />
          <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2 xl:gap-10">
            {Datas.technicianApp.section2.content.map((content, index) => (
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
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="key-features"
      >
        <div className="flex flex-col">
          <Header title={Datas.technicianApp.section3.title} />
          <Divider />
          <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2 xl:gap-10">
            {Datas.technicianApp.section3.content.map((content, index) => (
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
          <Header title={Datas.technicianApp.section4.title} />
          <Divider />
          <img
            src={
              isLargeScreen
                ? Datas.technicianApp.section4.imgPc
                : Datas.technicianApp.section4.imgMobile
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
          <Header title={Datas.technicianApp.section5.title} />
          <Divider />
          <img src={Datas.technicianApp.section5.img} alt="" />
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] !px-0 !pb-0 pt-5 xl:pt-8"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="task-reception-ui"
      >
        <div className="flex flex-col">
          <Header title={Datas.technicianApp.section6.title} className="px-5 xl:px-[31px]" />
          <Divider className="mx-5 !w-auto xl:mx-[31px]" />
          <Content
            content={Datas.technicianApp.section6.description}
            className="px-5 xl:px-[31px]"
          />
          <div className="mt-10 flex flex-col">
            <ReceptionUI datas={Datas.technicianApp.section6.content} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="import-order-ui"
      >
        <div className="flex flex-col">
          <Header title={Datas.technicianApp.section7.title} />
          <Divider />
          <div className="flex flex-col gap-6 xl:gap-10">
            <Content content={Datas.technicianApp.section7.content} />
            <img src={Datas.technicianApp.section7.img} alt="" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default TabThree;
