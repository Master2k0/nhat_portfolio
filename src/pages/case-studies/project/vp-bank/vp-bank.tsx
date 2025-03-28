import Content from "@/components/content";
import Header from "@/components/header";
import { SectionWrapper } from "@/components/sections-wrapper";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { LayoutProjectSection } from "@/layouts";
import { VPBank as Datas } from "@/configs/datas/vp-bank";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import Hypothetical from "./components/hypothetical-case/hypothetical-case";
import Problem from "./components/problem/problem";
import Evaluate from "./components/evaluate/evaluate";
import Divider from "@/components/divider";
import AppUIDesign from "./components/app-ui-design/app-ui-design";

const listIds = {
  0: [
    { id: "introduction", title: "Introduction" },
    {
      id: "hypothetical-case",
      title: "Hypothetical Case",
    },
    {
      id: "problem-analysis",
      title: "Problem Analysis",
    },
    {
      id: "user-flow",
      title: "User Flow",
    },
    {
      id: "evaluate",
      title: "Evaluate/ Improve",
    },
    {
      id: "app-ui-design",
      title: "UI Design",
    },
  ],
};

function VPBank() {
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
                "Case studies"
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
              VP App UX Issues
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-6 xl:flex-row">
        <LayoutProjectSection currentTab={0} listIds={listIds} classContainer="mt-8" />
        <div className="flex flex-col gap-6">
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px overflow-hidden rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="introduction"
          >
            <div className="flex flex-col gap-4">
              {isLargeScreen ? (
                <Header title={Datas.main.section1.pcTitle} />
              ) : (
                <>
                  <p className="text-16s text-gravel-100">{Datas.main.section1.mainTitle}</p>
                  <Header title={Datas.main.section1.subTitle} />
                </>
              )}

              <Content content={Datas.main.section1.content} />
            </div>
            <img
              alt=""
              src={Datas.main.section1.img}
              className="mt-6 w-full rounded-[8px] xl:rounded-[12px]"
            />
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px overflow-hidden rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="hypothetical-case"
          >
            <div className="flex flex-col gap-4">
              <Header title={Datas.main.section2.title} />
              <Divider />
              {Datas.main.section2.content.map((content, index) => (
                <p
                  key={index}
                  className="mb-10 text-14r text-gravel-100 xl:text-18r"
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              ))}
              <Hypothetical
                icon={Datas.main.section2.group1.icon}
                title={Datas.main.section2.group1.title}
                content={Datas.main.section2.group1.content}
                subContent={Datas.main.section2.group1.subContent}
              />
              <Content content={Datas.main.section2.content2} />
              <Hypothetical
                icon={Datas.main.section2.group2.icon}
                title={Datas.main.section2.group2.title}
                content={Datas.main.section2.group2.content}
                subContent={Datas.main.section2.group2.subContent}
              />
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px overflow-hidden rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="problem-analysis"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section3.title} />
              <Divider />
              {Datas.main.section3.content.map((content, index) => (
                <p
                  key={index}
                  className="text-14r text-gravel-100 xl:text-18r"
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              ))}
            </div>
            <Problem datas={Datas.main.section3.datas} />
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px overflow-hidden rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="user-flow"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section4.title} />
              <Divider />
              <Content content={Datas.main.section4.content} />
            </div>
            <img src={Datas.main.section4.img} alt={Datas.main.section4.title} />
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px overflow-hidden rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="evaluate"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section5.title} />
              <Divider />
              <Content content={Datas.main.section5.content} />
            </div>
            <Evaluate
              dataMobile={Datas.main.section5.dataMobile}
              dataPC={Datas.main.section5.dataPC}
            />
          </SectionWrapper>
          <SectionWrapper
            divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
            wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
            id="app-ui-design"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section6.title} />
              <Divider />
              <Content className="mb-6" content={Datas.main.section6.content} />
              <AppUIDesign />
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}

export default VPBank;
