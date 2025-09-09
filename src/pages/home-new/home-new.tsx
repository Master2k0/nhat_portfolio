import { DataHome } from "@/configs/datas/home-new";
import { cn } from "@/libs/utils";
import Timeline from "./components/time-line";
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

            <img src={DataHome.banner.img} className={
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
                )}>{DataHome.banner.name}</p>
                <p className={
                  cn(
                    "text-20b text-new-gradient",
                    "lg:text-32b"
                  )
                }>{DataHome.banner.position}</p>
              </div>
              <p className={cn(
                "text-14r text-gravel-100 pb-5",
                "text-18r"
              )}>
                {DataHome.banner.description}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={cn(
          "flex flex-col gap-[60px] mt-10 px-4",
          "lg:mt-[100px] lg:max-w-[1040px] lg:mx-auto lg:px-0 lg:gap-[100px]"
        )}>
          {
            DataHome.timeline.map((item, index) => (
              <Timeline key={index} {...item} />
            ))
          }
        </div>
      </div >;
    </>
  )
}

export default HomeNew;