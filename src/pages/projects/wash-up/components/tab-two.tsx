import { SectionWrapper } from "@/components/sections-wrapper";
import { WashUp as Datas } from "@/configs/datas/wash-up";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import ContentWithLargeIcon from "./content-with-large-icon";
import { cn } from "@/libs/utils";
import ProblemSolution from "./problem-solution";
import UserContracts from "./user-contracts";
import Content from "@/components/content";
import Header from "@/components/header";
import Divider from "@/components/divider";

function TabTwo() {
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
                ? Datas.insuranceFeature.section1.pcTitle
                : Datas.insuranceFeature.section1.title
            }
          />
          {Datas.insuranceFeature.section1.content.map((content, index) => (
            <Content content={content} key={index} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="key-features"
      >
        <Header title={Datas.insuranceFeature.section2.title} />
        <Divider />
        <div className="gap- flex flex-col"></div>
        {Datas.insuranceFeature.section2.content.map((content, index) => (
          <div key={index}>
            <ContentWithLargeIcon
              description={content.description}
              icon={content.icon}
              title={content.title}
            />
            {index !== Datas.insuranceFeature.section2.content.length - 1 && (
              <div className="border-dash-custom my-6" />
            )}
          </div>
        ))}
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="user-flow"
      >
        <Header title={Datas.insuranceFeature.section3.title} />
        <Divider />
        <img src={Datas.insuranceFeature.section3.img} className="w-full" />
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="problems-solutions"
      >
        <Header title={Datas.insuranceFeature.section4.title} />
        <Divider />
        <div className="flex flex-col gap-6 xl:gap-10">
          <ProblemSolution
            number="01"
            img={Datas.insuranceFeature.section4.content[0].img}
            problem={<p>{Datas.insuranceFeature.section4.content[0].problem}</p>}
            solution={
              <p
                dangerouslySetInnerHTML={{
                  __html: Datas.insuranceFeature.section4.content[0].solution as string,
                }}
              />
            }
          />
          <ProblemSolution
            number="02"
            img={Datas.insuranceFeature.section4.content[1].img}
            problem={
              <div className="flex flex-col gap-5 xl:gap-8">
                {Datas.insuranceFeature.section4.content[1].problems?.map((value, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      <p className="text-14s text-gravel-25 xl:text-18s">{value.title}</p>
                      <p className="text-14r text-gravel-100 xl:text-18r">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            }
            solution={
              <div className="flex flex-col gap-5 xl:gap-8">
                {Datas.insuranceFeature.section4.content[1].solutions?.map((value, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      <p className="text-14s text-gravel-25 xl:text-18s">{value.title}</p>
                      <p className="text-14r text-gravel-100 xl:text-18r">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            }
          />
          <ProblemSolution
            className="xl:flex-col"
            number="03"
            img={
              isLargeScreen
                ? Datas.insuranceFeature.section4.content[2].imgPc
                : Datas.insuranceFeature.section4.content[2].imgMobile
            }
            problem={
              <p className="text-14r text-gravel-100 xl:text-18r">
                {Datas.insuranceFeature.section4.content[2].problem}
              </p>
            }
            solution={
              <p className="text-14r text-gravel-100 xl:text-18r">
                {Datas.insuranceFeature.section4.content[2].solution}
              </p>
            }
          />
          <div
            className={cn(
              "flex w-full flex-col justify-between gap-5 rounded-[12px] bg-gravel-800 p-5 xl:flex-row xl:gap-0",
            )}
          >
            <div className="flex flex-col gap-3 xl:p-8">
              <p className="text-gradient w-fit text-18b xl:text-32b">04</p>
              <p className="mb-5 text-18s text-gravel-25 xl:mb-8 xl:text-24b">
                {Datas.insuranceFeature.section4.end.title}
              </p>
              <div className="flex flex-col gap-5 xl:gap-6">
                <p className="text-14r text-gravel-100 xl:text-18r">
                  {Datas.insuranceFeature.section4.end.description1}
                </p>
                <div className="flex justify-between gap-[8.37px] xl:gap-[100px]">
                  <div className="flex w-full flex-col items-center gap-[8.5px] xl:gap-5">
                    <img src={Datas.insuranceFeature.section4.end.img1} alt="image" />
                    <p className="text-8r text-gravel-300 lg:text-14r">Expectation</p>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[8.5px] xl:gap-5">
                    <img src={Datas.insuranceFeature.section4.end.img1} alt="image" />
                    <p className="text-8r text-gravel-300 lg:text-14r">Reality</p>
                  </div>
                </div>
                <p className="text-14r text-gravel-100 xl:text-18r">
                  {Datas.insuranceFeature.section4.end.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="user-contracts"
      >
        <Header title={Datas.insuranceFeature.section5.title} />
        <Divider />
        <div className="flex flex-col gap-6 xl:gap-10">
          <Content content={Datas.insuranceFeature.section5.description} />
          <UserContracts
            data={Datas.insuranceFeature.section5.content}
            img={Datas.insuranceFeature.section5.img}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px] "
        id="conclusion"
      >
        <Header title={Datas.insuranceFeature.section6.title} />
        <Divider />
        <Content content={Datas.insuranceFeature.section6.content} />
      </SectionWrapper>
    </div>
  );
}

export default TabTwo;
