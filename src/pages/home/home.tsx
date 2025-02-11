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
    <div className=" flex flex-col gap-5 3xl:gap-4">
      <div className="flex flex-col gap-5 lg:gap-3 lg:flex-row 3xl:gap-5 justify-between">
        <div className="flex ">
          <div className="lg:max-w-[432px] 3xl:max-w-[613px] w-full">
            <SectionWrapper wrapperClassName=" w-full lg:rounded-tr-none lg:h-[450px] 3xl:h-auto lg:pr-0 3xl:rounded-tr-none 3xl:pr-0 h-fit " divClassName="lg:p-[18px] lg:h-[450px] 3xl:h-auto" >
              <div className="relative  pl-[38px] pr-[37px] w-full max-w-[326px] rounded-[20px] lg:max-w-[396px] lg:px-[43.5px] bg-gradient h-full 3xl:max-w-[557px] 3xl:px-[40.5px]">
                <img src={DataHome.person.avatar} className="w-full aspect-[251/326] lg:aspect-[308/400] 3xl:aspect-[476/618]" alt="Hero Image" />
              </div>
              {
                !isLargeScreen && (
                  <>
                    <h1 className="text-20b 3xl:text-32b  mt-6 3xl:mt-0 font-bold text-gravel-25">{DataHome.person.name}</h1>
                    <h2 className="text-14s 3xl:text-18s mt-2 font-semibold text-gravel-300">{DataHome.person.position}</h2>
                    <p className="text-14r 3xl:text-20r mt-4 text-gravel-100">{DataHome.person.description}</p>
                    <div className="bg-gradient-2 text-base mt-6 grid h-[52px] place-items-center rounded-[12px] text-16s font-semibold 3xl:bg-none 3xl:text-32b">
                      <p className="3xl:text-gradient">My resume</p>
                    </div>
                  </>
                )
              }
            </SectionWrapper>

          </div>
          <div className={cn("flex flex-col  gap-4 lg:gap-3 3xl:gap-4", {
            'hidden': !isLargeScreen
          })}>
            <SectionWrapper wrapperClassName={cn("overflow-visible lg:rounded-tl-none lg:rounded-bl-none lg:max-w-[276px] 3xl:rounded-tl-none 3xl:rounded-bl-none 3xl:max-w-[425px]  lg:bg-none lg:bg-block-bg lg:pl-0 3xl:pl-0 relative")} divClassName="lg:rounded-tl-none lg:rounded-bl-none  lg:bg-none lg:p-[19px] 3xl:px-[27px] 3xl:rounded-tl-none 3xl:rounded-bl-none">
              <h1 className="text-20b 3xl:text-32b  mt-6 font-bold lg:mt-0 text-gravel-25">{DataHome.person.name}</h1>
              <h2 className="text-14s 3xl:text-18s mt-2 font-semibold text-gravel-300">{DataHome.person.position}</h2>
              <p className="text-14r lg:text-12r 3xl:text-20r mt-4 lg:mb-[38px] 3xl:mb-0 3xl:mt-6 text-gravel-100 max-w-[369px] w-full">{DataHome.person.description}</p>
              <Corner />
            </SectionWrapper>
            <Link to={DataHome.resume.href} target="_blank">
              <SectionWrapper wrapperClassName="ml-4  lg:h-[126px] 3xl:h-[191px]" divClassName=" lg:h-[126px] 3xl:h-[191px] flex flex-col items-center justify-center">
                <div className="bg-gradient-2 text-base  grid  place-items-center rounded-[12px] text-16s font-semibold lg:bg-none lg:text-20b 3xl:text-32b">
                  <p className="lg:text-gradient">{DataHome.resume.text}</p>
                </div>
              </SectionWrapper>
            </Link>

          </div>
        </div>

        <SectionWrapper wrapperClassName="lg:max-w-[380px] 3xl:h-[674px] 3xl:max-w-[600px] w-full h-fit" divClassName="3xl:h-[672px]">
          <HomePageTitle value={DataHome.experience.name} />
          <div className="mt-6 3xl:mt-7 flex flex-col justify-between gap-y-3 lg:gap-y-[6.5px]">
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
                <div className="text-xs flex flex-1 flex-col justify-between gap-2 lg:gap-1">
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
                    <p className=" 3xl:text-18m">{item.role}</p>
                  </div>
                  <div className="text-12r lg:text-10r 3xl:text-16r mt-auto flex justify-between gap-x-2 text-gravel-300">
                    <div>{item.date}</div>
                    {!!item.mode && <div className="">{item.mode}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row 3xl:gap-4 flex-1">
        <SectionWrapper wrapperClassName="h-fit">
          <div className="flex flex-col gap-4 3xl:flex-row 3xl:gap-7">
            <div className="flex flex-col gap-6 3xl:gap-[6px]">
              <HomePageTitle value={DataHome.toolIUse.text} />
              <div className=" text-gravel-100 text-14m 3xl:text-20m max-w-[343px]">
                {DataHome.toolIUse.content}
              </div>
            </div>
            <div className=" flex items-center gap-x-4 3xl:gap-x-3">
              <div className="size-[60px] 3xl:size-[174px] 3xl:rounded-[10.5px] bg-background grid place-items-center rounded-[8px]">
                <img
                  src={DataHome.toolIUse.icon.figma}
                  alt="Figma"
                />
                {/* <Figma size={30} /> */}
              </div>
              <div className=" flex items-center gap-x-4 3xl:flex-col gap-y-3">
                <div className="size-[60px] 3xl:size-[81px]  bg-background  3xl:rounded-[10.5px] bg-0f grid place-items-center rounded-[8px]">
                  <div className="relative w-8 h-[23.93px]">
                    <img
                      src={DataHome.toolIUse.icon.ps}
                      alt="Photoshop"
                    />
                  </div>
                </div>
                <div className="size-[60px] bg-background 3xl:size-[81px] 3xl:rounded-[10.5px] grid place-items-center rounded-[8px]">
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

        <SectionWrapper wrapperClassName="h-fit 3xl:max-w-[950px] w-full">
          <HomePageTitle value={DataHome.contact.text} />
          <div className="mt-6 3xl:mt-7 grid grid-cols-2 gap-4 flex-1 3xl:flex  3xl:items-center 3xl:gap-[14.6px]">
            {DataHome.contact.socials.map((item, index) => (
              <Link
                to={item.href} target="_blank"
                className={cn('rounded-[12px] py-[17px] w-full 3xl:rounded-[14.6px] bg-gravel-800 flex flex-col justify-center items-center gap-2 transition-colors  ',
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
                  className="size-6 3xl:size-[30px]"
                />
                <div className="text-14m 3xl:text-18m text-gravel-25 ">{item.name}</div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </div>

    </div>
  );
}

export default Home;
