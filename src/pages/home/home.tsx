import { SectionWrapper } from "@/components/sections-wrapper";
import { DataHome } from "@/configs/datas/home";
import HomePageTitle from "./components/home-page-title";
import { cn } from "@/libs/utils";
import { Link } from "react-router-dom";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import Corner from "./components/corner";

function Home() {
  const isLargeScreen = useResponsiveProps({ lg: true });
  return (
    <div className="pb-10 pt-5 flex flex-col gap-5 lg:gap-4">
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-7 justify-between">
        <div className="flex flex-1 ">
          <div className=" max-w-[613px] w-full">
            <SectionWrapper wrapperClassName=" w-full lg:rounded-tr-none lg:pr-0 h-fit " >
              <div className="relative  pl-[38px] pr-[37px] w-full max-w-[326px] rounded-[20px] bg-gradient h-full lg:max-w-[557px] lg:px-[40.5px]">
                <img src={DataHome.person.avatar} className="w-full aspect-[251/326] lg:aspect-[476/618]" alt="Hero Image" />
              </div>
              {
                !isLargeScreen && (
                  <>
                    <h1 className="text-20b lg:text-32b  mt-6 lg:mt-0 font-bold text-gravel-25">{DataHome.person.name}</h1>
                    <h2 className="text-14s lg:text-18s mt-2 font-semibold text-gravel-300">{DataHome.person.position}</h2>
                    <p className="text-14r lg:text-20r mt-4 text-gravel-100">{DataHome.person.description}</p>
                    <div className="bg-gradient-2 text-base mt-6 grid h-[52px] place-items-center rounded-[12px] text-16s font-semibold lg:bg-none lg:text-32b">
                      <p className="lg:text-gradient">My resume</p>
                    </div>
                  </>
                )
              }
            </SectionWrapper>

          </div>
          <div className={cn("flex flex-col justify-between gap-4", {
            'hidden': !isLargeScreen
          })}>
            <SectionWrapper wrapperClassName={cn("overflow-visible lg:rounded-tl-none lg:rounded-bl-none lg:bg-none lg:bg-block-bg lg:pl-0 relative")} divClassName="lg:rounded-tl-none lg:rounded-bl-none  lg:bg-none">
              <h1 className="text-20b lg:text-32b  mt-6 font-bold lg:mt-0 text-gravel-25">{DataHome.person.name}</h1>
              <h2 className="text-14s lg:text-18s mt-2 font-semibold text-gravel-300">{DataHome.person.position}</h2>
              <p className="text-14r lg:text-20r mt-4 text-gravel-100 max-w-[369px]">{DataHome.person.description}</p>
              <Corner />
            </SectionWrapper>
            <Link to={DataHome.resume.href} target="_blank">
              <SectionWrapper wrapperClassName="ml-4 h-[191px]" divClassName="h-[191px] flex flex-col items-center justify-center">
                <div className="bg-gradient-2 text-base  grid  place-items-center rounded-[12px] text-16s font-semibold lg:bg-none lg:text-32b">
                  <p className="lg:text-gradient">{DataHome.resume.text}</p>
                </div>
              </SectionWrapper>
            </Link>

          </div>
          {/* <SectionWrapper>
          <div className="relative h-[326px] pl-[38px] pr-[37px] w-full max-w-[326px] rounded-[20px] bg-gradient lg:h-[618px] lg:max-w-[557px] lg:px-[40.5px]">
            <img src={DataHome.person.avatar} className="w-full aspect-[251/326] lg:aspect-[476/618]" alt="Hero Image" />
          </div>
          <h1 className="text-xl mt-6 font-bold text-gravel-25">{DataHome.person.name}</h1>
          <h2 className="text-sm mt-2 font-semibold text-gravel-300">{DataHome.person.position}</h2>
          <p className="text-d9 mt-4 text-gravel-100">{DataHome.person.description}</p>
          <div className="bg-gradient-2 text-base mt-6 grid h-[52px] place-items-center rounded-[12px] text-16s font-semibold lg:bg-none lg:text-32b">
            <p className="lg:text-gradient">My resume</p>
          </div>
        </SectionWrapper> */}

        </div>

        <SectionWrapper wrapperClassName="h-fit">
          <HomePageTitle value={DataHome.experience.name} />
          <div className="mt-6 flex flex-col justify-between gap-y-3">
            {DataHome.experience.data.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-1 items-center justify-between gap-x-5 rounded-xl border-b border-dashed border-gravel-800 bg-gravel-800 p-3 lg:gap-x-6 lg:p-4",
                )}
              >
                <div className="relative size-[41px] shrink-0 grow-0 lg:size-[65px]">
                  <img src={item.icon} alt="Company Logo" />
                </div>
                <div className="text-xs flex flex-1 flex-col justify-between gap-2">
                  <div className="flex justify-between gap-x-2 text-12s text-gravel-25 lg:text-20s">
                    {item.name.includes("-") ? (
                      <div className="flex gap-1 lg:gap-[15px]">
                        {item.name.split(" - ").map((name, index) => (
                          <p key={index} className={cn({ ["text-gravel-300"]: index === 1 })}>
                            {name}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p>{item.name}</p>
                    )}
                    <p className="lg:text-18m">{item.role}</p>
                  </div>
                  <div className="text-12n lg:text-16n mt-auto flex justify-between gap-x-2 text-gravel-300">
                    <div>{item.date}</div>
                    {!!item.mode && <div className="">{item.mode}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-4 flex-1">
        <SectionWrapper wrapperClassName="h-fit">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-7">
            <div className="flex flex-col gap-6 lg:gap-[6px]">
              <HomePageTitle value={DataHome.toolIUse.text} />
              <div className=" text-gravel-100 text-14m lg:text-20m max-w-[343px]">
                {DataHome.toolIUse.content}
              </div>
            </div>
            <div className=" flex items-center gap-x-4 lg:gap-x-3">
              <div className="size-[60px] lg:size-[174px] lg:rounded-[10.5px] bg-background grid place-items-center rounded-[8px]">
                <img
                  src={DataHome.toolIUse.icon.figma}
                  alt="Figma"
                />
                {/* <Figma size={30} /> */}
              </div>
              <div className=" flex items-center gap-x-4 lg:flex-col gap-y-3">
                <div className="size-[60px] lg:size-[81px]  bg-background  lg:rounded-[10.5px] bg-0f grid place-items-center rounded-[8px]">
                  <div className="relative w-8 h-[23.93px]">
                    <img
                      src={DataHome.toolIUse.icon.ps}
                      alt="Photoshop"
                    />
                  </div>
                </div>
                <div className="size-[60px] bg-background lg:size-[81px] lg:rounded-[10.5px] grid place-items-center rounded-[8px]">
                  <div className="relative w-8 h-[28.02px]">
                    <img
                      src={DataHome.toolIUse.icon.ai}
                      alt="AI"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper wrapperClassName="h-fit lg:max-w-[950px] w-full">
          <HomePageTitle value={DataHome.contact.text} />
          <div className="mt-6 lg:mt-7 grid grid-cols-2 gap-4 flex-1 lg:flex  lg:items-center lg:gap-[14.6px]">
            {DataHome.contact.socials.map((item, index) => (
              <Link
                to={item.href} target="_blank"
                className={cn('rounded-[12px] py-[17px] w-full lg:rounded-[14.6px] bg-gravel-800 flex flex-col justify-center items-center gap-2 transition-colors  ',
                  {
                    'hover:bg-likedin': item.name === 'LinkedIn',
                    'hover:bg-gmail': item.name === 'Email',
                    'hover:bg-behance': item.name === 'Behance',
                    'hover:bg-dribbble': item.name === 'Dribbble',
                  }
                )}
                key={index}
              >
                <img
                  src={item.icon}
                  alt="Linkedin"
                  className="size-6 lg:size-[30px]"
                />
                <div className="text-14m lg:text-18m text-gravel-25 ">{item.name}</div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </div>

    </div>
  );
}

export default Home;
