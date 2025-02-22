import { cn } from "@/libs/utils";
import { useState } from "react";

type UserContractsProps = {
  data: (
    | {
        img: string;
        list?: undefined;
        description?: undefined;
        title?: undefined;
      }
    | {
        list: string[];
        description: string;
        img?: undefined;
        title?: undefined;
      }
    | {
        title: string;
        list: string[];
        img?: undefined;
        description?: undefined;
      }
  )[];
  img: string;
};

function UserContracts({ data, img }: UserContractsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[428px] w-full rounded-[8px] bg-gravel-800 p-4 pb-0 xl:mx-auto xl:flex xl:h-[600px] xl:flex-row-reverse xl:rounded-[12px] xl:p-0">
      <div className="absolute bottom-0 left-1/2 -translate-x-[63.5%] xl:relative xl:left-0 xl:translate-x-0 xl:px-8 xl:pt-8">
        <img
          src={img}
          alt="image"
          className="aspect-[230/337] w-[230px] xl:aspect-[387/568] xl:w-full"
        />
        <button
          className={cn(
            "data-state-[inactive] :text-gravel-100 absolute left-[23%] top-[20%] h-4 w-4 rounded-full text-6m xl:left-[27%] xl:top-[25%] xl:h-6 xl:w-6 xl:text-8m",
            activeIndex === 0 ? "bg-gravel-300" : "bg-gravel-800",
          )}
          onClick={() => setActiveIndex(0)}
        >
          1
        </button>
        <button
          className={cn(
            "data-state-[inactive] :text-gravel-100 absolute left-[43.4%] top-[34.2%] h-4 w-4 rounded-full text-6m xl:left-[46%] xl:top-[38%] xl:h-6 xl:w-6 xl:text-8m",
            activeIndex === 1 ? "bg-gravel-300" : "bg-gravel-800",
          )}
          onClick={() => setActiveIndex(1)}
        >
          2
        </button>
        <button
          className={cn(
            "data-state-[inactive] :text-gravel-100 absolute left-[37%] top-[58%] h-4 w-4 rounded-full text-6m xl:left-[40%] xl:top-[60%] xl:h-6 xl:w-6 xl:text-8m",
            activeIndex === 2 ? "bg-gravel-300" : "bg-gravel-800",
          )}
          onClick={() => setActiveIndex(2)}
        >
          3
        </button>
      </div>
      <div className="absolute left-1/2 top-[12px] translate-x-[10px] xl:relative xl:left-0 xl:top-0 xl:flex xl:w-full xl:translate-x-0 xl:items-center xl:justify-center">
        {activeIndex === 0 && (
          <img src={data[0].img} alt="" className="max-w-[139px] xl:max-w-[321px]" />
        )}
        {activeIndex === 1 && (
          <div className="flex max-w-[139px] flex-col gap-3 rounded-[8px] bg-block-bg p-3 xl:max-w-[350px] xl:gap-5 xl:p-5">
            <div className="flex flex-wrap gap-1 xl:gap-4">
              {data[1].list?.map((item, index) => (
                <div className="flex items-center gap-1 xl:gap-4" key={index}>
                  <p className="text-8m text-gravel-25 xl:text-18r">{item}</p>
                  {index !== data[1].list!.length - 1 && (
                    <img
                      className="w-[2px] xl:w-[4px]"
                      src="/insurance-feature/icons/circle.svg"
                      alt="dot"
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-8r text-gravel-100 xl:text-18r">{data[1].description}</p>
          </div>
        )}
        {activeIndex === 2 && (
          <div className="flex max-w-[139px] flex-col gap-2 rounded-[8px] bg-block-bg p-3 xl:max-w-[387px] xl:gap-[10px] xl:p-5">
            <p className="text-8r text-gray-100 xl:text-18r">{data[2].title}</p>
            <ul className="flex list-inside list-disc flex-col gap-2 pl-1 xl:gap-[10px]">
              {data[2].list?.map((item, index) => (
                <li className="text-8m text-gravel-25 xl:text-18r" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserContracts;
