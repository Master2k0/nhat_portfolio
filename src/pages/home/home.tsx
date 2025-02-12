import { SectionWrapper } from "@/components/sections-wrapper";
import { DataHome } from "@/configs/datas/home";
import HomePageTitle from "./components/home-page-title";
import { cn } from "@/libs/utils";
import { Link } from "react-router-dom";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import Corner from "./components/corner";

function Home() {
  const isLargeScreen = useResponsiveProps({ xl: true });
  console.log(isLargeScreen);
  return (
    <div className="flex w-full flex-col gap-5 3xl:gap-4">
      <div className="flex flex-col justify-between gap-5 xl:flex-row xl:gap-3 3xl:gap-5">
        <div className="flex">
          <div className="w-full xl:max-w-[432px] 3xl:max-w-[613px]">
            <SectionWrapper
              wrapperClassName=" w-full xl:rounded-tr-none xl:h-[450px] 3xl:h-auto xl:pr-0 3xl:rounded-tr-none 3xl:pr-0 h-fit "
              divClassName="xl:p-[18px] xl:h-[450px] 3xl:h-auto md:flex gap-3"
            >
              <div className="bg-gradient relative mx-auto h-full w-full max-w-[326px] shrink-0 rounded-[20px] pl-[38px] pr-[37px] xl:max-w-[396px] xl:px-[43.5px] 3xl:max-w-[557px] 3xl:px-[40.5px]">
                <img
                  src={DataHome.person.avatar}
                  className="aspect-[251/326] w-full xl:aspect-[308/400] 3xl:aspect-[476/618]"
                  alt="Hero Image"
                />
              </div>
              {!isLargeScreen && (
                <div className="md:flex md:flex-col md:gap-4">
                  <h1 className="mt-6 text-20b font-bold text-gravel-25 3xl:mt-0 3xl:text-32b">
                    {DataHome.person.name}
                  </h1>
                  <h2 className="mt-2 text-14s font-semibold text-gravel-300 3xl:text-18s">
                    {DataHome.person.position}
                  </h2>
                  <p className="mt-4 text-14r text-gravel-100 3xl:text-20r">
                    {DataHome.person.description}
                  </p>
                  <div className="bg-gradient-2 text-base mt-6 grid h-[52px] place-items-center rounded-[12px] text-16s font-semibold 3xl:bg-none 3xl:text-32b">
                    <p className="3xl:text-gradient">My resume</p>
                  </div>
                </div>
              )}
            </SectionWrapper>
          </div>
          <div
            className={cn("flex flex-col gap-4 xl:gap-3 3xl:gap-4", {
              hidden: !isLargeScreen,
            })}
          >
            <SectionWrapper
              wrapperClassName={cn(
                "overflow-visible xl:rounded-tl-none xl:rounded-bl-none xl:max-w-[276px] 3xl:rounded-tl-none 3xl:rounded-bl-none 3xl:max-w-[425px]  xl:bg-none xl:bg-block-bg xl:pl-0 3xl:pl-0 relative",
              )}
              divClassName="xl:rounded-tl-none xl:rounded-bl-none  xl:bg-none xl:p-[19px] 3xl:px-[27px] 3xl:rounded-tl-none 3xl:rounded-bl-none"
            >
              <h1 className="mt-6 text-20b font-bold text-gravel-25 xl:mt-0 3xl:text-32b">
                {DataHome.person.name}
              </h1>
              <h2 className="mt-2 text-14s font-semibold text-gravel-300 3xl:text-18s">
                {DataHome.person.position}
              </h2>
              <p className="mt-4 w-full max-w-[369px] text-14r text-gravel-100 xl:mb-[38px] xl:text-12r 3xl:mb-0 3xl:mt-6 3xl:text-20r">
                {DataHome.person.description}
              </p>
              <Corner />
            </SectionWrapper>
            <Link to={DataHome.resume.href} target="_blank">
              <SectionWrapper
                wrapperClassName="ml-4  xl:h-[126px] 3xl:h-[191px]"
                divClassName=" xl:h-[126px] 3xl:h-[191px] flex flex-col items-center justify-center"
              >
                <div className="bg-gradient-2 text-base grid place-items-center rounded-[12px] text-16s font-semibold xl:bg-none xl:text-20b 3xl:text-32b">
                  <p className="xl:text-gradient">{DataHome.resume.text}</p>
                </div>
              </SectionWrapper>
            </Link>
          </div>
        </div>

        <SectionWrapper
          wrapperClassName="xl:max-w-[380px] 3xl:h-[674px] 3xl:max-w-[600px] w-full h-fit"
          divClassName="3xl:h-[672px]"
        >
          <HomePageTitle value={DataHome.experience.name} />
          <div className="mt-6 flex flex-col justify-between gap-y-3 xl:gap-y-[6.5px] 3xl:mt-7">
            {DataHome.experience.data.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-1 items-center justify-between gap-x-5 rounded-xl border-b border-dashed border-gravel-800 bg-gravel-800 p-3 3xl:gap-x-6 3xl:p-4",
                )}
              >
                <div className="relative size-[41px] shrink-0 grow-0 3xl:size-[65px]">
                  <img src={item.icon} alt="Company Logo" />
                </div>
                <div className="text-xs flex flex-1 flex-col justify-between gap-2 xl:gap-1">
                  <div className="flex justify-between gap-x-2 text-12s text-gravel-25 3xl:text-20s">
                    {item.name.includes("-") ? (
                      <div className="flex gap-1 3xl:gap-[15px]">
                        {item.name.split(" - ").map((name, index) => (
                          <p key={index} className={cn({ ["text-gravel-300"]: index === 1 })}>
                            {name}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p>{item.name}</p>
                    )}
                    <p className="3xl:text-18m">{item.role}</p>
                  </div>
                  <div className="mt-auto flex justify-between gap-x-2 text-12r text-gravel-300 xl:text-10r 3xl:text-16r">
                    <div>{item.date}</div>
                    {!!item.mode && <div className="">{item.mode}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <div className="flex flex-1 flex-col gap-5 xl:flex-row xl:gap-3 3xl:gap-4">
        <SectionWrapper wrapperClassName="h-fit" divClassName={"xl:py-[18px] 3xl:py-7"}>
          <div className="flex flex-col gap-4 xl:flex-row 3xl:gap-7">
            <div className="flex flex-col gap-6 xl:gap-4 3xl:gap-[6px]">
              <HomePageTitle value={DataHome.toolIUse.text} />
              <div className="text-14r text-gravel-100 xl:max-w-[194px] xl:text-12r 3xl:max-w-[343px] 3xl:text-20r">
                {DataHome.toolIUse.content}
              </div>
            </div>
            <div className="flex items-center gap-x-4 3xl:gap-x-3">
              <div className="grid size-[60px] place-items-center rounded-[8px] bg-background xl:size-[138px] 3xl:size-[174px] 3xl:rounded-[10.5px]">
                <img
                  src={DataHome.toolIUse.icon.figma}
                  alt="Figma"
                  className="xl:aspect-54/78 aspect-70/100 xl:w-[54px] 3xl:w-[70px]"
                />
                {/* <Figma size={30} /> */}
              </div>
              <div className="flex items-center gap-x-4 gap-y-3 xl:flex-col">
                <div className="bg-0f grid size-[60px] place-items-center rounded-[8px] bg-background xl:size-[65px] 3xl:size-[81px] 3xl:rounded-[10.5px]">
                  <div className="relative h-[23.93px] w-8">
                    <img src={DataHome.toolIUse.icon.ps} alt="Photoshop" />
                  </div>
                </div>
                <div className="grid size-[60px] place-items-center rounded-[8px] bg-background xl:size-[65px] 3xl:size-[81px] 3xl:rounded-[10.5px]">
                  <div className="relative h-[28.02px] w-8">
                    <img src={DataHome.toolIUse.icon.ai} alt="AI" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper wrapperClassName="h-fit xl:max-w-[623px] 3xl:max-w-[950px] w-full">
          <HomePageTitle value={DataHome.contact.text} />
          <div className="mt-6 grid flex-1 grid-cols-2 gap-4 xl:mt-4 xl:flex xl:items-center 3xl:mt-7 3xl:gap-[14.6px]">
            {DataHome.contact.socials.map((item, index) => (
              <Link
                to={item.href}
                target="_blank"
                className={cn(
                  "flex w-full flex-col items-center justify-center gap-2 rounded-[12px] bg-gravel-800 py-[17px] transition-colors xl:py-[19.5px] 3xl:rounded-[14.6px] 3xl:py-[17px]",
                  {
                    "hover:bg-likedin": item.name === "LinkedIn",
                    "hover:bg-gmail": item.name === "Email",
                    "hover:bg-behance": item.name === "Behance",
                    "hover:bg-dribbble": item.name === "Dribbble",
                  },
                )}
                key={index}
              >
                <img src={item.icon} alt="Linkedin" className="size-6 3xl:size-[30px]" />
                <div className="text-14m text-gravel-25 3xl:text-18m">{item.name}</div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}

export default Home;
