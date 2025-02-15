import { SectionWrapper } from "@/components/sections-wrapper";
import Title from "@/components/title";
import { AboutMe as Datas } from "@/configs/datas/about-me";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";
function AboutMe() {
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <main className="container mx-auto flex flex-col gap-5 3xl:gap-3">
      <div className="flex flex-col gap-5 xl:flex-row xl:gap-3 3xl:gap-5">
        <SectionWrapper
          wrapperClassName={cn(
            "relative w-full overflow-visible  xl:rounded-[28px] rounded-[20px] xl:max-w-[600px] 3xl:max-w-[1064px] h-fit",
          )}
          divClassName="flex flex-col gap-6 px-[15px] py-[19px] xl:p-[15px] xl:rounded-[28px] 3xl:p-[27px] height-fit"
        >
          <Title value="More about me" className="text-20b 3xl:text-32b" />
          <div className="flex flex-col gap-4 3xl:mb-[70px]">
            {Datas.content.map((item, index) => (
              <p key={index} className="text-14r text-gravel-100 xl:text-16r 3xl:text-20r">
                {item}
              </p>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper
          wrapperClassName={cn(
            "relative w-full overflow-visible  xl:rounded-[28px] rounded-[20px] xl:max-w-[488px] 3xl:max-w-[576px] h-full",
          )}
          divClassName="flex flex-col  px-4 py-5 xl:p-[19px] 3xl:p-[27px] h-full xl:rounded-[28px]"
        >
          <Title value="Education" className="text-20b 3xl:text-32b" />
          <div className="flex flex-col gap-4 3xl:gap-3">
            <img
              src={Datas.education.image}
              alt="graduation"
              className="my-6 aspect-[326/189] xl:mb-auto xl:mt-7 xl:aspect-[448/258] 3xl:aspect-[520/300]"
            />
            <div className="flex flex-row gap-2">
              {Datas.education.university.split(" - ").map((item, index) => (
                <p
                  key={index}
                  className={cn(
                    "3xl:text-28b text-20b text-gravel-100 xl:text-18b",
                    index === 0 ? "text-gravel-25" : "text-gravel-300",
                  )}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-row gap-[20px] xl:gap-3 3xl:gap-6">
              <div className="flex flex-row items-center gap-3 xl:gap-2 3xl:gap-[14px]">
                <img src="/public/about/bc.svg" alt="" className="xl:w-5 3xl:w-6" />
                <p className="text-14m text-gravel-100 3xl:text-20m">{Datas.education.major}</p>
              </div>
              <div className="w-[0.5px] bg-gravel-800" />
              <div className="flex flex-row items-center gap-3 xl:gap-2 3xl:gap-[14px]">
                <img src="/public/about/h.svg" alt="" className="xl:w-5 3xl:w-6" />
                <p className="text-14m text-gravel-100 3xl:text-20m">{Datas.education.year}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row xl:gap-3 3xl:gap-5">
        <SectionWrapper
          wrapperClassName={cn(
            "relative w-full overflow-visible  xl:rounded-[28px] rounded-[20px] xl:max-w-[450px] 3xl:max-w-[600px] h-full",
          )}
          divClassName="flex flex-col  px-4 py-5 xl:p-7 gap-6  h-full xl:rounded-[28px]"
        >
          <Title value="Skills" className="text-20b xl:text-32b" />
          <div className="flex flex-row flex-wrap gap-3">
            {Datas.skills.map((item, index) => {
              if (!isLargeScreen && index === 4) return null;
              return (
                <p
                  key={index}
                  className="bg-gradient-2 rounded-[40px] px-4 py-2 text-12m text-gravel-900 xl:rounded-[60px] xl:px-4 xl:py-2 3xl:px-5 3xl:py-4 3xl:text-20m"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </SectionWrapper>
        <SectionWrapper
          wrapperClassName={cn(
            "relative w-full overflow-visible  xl:rounded-[28px] rounded-[20px] 3xl:max-w-[1040px] h-full",
          )}
          divClassName="flex flex-col  px-4 py-5 xl:p-7 gap-6 h-full xl:rounded-[28px] "
        >
          <Title value="Project area" className="text-20b xl:text-32b" />
          <div className="flex flex-col gap-3">
            {Datas.projectArea.map((item, index) => (
              <div key={index} className="flex-rows flex justify-between">
                <div className="flex flex-col justify-end gap-1 xl:flex-row xl:gap-2">
                  <p className="text-14s text-gravel-25 xl:text-12s 3xl:text-20s">{item.name}</p>
                  <p className="text-12r text-gravel-500 3xl:text-20r">{item.position}</p>
                </div>
                <div className="flex flex-col items-end gap-1 xl:flex-row xl:gap-2">
                  {!isLargeScreen ? (
                    <>
                      <p className="text-14m text-gravel-25">{item.nameApp}</p>
                      <p className="text-12r text-gravel-500">{item.typeApp}</p>
                    </>
                  ) : (
                    <p className="text-12r text-gravel-25 3xl:text-20r">{item.pcText}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
}

export default AboutMe;
