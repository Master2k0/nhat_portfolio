import Content from "@/components/content";
import Divider from "@/components/divider";
import Header from "@/components/header";
import ImageWithBlur from "@/components/imageWithBlur";
import { SectionWrapperNew } from "@/components/section-wrapper-new";
// import { SectionWrapper } from "@/components/sections-wrapper";
import { VNG as Datas } from "@/configs/datas/vng";
// import { LayoutProjectSection } from "@/layouts";
import { cn } from "@/libs/utils";
// const listIds = {
//   0: [
//     { id: "overview", title: "Overview" },
//     {
//       id: "context",
//       title: "Context",
//     },
//     {
//       id: "research-activities",
//       title: "Research Activities",
//     },
//     {
//       id: "ideation",
//       title: "Ideation",
//     },
//     {
//       id: "concept-validation",
//       title: "Concept Validation",
//     },
//     {
//       id: "final-design",
//       title: "Final Design",
//     },
//   ],
// };

function VNG() {
  // const navigate = useNavigate();
  // const [hoverBreadcrumb, setHoverBreadcrumb] = useState({
  //   home: false,
  //   // projectHighlights: false,
  // });
  return (
    <div className={cn("flex flex-col", "xl:gap-[150px]")}>
      <SectionWrapperNew>
        <Header type="h1" title={Datas.main.section1.title} />
        <Content
          content={Datas.main.section1.content}
          className={cn("mt-5 text-yellow", "xl:text-32b")}
        />
        <Divider className={cn("xl:my-10")} />
        <div className={cn("mt-5 flex gap-4", "xl:mt-8 xl:gap-[100px]")}>
          <div className={cn("flex flex-col gap-2", "xl:gap-5")}>
            <Content content="Duration:" className="text-gravel-25" />
            <Content content={Datas.main.section1.durations} />
          </div>
          <div className={cn("flex flex-col gap-2", "xl:gap-5")}>
            <Content content="Team:" className="text-gravel-25" />
            {Datas.main.section1.teams.map((team, index) => (
              <Content content={team} key={index} />
            ))}
          </div>
          <div className={cn("flex flex-col gap-2", "xl:gap-5")}>
            <Content content="Mt contribution:" className="text-gravel-25" />
            {Datas.main.section1.contributions.map((contribution, index) => (
              <Content content={contribution} key={index} />
            ))}
          </div>
        </div>
        <ImageWithBlur
          alt=""
          src={Datas.main.section1.img}
          className={cn("left-[50%] aspect-[1440/721] w-[100vw] -translate-x-1/2", "xl:mt-[150px]")}
        />
      </SectionWrapperNew>
      <SectionWrapperNew divClassName={cn("xl:flex xl:flex-col xl:gap-10")}>
        <Header type="h3" title={Datas.main.section2.title} />
        <div className={cn("flex flex-col gap-4", "xl:gap-3")}>
          <Content content={Datas.main.section2.content[0]} />
          <p
            className="text-14r text-gravel-100 xl:text-18r"
            dangerouslySetInnerHTML={{
              __html: Datas.main.section2.content[1],
            }}
          />
        </div>
        <ImageWithBlur alt="" src={Datas.main.section2.img1} />
        <Content content={Datas.main.section2.content2} />
        <ImageWithBlur alt="" src={Datas.main.section2.img2} />
        <Content content={Datas.main.section2.content3} />
        <div className="rounded-[12px] bg-orange p-5">
          <p className="text-14b text-white xl:text-18b">
            {Datas.main.section2.businessGoal.title}
          </p>
          <Content
            content={Datas.main.section2.businessGoal.content}
            className="mt-2 text-gravel-25"
          />
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew>
        <Header type="h3" title={Datas.main.section3.title} />
        <Content content={Datas.main.section3.content} className="xl:mt-10" />
        <div className="flex flex-col gap-5 xl:mt-8">
          <Header type="h4" title={Datas.main.section3.interviews.title} className="text-yellow" />
          <div className={cn("flex flex-col gap-4")}>
            <div className={cn("xl:flex xl:items-center xl:gap-5")}>
              <p>📝</p>
              <Content content={Datas.main.section3.interviews.content.header} />
            </div>
            <div className="flex gap-2 pl-10">
              <div className={cn("flex flex-col", "xl:gap-2")}>
                {Datas.main.section3.interviews.content.list.map((item, index) => (
                  <Content content={`${item[0]}`} key={index} />
                ))}
              </div>
              <div className={cn("flex flex-col", "xl:gap-2")}>
                {Datas.main.section3.interviews.content.list.map((item, index) => (
                  <Content content={`${item[1]}`} key={index} />
                ))}
              </div>
            </div>
          </div>
          <p
            className="text-14r text-gravel-100 xl:mt-5 xl:text-18r"
            dangerouslySetInnerHTML={{
              __html: Datas.main.section3.interviews.subContent,
            }}
          />
        </div>
        <div className="flex flex-col gap-5 xl:mt-8">
          <Header type="h4" title={Datas.main.section3.observation.title} className="text-yellow" />
          <Content content={Datas.main.section3.observation.content} />
          <div className="flex flex-col gap-4">
            {Datas.main.section3.observation.subContents.map((subContent, index) => (
              <div key={index} className="flex items-center gap-4">
                <p>🎯</p>
                <Content content={subContent} />
              </div>
            ))}
          </div>
        </div>
        <ImageWithBlur alt="" src={Datas.main.section3.img} className="xl:mt-5" />
        <div className="rounded-[12px] bg-blue p-5 xl:mt-10">
          <p className="text-14b text-white xl:text-18b">{Datas.main.section3.hmw.title}</p>
          <Content
            content={Datas.main.section3.hmw.content}
            className="mt-2 text-gravel-25 xl:text-16r"
          />
        </div>
      </SectionWrapperNew>
      {/* <ImageWithBlur
                    alt=""
                    src={subContent.img}
                    className="shrink-0 grow-0  max-w-[345px]"
                  /> */}
      {/* <p
                    className="text-14r text-gravel-100 xl:text-16r"
                    dangerouslySetInnerHTML={{
                      __html: Datas.main.section3.conducted[0],
                    }}
                  /> */}
    </div>
  );
}

export default VNG;
