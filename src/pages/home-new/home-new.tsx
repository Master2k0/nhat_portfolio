import ProjectCardNew from "@/components/project-card-new";
import { DataHomeV3 } from "@/configs/datas/home-new";
import { cn } from "@/libs/utils";
function HomeNew() {
  return (
    <>
      <title>Home</title>
      <meta name="Home" content="Home JamesDes" />
      <div className="">
        {/* Banner */}
        <div className={cn("bg-block-bg px-4 py-5", "lg:pb-0 lg:pt-20")}>
          <div
            className={cn(
              "flex flex-col gap-5",
              "lg:mx-auto lg:max-w-[1040px] lg:flex-row-reverse lg:items-center",
            )}
          >
            <img
              src={DataHomeV3.banner.img}
              className={cn("w-full", "lg:aspect-[1/1] lg:min-w-0 lg:max-w-[740px] lg:flex-1")}
            />
            <div className={cn("flex flex-col gap-5", "lg:w-[468px] lg:gap-6")}>
              <div className="flex flex-col gap-1">
                <p className={cn("text-32b text-gravel-25", "lg:text-60b")}>
                  {DataHomeV3.banner.name}
                </p>
                <p className={cn("text-20b", "text-yellow lg:text-32b")}>
                  {DataHomeV3.banner.position}
                </p>
              </div>
              <p className={cn("pb-5 text-14r text-gravel-100", "xl:text-18r")}>
                {DataHomeV3.banner.description}
              </p>
            </div>
          </div>
        </div>
        {/* Section */}
        {
          <div
            className={cn(
              "mt-8 grid grid-cols-1 gap-8 px-4",
              "xl:mx-auto xl:mt-[100px] xl:max-w-[1092px] xl:grid-cols-2 xl:gap-[60px] xl:px-0",
            )}
          >
            {DataHomeV3.projects.map((item) => (
              <ProjectCardNew item={item} key={item.href} />
            ))}
          </div>
        }
      </div>
      ;
    </>
  );
}

export default HomeNew;
