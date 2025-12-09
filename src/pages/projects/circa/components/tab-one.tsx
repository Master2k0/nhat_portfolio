import Content from "@/components/content";
import Divider from "@/components/divider";
import Header from "@/components/header";
import { SectionWrapper } from "@/components/sections-wrapper";
import { Circa as Datas } from "@/configs/datas/circa";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import Personas from "./personas";
import { cn } from "@/libs/utils";
import AppUIDesign from "./app-ui-design";
import WebUIDesgin from "./web-ui-design";

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
          {isLargeScreen ? (
            <Header title={Datas.consumerProduct.section1.pcTitle} />
          ) : (
            <>
              <p className="text-16s text-gravel-100">{Datas.consumerProduct.section1.mainTitle}</p>
              <Header title={Datas.consumerProduct.section1.subTitle} />
            </>
          )}

          <Content content={Datas.consumerProduct.section1.content} />
        </div>
        <img
          alt=""
          src={Datas.consumerProduct.section1.img}
          className="mt-6 w-full rounded-[8px] xl:rounded-[12px]"
        />
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="product-scope"
      >
        <div className="flex flex-col">
          <Header title={Datas.consumerProduct.section2.title} />
          <Divider />
          <div className="flex flex-col gap-8">
            {Datas.consumerProduct.section2.contents.map((content, index) => (
              <Content content={content} key={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="personas"
      >
        <div className="flex flex-col">
          <Header title={Datas.consumerProduct.section3.title} />
          <Divider />
          <Content className="mb-10" content={Datas.consumerProduct.section3.content} />
          <div className="flex flex-col gap-8">
            {Datas.consumerProduct.section3.users.map((user, index) => (
              <Personas
                name={user.name}
                LifestyleBehavior={user.LifestyleBehavior}
                NeedsPainPoints={user.NeedsPainPoints}
                icon={user.icon}
                info={user.info}
                position={user.position}
                key={index}
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
          <Header title={Datas.consumerProduct.section4.title} />
          <Divider />
          <p
            className="mb-10 text-14r text-gravel-100 xl:text-18r"
            dangerouslySetInnerHTML={{
              __html: Datas.consumerProduct.section4.content,
            }}
          />
          <div className="flex flex-col gap-6 xl:flex-row xl:gap-5">
            <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-gravel-600 p-3 xl:p-5">
              <p className="text-16s text-gravel-25 xl:text-20s">Occasional buyers:</p>
              <div className="flex flex-col gap-2 xl:gap-3">
                {Datas.consumerProduct.section4.OccasionalBuyers.map((item, index) => (
                  <div key={index} className="bg-pj-teal flex flex-col gap-3 rounded-xl p-3 xl:p-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gravel-800 text-14s xl:text-16s">
                      {index + 1}
                    </div>
                    <p className="text-14r text-gravel-100 xl:text-18r">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-gravel-600 p-3 xl:p-5">
              <p className="text-16s text-gravel-25 xl:text-20s">Frequent buyers:</p>
              <div className="flex flex-col gap-2 xl:gap-3">
                {Datas.consumerProduct.section4.FrequentBuyers.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-pj-eucalyptus flex flex-col gap-3 rounded-xl p-3 xl:p-5",
                      index === 3 && "xl:h-[219px]",
                    )}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gravel-800 text-14s xl:text-16s">
                      {index + 1}
                    </div>
                    <p className="text-14r text-gravel-100 xl:text-18r">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="info-architecture"
      >
        <div className="flex flex-col">
          <Header title={Datas.consumerProduct.section5.title} />
          <Divider />
          <Content className="mb-6" content={Datas.consumerProduct.section5.content} />
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-[15px]">
            {Datas.consumerProduct.section5.grid.map((item, index) => (
              <div
                className={cn(
                  "flex min-h-[288px] flex-col gap-3 rounded-xl p-3 xl:min-h-[328px] xl:p-4",
                  index % 2 === 0 ? "bg-pj-red" : "bg-pj-studio",
                )}
                key={index}
              >
                <p className="text-16s text-white xl:text-20s">{item.title}</p>
                <div className="border-dash-custom-white" />
                <div className="flex flex-col gap-2">
                  {item.list1.map((content, index) => (
                    <p key={index} className="text-12r text-gravel-100 xl:text-14r">
                      {content}
                    </p>
                  ))}
                </div>
                <div className="border-dash-custom-white" />
                <div className="flex flex-col gap-2">
                  {item.list2.map((content, index) => (
                    <p key={index} className="text-12r text-gravel-100 xl:text-14r">
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="wireframes-userflow"
      >
        <div className="flex flex-col">
          <Header title={Datas.consumerProduct.section6.title} />
          <Divider />
          <img
            src={Datas.consumerProduct.section6.img}
            alt={Datas.consumerProduct.section6.title}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="app-ui-design"
      >
        <div className="flex flex-col">
          <Header title={Datas.consumerProduct.section7.title} />
          <Divider />
          <Content className="mb-6" content={Datas.consumerProduct.section7.content} />
          <AppUIDesign />
        </div>
      </SectionWrapper>
      <SectionWrapper
        divClassName="xl:rounded-[8px] 3xl:rounded-[8px] xl:!p-[31px]"
        wrapperClassName="xl:rounded-[8px] 3xl:rounded-[8px]"
        id="web-ui-design"
      >
        <div className="flex flex-col">
          <Header title={Datas.consumerProduct.section8.title} />
          <Divider />
          <WebUIDesgin list={Datas.consumerProduct.section8.list} />
        </div>
      </SectionWrapper>
    </div>
  );
}

export default TabOne;
