import ProjectCardNew from "@/components/project-card-new";
import { DataHomeV3 } from "@/configs/datas/home-new";
import { cn } from "@/libs/utils";
import { Helmet } from "react-helmet";
function HomeNew() {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="">

        {/* Banner */}
        <div className={cn(
          " bg-block-bg px-4 py-5",
          "  lg:pt-20 lg:pb-0 "
        )}>
          <div className={cn(
            "flex flex-col gap-5",
            "lg:flex-row-reverse lg:items-center lg:mx-auto lg:max-w-[1040px]   "
          )}>

            <img src={DataHomeV3.banner.img} className={
              cn(
                "w-full",
                "lg:flex-1 lg:min-w-0 lg:max-w-[740px]  lg:aspect-[1/1]"
              )
            } />
            <div className={cn(
              "flex flex-col gap-5",
              "lg:gap-6 lg:w-[468px]"
            )} >
              <div className="flex flex-col gap-1">
                <p className={cn(
                  "text-32b text-gravel-25",
                  "lg:text-60b"
                )}>{DataHomeV3.banner.name}</p>
                <p className={
                  cn(
                    "text-20b text-new-gradient",
                    "lg:text-32b"
                  )
                }>{DataHomeV3.banner.position}</p>
              </div>
              <p className={cn(
                "text-14r text-gravel-100 pb-5",
                "text-18r"
              )}>
                {DataHomeV3.banner.description}
              </p>
            </div>
          </div>
        </div>
        {/* Section */}
        {
          <div className={
            cn(
              "grid grid-cols-1 gap-8 mt-8 px-4",
              "xl:grid-cols-2 xl:mt-[100px] xl:max-w-[1092px] xl:mx-auto xl:px-0 xl:gap-[60px]"
            )
          }>
            {
              DataHomeV3.projects.map((item) => (
                <ProjectCardNew item={item} key={item.href} />
              ))
            }
          </div>
        }
      </div >;
    </>
  )
}

export default HomeNew;