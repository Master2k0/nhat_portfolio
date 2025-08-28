import ProjectCardNew from "@/components/project-card-new";
import { cn } from "@/libs/utils";
import { Link } from "react-router-dom";

interface TimelineProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  details: string[];
  links: {
    img: string;
    href: string;
    title: string;
    content: string;
  }[]
  active: boolean;
}


const Timeline = (data: TimelineProps) => {
  return (
    <div className={cn(
      'flex flex-col gap-6',
      "lg:gap-10"
    )}>
      {/* Header */}
      <div className='flex gap-5 items-center '>
        <img alt=""
          src={data.active ? "/home-new/icons/timeline.svg" : "/home-new/icons/disable-timeline.svg"}
          className={cn("w-5 h-5", "lg:w-[60px] lg:h-[60px]")}
        />
        <div className="flex flex-col gap-1">
          <p className={cn(
            "text-gravel-100 text-14s",
            "lg:text-20s"
          )}>{data.startDate} - {data.endDate}</p>
          <p className={cn(
            "text-gravel-100 text-16b",
            "lg:text-32b"
          )}>{data.title}
            <span className="text-new-gradient"> {data.company}</span>
          </p>
        </div>
      </div>

      {/* Lines */}
      <div className={cn(
        "flex flex-col gap-6",
      )}>
        <div className="flex">
          <div className={cn(
            "border-l border-dashed border-gravel-600 ml-[10px] flex flex-col gap-6",
            "lg:ml-[30px] lg:gap-[60px]"
          )}>
            <div className={
              cn(
                "flex flex-col gap-4",
                "lg:gap-5"
              )
            }>
              {data.details.map((item, index) => (
                <div key={index} className={
                  cn(
                    "ml-[29px] flex gap-3 items-center",
                    "lg:ml-[49px]"
                  )
                }>
                  <img alt="" src="/home-new/icons/target.png" className={
                    cn(
                      "w-6 h-6 aspect-square shrink-0 object-cover",
                      "lg:w-8 lg:h-8"
                    )
                  } />
                  <p className={cn(
                    "text-gravel-50 text-14r",
                    "lg:text-18r"
                  )}>{item}</p>
                </div>
              ))}
            </div>
            <div className={cn(
              "flex flex-col gap-6 ml-[30px]",
              "lg:flex-row lg:ml-[49px]"
            )}>
              {data.links.map((item, index) => (
                <div className="lg:max-w-[462px] lg:max-h[275px]" key={index}>
                  <ProjectCardNew item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Timeline
