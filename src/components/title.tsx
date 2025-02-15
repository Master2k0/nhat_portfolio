import { cn } from "@/libs/utils";

type HomePageTitleProps = {
  value: string;
  className?: string;
};

function Title({ value, className = "" }: HomePageTitleProps) {
  return <h2 className={cn("block text-gravel-25", className)}>{value}</h2>;
}
export default Title;
