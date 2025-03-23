import { useResponsiveProps } from "@/hooks/responsive.hook";

type HypotheticalProps = {
  icon: string;
  title: string;
  content: string;
  subContent: string[];
};

function Hypothetical({ icon, title, content, subContent }: HypotheticalProps) {
  const isLargeScreen = useResponsiveProps({ lg: true });

  return (
    <div className="flex flex-col gap-5 rounded-[12px] bg-gravel-800 px-3 py-4 lg:flex-row lg:bg-inherit lg:p-0">
      <div className="flex w-full max-w-[350px] flex-row bg-gravel-800 lg:flex-col lg:rounded-[12px] lg:p-8">
        {!isLargeScreen && <img alt="" src={icon} className="mr-4 aspect-square w-[50px]" />}
        <div className="flex flex-col gap-2 lg:items-center lg:gap-6">
          <p className="text-16s text-gravel-25 lg:text-24b">{title}</p>
          {isLargeScreen && (
            <img alt="" src={icon} className="aspect-square w-[50px] lg:w-[200px]" />
          )}
          <p className="text-14r text-gravel-100 lg:text-16m">{content}</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 lg:gap-5">
        {subContent.map((content, index) => (
          <div
            key={index}
            className="w-full rounded-[8px] bg-gravel-900 p-3 text-14r text-gravel-100 lg:rounded-[12px] lg:bg-gravel-800 lg:px-5 lg:py-[27px] lg:text-16r"
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hypothetical;
