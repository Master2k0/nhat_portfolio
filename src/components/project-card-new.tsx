import { cn } from "@/libs/utils";
import { Link } from "react-router-dom";

interface ProjectCardNewProps {
  item: {
    img: string;
    href: string;
    title: string;
    content: string;
  };
}

const ProjectCardNew = ({ item }: ProjectCardNewProps) => {
  return (
    <Link to={item.href} className={cn("flex flex-col gap-3")}>
      <div
        className={cn(
          "image-border relative h-full w-full rounded-[8px]",
          "aspect-[358/214] xl:aspect-[516/309] xl:rounded-[12px]",
        )}
      >
        {!item.href && (
          <div className="absolute left-[1px] top-[1px] z-10 grid h-[calc(100%-2px)] w-[calc(100%-2px)] place-items-center rounded-[8px] bg-black bg-opacity-80 text-14s text-gravel-300 xl:rounded-[12px] xl:text-20s">
            COMMING SOON
          </div>
        )}
        <img
          src={item.img}
          className="h-full w-full rounded-[8px] object-cover xl:absolute xl:inset-0 xl:rounded-[12px]"
        />
      </div>
      <div className="flex flex-col xl:gap-2">
        <p className={cn("text-14s text-gravel-25", "xl:text-20s")}>{item.title}</p>
        <p className={cn("text-14r text-gravel-100", "xl:text-16r")}>{item.content} </p>
      </div>
    </Link>
  );
};

export default ProjectCardNew;
