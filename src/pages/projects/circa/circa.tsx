import Content from "@/components/content";
import Divider from "@/components/divider";
import Header from "@/components/header";
import ImageWithBlur from "@/components/imageWithBlur";
import { SectionWrapperNew } from "@/components/section-wrapper-new";
import ZoomableImageWithBlur from "@/components/zoomable-image-with-blur";
import { CircaNew as Datas } from "@/configs/datas/circa-new";
import { cn } from "@/libs/utils";
import Personas from "./components/personas";

function Circa() {
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
            <Content content={Datas.main.section1.duration} />
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
        <div className={cn("flex flex-col gap-3", "xl:gap-5")}>
          <Header
            type="h4"
            title={Datas.main.section2.subContent[0].title}
            className="text-yellow"
          />
          <p
            className="text-14r text-gravel-100 xl:text-18r"
            dangerouslySetInnerHTML={{
              __html: Datas.main.section2.subContent[0].content[0],
            }}
          />
          <p className="xl:18b text-14m text-yellow">{Datas.main.section2.subContent[0].result}</p>
          <ZoomableImageWithBlur alt="" src={Datas.main.section2.subContent[0].img || ""} />
        </div>
        <div className={cn("flex flex-col gap-3", "xl:gap-5")}>
          <Header
            type="h4"
            title={Datas.main.section2.subContent[1].title}
            className="text-yellow"
          />
          <Content content={Datas.main.section2.subContent[1].mainContent!} />
          <ul>
            {Datas.main.section2.subContent[1].content.map((item, index) => (
              <li
                key={index}
                className={cn("list-ouside ml-6 list-disc text-14r text-gravel-100", "xl:text-18r")}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[12px] bg-orange p-3 xl:p-5">
          <p className="text-16b text-white xl:text-18b">Business goal:</p>
          <Content
            content={Datas.main.section2.subContent[1].result}
            className="mt-2 text-gravel-25"
          />
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
        <Header type="h3" title={Datas.main.section3.title} />
        {Datas.main.section3.subContent.map((subContent, index) => (
          <div key={index} className={cn("flex flex-col gap-3", "xl:gap-5")}>
            <Header type="h4" title={subContent.title} className="text-yellow" />
            {subContent.content.map((content, contentIndex) => (
              <p
                key={contentIndex}
                className="text-14r text-gravel-100 xl:text-18r"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            ))}
          </div>
        ))}
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
        <Header type="h3" title={Datas.main.section4.title} />
        <div className="flex flex-col gap-5">
          <p
            className="text-14r text-gravel-100 xl:text-18r"
            dangerouslySetInnerHTML={{
              __html: Datas.main.section4.content,
            }}
          />
          <div className="flex flex-col gap-3 xl:gap-5">
            <Content content={Datas.main.section4.content2} />
            <ul className="flex flex-col gap-3 xl:gap-5">
              {Datas.main.section4.subContent2.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "list-ouside ml-6 list-disc text-14r text-gravel-100",
                    "xl:text-18r",
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
            <Content className="pl-6" content={Datas.main.section4.content3} />
          </div>
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
        <Header type="h3" title={Datas.main.section5.title} />
        <div className="flex flex-col gap-5">
          {Datas.main.section5.content.map((subContent, index) => (
            <Content key={index} content={subContent} />
          ))}
        </div>
        <Personas
          icon={Datas.main.section5.persona.icon}
          name={Datas.main.section5.persona.name}
          info={Datas.main.section5.persona.info}
          position={Datas.main.section5.persona.position}
          LifestyleBehavior={Datas.main.section5.persona.LifestyleBehavior}
          NeedsPainPoints={Datas.main.section5.persona.NeedsPainPoints}
        />
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
        <Header type="h3" title={Datas.main.section6.title} />
        <div className="flex flex-col gap-5 xl:gap-10">
          <Content content={Datas.main.section6.content} />
          <ZoomableImageWithBlur
            alt=""
            src={Datas.main.section6.img || ""}
            wrapperClassName="rounded-none xl:rounded-none"
            imgClassName="rounded-none xl:rounded-none"
            imgOpenClassName="rounded-none xl:rounded-none"
          />
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
        <Header type="h3" title={Datas.main.section7.title} />
        <Content content={Datas.main.section7.content} />
        <div className="flex flex-col gap-3 xl:gap-5">
          <div className="rounded-[8px] bg-gravel-600 p-3 xl:rounded-xl xl:p-5">
            <Content
              content={Datas.main.section7.listImages[0].title}
              className="text-14s text-gravel-100 xl:text-18s"
            />
          </div>
          <div className="flex w-full gap-2 overflow-scroll xl:gap-[28.5px]">
            {Datas.main.section7.listImages[0].imgs.map((img, index) => (
              <ZoomableImageWithBlur
                imgClassName="w-[175px] aspect-[175/379] xl:w-[160px] xl:aspect-auto"
                wrapperClassName="w-[175px] shrink-0 grow xl:w-[150px] xl:aspect-auto xl:shrink"
                key={index}
                alt=""
                src={img}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 xl:max-w-[507px] xl:gap-5">
          <div className="rounded-[8px] bg-gravel-600 p-3 xl:rounded-xl xl:p-5">
            <Content
              content={Datas.main.section7.listImages[1].title}
              className="text-14s text-gravel-100 xl:text-18s"
            />
          </div>
          <div className="flex w-full gap-2 overflow-scroll xl:gap-[28.5px]">
            {Datas.main.section7.listImages[1].imgs.map((img, index) => (
              <ZoomableImageWithBlur
                imgClassName="w-[175px] aspect-[175/379] xl:w-[160px] xl:aspect-auto"
                wrapperClassName="w-[175px] shrink-0 grow xl:w-[150px] xl:aspect-auto xl:shrink"
                key={index}
                alt=""
                src={img}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 xl:flex-row xl:gap-10">
          <div className="flex flex-col gap-3 xl:max-w-[507px] xl:gap-5">
            <div className="rounded-[8px] bg-gravel-600 p-3 xl:rounded-xl xl:p-5">
              <Content
                content={Datas.main.section7.listImages[2].title}
                className="text-14s text-gravel-100 xl:text-18s"
              />
            </div>
            <div className="flex w-full gap-2 overflow-scroll xl:gap-[28.5px]">
              {Datas.main.section7.listImages[2].imgs.map((img, index) => (
                <ZoomableImageWithBlur
                  imgClassName="w-[175px] aspect-[175/379] xl:w-[160px] xl:aspect-auto"
                  wrapperClassName="w-[175px] shrink-0 grow xl:w-[150px] xl:aspect-auto xl:shrink"
                  key={index}
                  alt=""
                  src={img}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:max-w-[507px] xl:gap-5">
            <div className="rounded-[8px] bg-gravel-600 p-3 xl:rounded-xl xl:p-5">
              <Content
                content={Datas.main.section7.listImages[3].title}
                className="text-14s text-gravel-100 xl:text-18s"
              />
            </div>
            <div className="flex w-full gap-2 overflow-scroll xl:gap-[28.5px]">
              {Datas.main.section7.listImages[3].imgs.map((img, index) => (
                <ZoomableImageWithBlur
                  imgClassName="w-[175px] aspect-[175/379] xl:w-[160px] xl:aspect-auto"
                  wrapperClassName="w-[175px] shrink-0 grow xl:w-[150px] xl:aspect-auto xl:shrink"
                  key={index}
                  alt=""
                  src={img}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex max-w-[714px] flex-col gap-3 xl:gap-5">
          <div className="rounded-[8px] bg-gravel-600 p-3 xl:rounded-xl xl:p-5">
            <Content
              content={Datas.main.section7.listImages[4].title}
              className="text-14s text-gravel-100 xl:text-18s"
            />
          </div>
          <div className="flex w-full gap-2 overflow-scroll xl:gap-[38px]">
            {Datas.main.section7.listImages[4].imgs.map((img, index) => (
              <ZoomableImageWithBlur
                imgClassName="w-[175px] aspect-[175/379] xl:w-[160px] xl:aspect-auto"
                wrapperClassName="w-[175px] shrink-0 grow xl:w-[150px] xl:aspect-auto xl:shrink"
                key={index}
                alt=""
                src={img}
              />
            ))}
          </div>
        </div>

        <div className="flex max-w-[526px] flex-col gap-3 xl:gap-5">
          <div className="rounded-[8px] bg-gravel-600 p-3 xl:rounded-xl xl:p-5">
            <Content
              content={Datas.main.section7.listImages[5].title}
              className="text-14s text-gravel-100 xl:text-18s"
            />
          </div>
          <div className="flex w-full gap-2 overflow-scroll xl:gap-[38px]">
            {Datas.main.section7.listImages[5].imgs.map((img, index) => (
              <ZoomableImageWithBlur
                imgClassName="w-[175px] aspect-[175/379] xl:w-[160px] xl:aspect-auto"
                wrapperClassName="w-[175px] shrink-0 grow xl:w-[150px] xl:aspect-auto xl:shrink"
                key={index}
                alt=""
                src={img}
              />
            ))}
          </div>
        </div>
      </SectionWrapperNew>
      <SectionWrapperNew
        divClassName={cn("flex flex-col gap-6 mb-10", "xl:flex xl:gap-10 xl:mb-0")}
      >
        <Header type="h3" title={Datas.main.section8.title} />
        <Content content={Datas.main.section8.content} />
        {Datas.main.section8.listImages.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 xl:gap-5">
            <p className="text-14s text-gravel-25 xl:text-18s">{item.title}</p>
            <ZoomableImageWithBlur alt="" src={item.img || ""} />
          </div>
        ))}
      </SectionWrapperNew>
    </div>
  );
}

export default Circa;
