import { cn } from "@/libs/utils";
import { Link } from "react-router-dom";

interface ProjectCardNewProps {
  item: {
    img: string;
    href: string;
    title: string;
    content: string;
  }
}


const ProjectCardNew = ({ item }: ProjectCardNewProps) => {
  return (
    <Link
      to={item.href}
      className={cn(
        "flex flex-col gap-3 ",
      )}
    >
      <div className={cn(
        "relative rounded-[8px] image-border w-fit",
        "lg:rounded-[12px]"
      )}>
        {!item.href &&
          <div className="absolute top-[1px] left-[1px]  w-[calc(100%-2px)] h-[calc(100%-2px)] bg-black bg-opacity-80 z-10 grid place-items-center text-14s text-gravel-300 lg:text-20s rounded-[8px] lg:rounded-[12px]">
            COMMING SOON
          </div>
        }
        <img src={item.img} className="rounded-[8px] lg:rounded-[12px] " />
      </div>
      <div className=" flex flex-col lg:gap-2">
        <p className={cn(
          "text-14s text-gravel-25",
          "lg:text-20s"
        )}>{item.title}</p>
        <p className={cn(
          "text-12r text-gravel-100",
          "lg:text-16r"
        )}>{item.content} </p>
      </div>
    </Link>
  )
}

export default ProjectCardNew
