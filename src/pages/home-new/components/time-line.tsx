import ProjectCardNew from "@/components/project-card-new";
import { cn } from "@/libs/utils";

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
    active: boolean;
  }[];
  active: boolean;
}

const Timeline = (data: TimelineProps) => {
  return (
    <div className={cn("flex flex-col gap-6", "lg:gap-10")}>
      {/* Header */}
      <div className="flex items-center gap-5">
        <img
          alt=""
          src={
            data.active ? "/home-new/icons/timeline.svg" : "/home-new/icons/disable-timeline.svg"
          }
          className={cn("h-5 w-5", "lg:h-[60px] lg:w-[60px]")}
        />
        <div className="flex flex-col gap-1">
          <p className={cn("text-14s text-gravel-100", "lg:text-20s")}>
            {data.startDate} - {data.endDate}
          </p>
          <p className={cn("text-16b text-gravel-100", "lg:text-32b")}>
            {data.title}
            <span className="text-new-gradient"> {data.company}</span>
          </p>
        </div>
      </div>

      {/* Lines */}
      <div className={cn("flex flex-col gap-6")}>
        <div className="flex">
          <div
            className={cn(
              "ml-[10px] flex flex-col gap-6 border-l border-dashed border-gravel-600",
              "lg:ml-[30px] lg:gap-[60px]",
            )}
          >
            <div className={cn("flex flex-col gap-4", "lg:gap-5")}>
              {data.details.map((item, index) => (
                <div
                  key={index}
                  className={cn("ml-[29px] flex items-center gap-3", "lg:ml-[49px]")}
                >
                  <img
                    alt=""
                    src="/home-new/icons/target.png"
                    className={cn("aspect-square h-6 w-6 shrink-0 object-cover", "lg:h-8 lg:w-8")}
                  />
                  <p className={cn("text-14r text-gravel-50", "lg:text-18r")}>{item}</p>
                </div>
              ))}
            </div>
            <div className={cn("ml-[30px] flex flex-col gap-6", "lg:ml-[49px] lg:flex-row")}>
              {data.links.map((item, index) => (
                <div className="lg:max-h[275px] lg:max-w-[462px]" key={index}>
                  <ProjectCardNew item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
