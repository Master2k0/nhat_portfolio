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
          {/* <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="about-logo"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section2.title} />
              <Divider />
              <div className="flex flex-col gap-4 lg:gap-10">
                {Datas.main.section2.content.map((content, index) => (
                  <Content key={index} content={content} />
                ))}
              </div>
            </div>
            <img
              alt=""
              src={Datas.main.section2.img}
              className="mt-6 w-full rounded-[8px] lg:mt-10 xl:rounded-[12px]"
            />
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="style-guide"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section3.title} />
              <Divider />
              <div className="flex flex-col gap-5 lg:gap-8">
                <p className="text-16s text-gravel-25 lg:text-24s">
                  {Datas.main.section3.subSection1.title}
                </p>
                <div className="flex flex-col gap-4 lg:gap-5">
                  {Datas.main.section3.subSection1.content.map((content, index) => (
                    <Content key={index} content={content} />
                  ))}
                </div>
                <img
                  alt=""
                  src={Datas.main.section3.subSection1.img1}
                  className="w-full rounded-[8px] xl:rounded-[12px]"
                />
                <Content content={Datas.main.section3.subSection1.subContent} />
                <img
                  alt=""
                  src={Datas.main.section3.subSection1.img2}
                  className="w-full rounded-[8px] xl:rounded-[12px]"
                />
              </div>
              <div className="border-dash-custom my-6 w-full lg:my-10" />
              <div className="flex flex-col gap-5 lg:gap-8">
                <div className="flex gap-3">
                  <p className="font-montserrat text-16s text-gravel-25 lg:text-24s">
                    {Datas.main.section3.subSection2.title[0]}
                  </p>
                  <p className="text-yellow-gradient font-montserrat text-16s lg:text-24s">
                    {Datas.main.section3.subSection2.title[1]}
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:flex-row  lg:items-center lg:gap-10">
                  <p className="font-montserrat text-[133px] font-bold text-gravel-25">Aa</p>
                  <div className="flex flex-col gap-4 xl:gap-5">
                    <div className="flex gap-6 lg:gap-10">
                      <p className="font-montserrat text-16r text-gravel-25 lg:text-18r">Regular</p>
                      <p className="font-montserrat text-16m text-gravel-25 lg:text-18m">Medium</p>
                      <p className="font-montserrat text-16s text-gravel-25 lg:text-18s">
                        Semi Bold
                      </p>
                      <p className="font-montserrat text-16b text-gravel-25 lg:text-18b">Bold</p>
                    </div>
                    <p className="font-montserrat text-gravel-100">
                      {Datas.main.section3.subSection2.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="sitemap"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section4.title} />
              <Divider />

              <Content content={Datas.main.section4.content} />
            </div>
            <img
              alt=""
              src={Datas.main.section4.img}
              className="mt-6 w-full rounded-[8px] lg:mt-10 xl:rounded-[12px]"
            />
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="user-flow"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section5.title} />
              <Divider />

              <Content content={Datas.main.section5.content} />
            </div>
            <img
              alt=""
              src={Datas.main.section5.img}
              className="mt-6 w-full rounded-[8px] lg:mt-10 xl:rounded-[12px]"
            />
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="wireframe"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section6.title} />
              <Divider />
              <Content content={Datas.main.section6.content} />
            </div>
            <div className="border-dash-custom invisible my-3 lg:visible lg:my-10" />
            <div className="flex flex-col gap-5 lg:gap-8">
              <p className="text-16s text-gravel-25 lg:text-24s">
                {Datas.main.section6.mobile.title}
              </p>
              <div className="columns-3 gap-[13px] lg:columns-5 lg:gap-8">
                {Datas.main.section6.mobile.imgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={Datas.main.section6.mobile.title}
                    className="mb-3 w-full lg:mb-8"
                  />
                ))}
              </div>
            </div>
            <div className="border-dash-custom my-6 lg:my-10" />
            <div className="flex flex-col gap-5 lg:gap-8">
              <p className="text-16s text-gravel-25 lg:text-24s">{Datas.main.section6.pc.title}</p>
              <div className="columns-2 gap-[13px] lg:columns-4 lg:gap-8">
                {Datas.main.section6.pc.imgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={Datas.main.section6.pc.title}
                    className="mb-3 w-full lg:mb-4"
                  />
                ))}
              </div>
            </div>
          </SectionWrapper>
          <SectionWrapper
            wrapperClassName="section-border overflow-hidden p-px  rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px] xl:rounded-[8px] 3xl:rounded-[8px]"
            divClassName="rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7 xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px] "
            id="final-ui"
          >
            <div className="flex flex-col">
              <Header title={Datas.main.section7.title} />
              <Divider />
              <div className="flex flex-col gap-4 lg:gap-5">
                {Datas.main.section7.content.map((content, index) => (
                  <Content content={content} key={index} />
                ))}
              </div>
            </div>
            <div className="border-dash-custom invisible my-3 lg:visible lg:my-10" />
            <div className="flex flex-col gap-8">
              <p className="text-16s text-gravel-25 lg:text-24s">Mobile Web</p>
              <div className="flex flex-wrap gap-3 lg:gap-[36px]">
                {Datas.main.section7.mobileImg.map((img, index) => (
                  <img
                    key={index}
                    alt=""
                    src={img}
                    className="aspect-[1/2] w-[100px] rounded-[8px] lg:w-[150px] xl:rounded-[12px]"
                  />
                ))}
              </div>
            </div>
            <div className="border-dash-custom my-6 lg:my-10" />
            <div className="flex flex-col gap-8">
              <p className="text-16s text-gravel-25 lg:text-24s">Web Desktop</p>
              <div className="columns-2 gap-3 lg:gap-[36px]">
                {Datas.main.section7.pcImg.map((img, index) => (
                  <img
                    key={index}
                    alt=""
                    src={img}
                    className="mb-6 w-full rounded-[8px] lg:mb-10 xl:rounded-[12px]"
                  />
                ))}
              </div>
            </div>
          </SectionWrapper> */}
        </div>
      </div >
    </div >
  );
}

export default VNG;
