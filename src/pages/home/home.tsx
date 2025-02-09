import { SectionWrapper } from "@/components/sections-wrapper";
import { DataHome } from "@/configs/datas/home";
import HomePageTitle from "./components/home-page-title";
import { cn } from "@/libs/utils";

function Home() {
  return (
    <div className="container space-y-6 pb-10 pt-5">
      <SectionWrapper>
        <div className="relative max-h-[326px] w-full max-w-[326px] rounded-[20px]">
          <img src="/home/images/mobi-hero.webp" alt="Hero Image" />
        </div>
        <h1 className="text-xl mt-6 font-bold text-gravel-25">{DataHome.person.name}</h1>
        <h2 className="text-sm mt-2 font-semibold text-gravel-300">{DataHome.person.position}</h2>
        <p className="text-d9 mt-4 text-gravel-100">{DataHome.person.description}</p>
        <div className="bg-gradient-2 text-base mt-6 grid h-[52px] place-items-center rounded-[12px] text-16s font-semibold lg:bg-none lg:text-32b">
          <p className="lg:text-gradient">My resume</p>
        </div>
      </SectionWrapper>

      <SectionWrapper divClassName="p-5 lg:p-7">
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
      {/* 
    <SectionWrapper>
        <HomePageTitle value="Tools I use" />
        <div className="mt-6 text-d9 text-sm">
            These are the tools I use to design, prototype, and collaborate effectively.
        </div>
        <div className="mt-4 flex items-center gap-x-4">
            <div className="size-[60px] bg-0f grid place-items-center rounded-[8px]">
                <Figma size={30} />
            </div>
            <div className="size-[60px] bg-0f grid place-items-center rounded-[8px]">
                <div className="relative w-8 h-[23.93px]">
                    <Image
                        fill
                        src="/home/icons/ps.svg"
                        alt="Photoshop"
                    />
                </div>
            </div>
            <div className="size-[60px] bg-0f grid place-items-center rounded-[8px]">
                <div className="relative w-8 h-[28.02px]">
                    <Image
                        fill
                        src="/home/icons/ai.svg"
                        alt="AI"
                    />
                </div>
            </div>
        </div>
    </SectionWrapper>

    <SectionWrapper>
        <HomePageTitle value="Contact me via" />
        <div className="mt-6 grid grid-cols-2 gap-3 flex-1">
            <Link
                to={siteConfig.contact.linkedin.href} target="_blank"
                className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0A66C2] h-[87px]"
            >
                <Image
                    src="/home/icons/li.svg"
                    alt="Linkedin"
                    width={24}
                    height={24}
                />
                <div className="text-sm font-semibold">Linkedin</div>
            </Link>
            <Link
                href={siteConfig.contact.email.href} target="_blank"
                className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#C71610] h-[87px]"
            >
                <Image
                    src="/home/icons/gm.svg"
                    alt="Email"
                    width={24}
                    height={24}
                />
                <div className="text-sm font-semibold">Email</div>
            </Link>
            <Link
                href={siteConfig.contact.behance.href} target="_blank"
                className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0057FF] h-[87px]"
            >
                <Image
                    src="/home/icons/be.svg"
                    alt="Behance"
                    width={24}
                    height={24}
                />
                <div className="text-sm font-semibold">Behance</div>
            </Link>
            <Link
                href={siteConfig.contact.dribble.href} target="_blank"
                className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#EA4C89] h-[87px]"
            >
                <Image
                    src="/home/icons/db.svg"
                    alt="Dribble"
                    width={24}
                    height={24}
                />
                <div className="text-sm font-semibold">Dribble</div>
            </Link>
        </div>
    </SectionWrapper> */}
    </div>
  );
}

export default Home;
