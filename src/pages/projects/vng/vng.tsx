import Content from "@/components/content";
import Divider from "@/components/divider";
import Header from "@/components/header";
import ImageWithBlur from "@/components/imageWithBlur";
import { SectionWrapperNew } from "@/components/section-wrapper-new";
import ZoomableImageWithBlur from "@/components/zoomable-image-with-blur";
import { VNG as Datas } from "@/configs/datas/vng";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";

function VNG() {
  // const navigate = useNavigate();
  // const [hoverBreadcrumb, setHoverBreadcrumb] = useState({
  //   home: false,
  //   // projectHighlights: false,
  // });
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <div className={cn("flex flex-col gap-10", "xl:gap-[150px]")}>
      <SectionWrapperNew>
        <Header type="h1" title={Datas.main.section1.title} />
        <Content
          content={Datas.main.section1.content}
          className={cn("mt-5 text-20b text-yellow", "xl:text-32b")}
        />
        <Divider type="dashed" className={cn("my-5 xl:my-10")} />
        <div className={cn("mt-5 flex gap-8", "xl:mt-8 xl:gap-[100px]")}>
          <div className={cn("flex flex-col gap-5")}>
            <Content content="Duration:" className="text-14s text-gravel-25" />
            <Content content={Datas.main.section1.durations} />
          </div>
          <div className={cn("flex flex-col gap-5")}>
            <Content content="Team:" className="text-14s text-gravel-25" />
            {Datas.main.section1.teams.map((team, index) => (
              <Content content={team} key={index} />
            ))}
          </div>
          <div className={cn("flex flex-col gap-5")}>
            <Content content="My contribution:" className="text-14s text-gravel-25" />
            {Datas.main.section1.contributions.map((contribution, index) => (
              <Content content={contribution} key={index} />
            ))}
          </div>
        </div>
        <ImageWithBlur
          alt=""
          src={Datas.main.section1.img}
          className={cn(
            "left-[50%] mt-10 aspect-[1440/721] w-[100vw] -translate-x-1/2",
            "xl:mt-[150px]",
          )}
        />
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
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
        <ZoomableImageWithBlur alt="" src={Datas.main.section2.img1} />
        {/* <ImageWithBlur alt="" src={Datas.main.section2.img1} /> */}
        <Content content={Datas.main.section2.content2} />
        {/* <ZoomableImageWithBlur
          alt=""
          src={isLargeScreen ? Datas.main.section2.img2 : Datas.main.section2.img2small}
        /> */}
        <ImageWithBlur
          alt=""
          src={isLargeScreen ? Datas.main.section2.img2 : Datas.main.section2.img2small}
        />
        <div className="rounded-[12px] bg-orange p-3 xl:p-5">
          <p className="text-16b text-white xl:text-18b">
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
        <Content content={Datas.main.section3.content} className="mt-6 xl:mt-10" />
        <div className="mt-6 flex flex-col gap-5 xl:mt-8">
          <Header type="h4" title={Datas.main.section3.interviews.title} className="text-yellow" />
          <div className={cn("flex flex-col gap-4")}>
            <div className={cn("flex items-center gap-5")}>
              <p>📝</p>
              <Content content={Datas.main.section3.interviews.content.header} />
            </div>
            <div className="flex gap-2 pl-10">
              <div className={cn("flex flex-col gap-2")}>
                {Datas.main.section3.interviews.content.list.map((item, index) => (
                  <Content content={`${item[0]}`} key={index} />
                ))}
              </div>
              <div className={cn("flex flex-col gap-2")}>
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
        <div className="mt-6 flex flex-col gap-5 xl:mt-8">
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
        <ZoomableImageWithBlur
          alt=""
          src={Datas.main.section3.img}
          wrapperClassName="mt-3 xl:mt-5"
        />
        {/* <ImageWithBlur alt="" src={Datas.main.section3.img} className="mt-3 xl:mt-5" /> */}
        <div className="mt-3 rounded-[12px] bg-blue p-3 xl:mt-10 xl:p-5">
          <p className="text-14b text-white xl:text-18b">{Datas.main.section3.hmw.title}</p>
          <Content
            content={Datas.main.section3.hmw.content}
            className="mt-2 text-gravel-25 xl:text-16r"
          />
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew>
        <Header type="h3" title={Datas.main.section4.title} className="mt-10 xl:mt-0" />
        <Header
          type="h4"
          title={Datas.main.section4.ticketEasier.title}
          className="mt-6 text-yellow xl:mt-10"
        />
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-5 xl:mt-5 xl:grid-cols-2">
          {Datas.main.section4.ticketEasier.content.map((content, index) => (
            <p
              key={index}
              className={cn(
                "text-14r text-gravel-100 xl:text-18r",
                index === 0 && "order-1",
                index === 1 && "order-3",

                "xl:order-1 xl:col-span-2",
              )}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          ))}

          {Datas.main.section4.ticketEasier.imgs.map((img, index) => (
            <ZoomableImageWithBlur
              alt=""
              src={img}
              key={index}
              wrapperClassName={cn(
                index === 0 && "order-2",
                index === 1 && "order-4",

                "xl:order-2 xl:col-span-1",
              )}
            />
            // <ImageWithBlur
            //   alt=""
            //   src={img}
            //   key={index}
            //   className={cn(
            //     "rounded-sm xl:rounded-[8px]",
            //     index === 0 && "order-2",
            //     index === 1 && "order-4",

            //     "xl:order-2 xl:col-span-1",
            //   )}
            // />
          ))}
        </div>
        <Header
          type="h4"
          title={Datas.main.section4.manage.title}
          className="mt-6 text-yellow xl:mt-10"
        />
        <div className="mt-3 flex flex-col gap-5 xl:mt-5">
          {Datas.main.section4.manage.content.map((content, index) => (
            <Content
              content={content}
              key={index}
              className="text-14r text-gravel-100 xl:text-18r"
            />
          ))}
          <ZoomableImageWithBlur alt="" src={Datas.main.section4.manage.img} />
          {/* <ImageWithBlur
            alt=""
            src={Datas.main.section4.manage.img}
            className="rounded-sm xl:rounded-[8px]"
          /> */}
        </div>
        <Header
          type="h4"
          title={Datas.main.section4.wireframing.title}
          className="mt-6 text-yellow xl:mt-10"
        />
        <div className="mt-3 grid grid-cols-2 gap-3 xl:mt-5 xl:gap-6">
          {Datas.main.section4.wireframing.imgs.map((img, index) => (
            <ZoomableImageWithBlur alt="" src={img} key={index} wrapperClassName="h-fit" />
            // <ImageWithBlur
            //   alt=""
            //   src={img}
            //   key={index}
            //   className="h-fit rounded-sm xl:rounded-[8px]"
            // />
          ))}
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew>
        <Header type="h3" title={Datas.main.section5.title} className="mt-10 xl:mt-0" />
        <div className="mt-6 flex flex-col gap-5 xl:mt-10">
          <Content
            content={Datas.main.section5.content}
            className="text-14r text-gravel-100 xl:text-18r"
          />
          <div className="grid grid-cols-3 gap-5">
            {Datas.main.section5.imgs.map((img, index) => (
              <ZoomableImageWithBlur alt="" src={img} key={index} wrapperClassName="h-fit" />

              // <ImageWithBlur
              //   alt=""
              //   src={img}
              //   key={index}
              //   className="aspect-[106/138] rounded-sm xl:aspect-[275/356] xl:rounded-[8px]"
              // />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 xl:gap-5">
          <Header
            type="h4"
            title={Datas.main.section5.planning.title}
            className="mt-6 text-yellow xl:mt-10"
          />
          <div className="flex flex-col gap-5">
            <Content content={Datas.main.section5.planning.content} />
            <ZoomableImageWithBlur alt="" src={Datas.main.section5.planning.img} />
            {/* <ImageWithBlur
              alt=""
              src={Datas.main.section5.planning.img}
              className="rounded-sm xl:rounded-[8px]"
            /> */}
          </div>
        </div>
        <div className="flex flex-col gap-3 xl:gap-5">
          <Header
            type="h4"
            title={Datas.main.section5.result.title}
            className="mt-6 text-yellow xl:mt-10"
          />
          <div className="flex flex-col gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <>
                <p
                  key={index}
                  className="text-14r text-gravel-100 xl:text-18r"
                  dangerouslySetInnerHTML={{
                    __html: Datas.main.section5.result.content[index],
                  }}
                />
                <ZoomableImageWithBlur
                  alt=""
                  src={Datas.main.section5.result.imgs[index]}
                  key={index}
                />
                {/* <ImageWithBlur
                  key={index}
                  alt=""
                  src={Datas.main.section5.result.imgs[index]}
                  className="rounded-sm xl:rounded-[8px]"
                /> */}
              </>
            ))}
          </div>
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew>
        <Header type="h3" title={Datas.main.section6.title} className="mt-10 xl:mt-0" />
        <div className="mt-6 flex flex-col gap-5 xl:mt-10 xl:gap-10">
          <Content content={Datas.main.section6.content} />
          {Datas.main.section6.subContent.map((subContent, index) => (
            <div key={index} className="flex flex-col gap-2 xl:gap-5">
              <Content content={subContent.title} className="text-14b text-gravel-25 xl:text-18b" />
              <ZoomableImageWithBlur alt="" src={subContent.img} />
              {/* <ImageWithBlur alt="" src={subContent.img} className="rounded-sm xl:rounded-[8px]" /> */}
            </div>
          ))}
        </div>
      </SectionWrapperNew>
    </div>
  );
}

export default VNG;
