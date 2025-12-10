import Content from "@/components/content";
import Divider from "@/components/divider";
import Header from "@/components/header";
import { SectionWrapper } from "@/components/sections-wrapper";
import { VNG as Datas } from "@/configs/datas/vng";
import { LayoutProjectSection } from "@/layouts";
import { cn } from "@/libs/utils";
const listIds = {
  0: [
    { id: "overview", title: "Overview" },
    {
      id: "context",
      title: "Context",
    },
    {
      id: "research-activities",
      title: "Research Activities",
    },
    {
      id: "ideation",
      title: "Ideation",
    },
    {
      id: "concept-validation",
      title: "Concept Validation",
    },
    {
      id: "final-design",
      title: "Final Design",
    },
  ],
};

function VNG() {
  // const navigate = useNavigate();
  // const [hoverBreadcrumb, setHoverBreadcrumb] = useState({
  //   home: false,
  //   // projectHighlights: false,
  // });
  return (
    <div className="flex flex-col gap-6 xl:gap-[60px]">
      {/* <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <span
              className="shadow-text cursor-pointer text-gravel-300 hover:text-gravel-25"
              onMouseEnter={() => setHoverBreadcrumb({ ...hoverBreadcrumb, home: true })}
              onMouseLeave={() => setHoverBreadcrumb({ ...hoverBreadcrumb, home: false })}
              onClick={() => {
                navigate(Datas.breadCrumbHref[0]);
              }}
            >
              {hoverBreadcrumb.home ? (
                <img alt="" src="/home/icons/hh.svg" />
              ) : (
                <img alt="" src="/home/icons/ha.svg" />
              )}
            </span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span
              className="shadow-text cursor-pointer text-16r text-gravel-300 hover:text-gravel-25"
              onMouseEnter={() =>
                setHoverBreadcrumb({ ...hoverBreadcrumb, projectHighlights: true })
              }
              onMouseLeave={() =>
                setHoverBreadcrumb({ ...hoverBreadcrumb, projectHighlights: false })
              }
              onClick={() => {
                navigate(Datas.breadCrumbHref[1]);
              }}
            >
              {isLargeScreen ? (
                "Case studies"
              ) : hoverBreadcrumb.projectHighlights ? (
                <img alt="" src="/home/icons/bh.svg" />
              ) : (
                <img alt="" src="/home/icons/ba.svg" />
              )}
            </span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="shadow-text cursor-pointer text-12r text-gravel-25 xl:text-16r">
              WaveB - Blockchain Platform
            </span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
      <div className="flex flex-col gap-6 xl:flex-row">
        <LayoutProjectSection currentTab={0} listIds={listIds} classContainer="mt-8" />
        <div className="flex flex-col gap-6">
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="overview"
          >
            <div className="flex flex-col gap-4">
              <Header title={Datas.main.section1.title} />
              <div className="flex flex-col gap-4 xl:gap-5">
                {Datas.main.section1.content.map((content, index) => (
                  <Content content={content} key={index} />

                ))}

              </div>
            </div>
            <img
              alt=""
              src={Datas.main.section1.img}
              className="mt-6 w-full rounded-[8px] xl:mt-8 xl:rounded-[12px]"
            />
            <div className={cn(
              "flex gap-4 mt-5",
              "xl:gap-[100px] xl:mt-8"
            )}>
              <div className={cn(
                "flex flex-col gap-2",
                "xl:gap-5",
              )}>
                <Content content="Duration:" className="text-gravel-25" />
                <Content content={Datas.main.section1.durations} />
              </div>
              <div className={cn(
                "flex flex-col gap-2",
                "xl:gap-5",
              )}>
                <Content content="Team:" className="text-gravel-25" />
                {Datas.main.section1.teams.map((team, index) => (
                  <Content content={team} key={index} />

                ))}
              </div>
              <div className={cn(
                "flex flex-col gap-2",
                "xl:gap-5",
              )}>
                <Content content="Mt contribution:" className="text-gravel-25" />
                {Datas.main.section1.contributions.map((contribution, index) => (
                  <Content content={contribution} key={index} />

                ))}
              </div>
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="context"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section2.title} />
              <Divider />
              <div className="flex flex-col gap-4 xl:gap-5">
                {Datas.main.section2.content.map((content, index) => (
                  <Content content={content} key={index} />
                ))}
              </div>
            </div>
            <img
              alt=""
              src={Datas.main.section2.img}
              className="mt-6 w-full xl:mt-8 "
            />
            <div className="bg-orange p-5 rounded-xl mt-6">
              <p className="text-14b xl:text-18b text-white ">Busines Goal:</p>
              <Content content={Datas.main.section2.businesGoal} className="text-gravel-25 mt-2" />
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="research-activities"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section3.title} />
              <Divider />
              <div className="flex flex-col gap-4 xl:gap-5">
                <Content content={Datas.main.section3.content} />
              </div>
            </div>
            <div>
              <p className="text-gravel-25 text-20b mb-6 mt-8">I conducted:</p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                  👀
                  <p
                    className="text-14r text-gravel-100 xl:text-16r"
                    dangerouslySetInnerHTML={{
                      __html: Datas.main.section3.conducted[0],
                    }}
                  />
                </div>
                <div className="flex flex-row gap-5">
                  📝
                  <p
                    className="text-14r text-gravel-100 xl:text-16r"
                    dangerouslySetInnerHTML={{
                      __html: Datas.main.section3.conducted[1],
                    }}
                  />
                </div>
                <ol className="list-decimal list-inside space-y-3 ml-10">
                  {Datas.main.section3.conductedSub.map((subContent, index) => (
                    <li key={index} className="text-gravel-100 text-16r list-item"> {subContent}</li>
                  ))}
                  <p className="text-gravel-100 text-16r">...</p>
                </ol>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-8">
              <Content content={"Key findings:"} className="text-gravel-25 xl:text-20b" />
              <div className="flex flex-col gap-6">
                {Datas.main.section3.keyFindings.map((finding, index) => (
                  <div key={index} className="flex gap-5 bg-gravel-800 rounded-xl p-5">
                    <img
                      alt={finding.content}
                      src={finding.img}
                      className="aspect-[250/140] max-w-[250px]"

                    />
                    <div className="flex flex-col gap-2">
                      <Content content={finding.title} className="text-gravel-25 xl:text-20b" />
                      <p
                        className="text-14r text-gravel-100 xl:text-16r"
                        dangerouslySetInnerHTML={{
                          __html: finding.content,
                        }}
                      />
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue p-5 rounded-xl mt-6">
              <p className="text-14b xl:text-18b text-white ">HMW:</p>
              <Content content={Datas.main.section3.hmw} className="text-gravel-25 mt-2" />
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="ideation"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section4.title} />
              <Divider />
              <div className="flex flex-col gap-4 xl:gap-5">
                <Content content={Datas.main.section4.content} />
              </div>
            </div>
            <img
              alt=""
              src={Datas.main.section4.img}
              className="mt-6 w-full xl:mt-8 "
            />
            <div className="flex flex-col gap-8">
              <Content content={Datas.main.section4.belowContent} />
              {Datas.main.section4.subContents.map((subContent, index) => (
                <div key={index} className="flex flex-col xl:flex-row gap-4 xl:gap-5">
                  <div className="flex flex-col gap-3">
                    <Header title={subContent.index} />
                    {subContent.contents.map((content, idx) => (
                      <Content content={content} key={idx} />
                    ))}
                  </div>
                  <img
                    alt=""
                    src={subContent.img}
                    className="shrink-0 grow-0  max-w-[345px] "
                  />
                </div>
              ))}
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="concept-validation"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section5.title} />
              <Divider />
              <div className="flex flex-col gap-4 xl:gap-5">
                <p
                  className="text-14r text-gravel-100 xl:text-16r"
                  dangerouslySetInnerHTML={{
                    __html: Datas.main.section5.content,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex flex-col  xl:flex-row gap-5 w-full">
                {Datas.main.section5.imgs.map((img, index) => (
                  <img key={index} src={img} className="rounded-[8px] max-w-[223px]" />
                ))}

              </div>
              {Datas.main.section5.imgs2.map((img, index) => (
                <img key={index} src={img} className="rounded-[8px] w-full" />
              ))}
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="final-design"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section6.title} />
              <Divider />
              <div className="flex flex-col gap-4 xl:gap-5">
                <Content content={Datas.main.section6.content} />
              </div>
            </div>
            <div className="flex flex-col gap-8 mt-8">

              {Datas.main.section6.imgs.map((img, index) => (
                <img key={index} src={img} className=" w-full" />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div >
    </div >
  );
}

export default VNG;
