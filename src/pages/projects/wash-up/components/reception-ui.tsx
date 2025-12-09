import { cn } from "@/libs/utils";

type ReceptionUIProps = {
  datas: {
    description: string[];
    img: string;
  }[];
};

function ReceptionUI({ datas }: ReceptionUIProps) {
  return datas.map((data, index) => {
    return (
      <div
        key={index}
        className={cn(
          "flex flex-wrap items-center justify-center gap-5 px-4 py-6 lg:gap-[60px] lg:px-8 lg:py-[60px]",
          index % 2 === 1 && "flex-row-reverse bg-gravel-800",
        )}
      >
        <img
          className="aspect-[1/2] w-full max-w-[120px] flex-shrink lg:max-w-[250px]"
          src={data.img}
          alt="image"
        />
        <div className="w-full max-w-[186px] flex-shrink-0 lg:max-w-[400px]">
          {data.description.map((desc, index) => {
            return (
              <p
                className="text-10r text-gravel-100 lg:text-18r"
                dangerouslySetInnerHTML={{
                  __html: desc,
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  });
}

export default ReceptionUI;
