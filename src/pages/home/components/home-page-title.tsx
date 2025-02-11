import { cn } from "@/libs/utils";

type HomePageTitleProps = {
  value: string;
  className?: string;
};

function HomePageTitle({ value, className = "" }: HomePageTitleProps) {
  return <h2 className={cn("block text-20b text-gravel-25 2xl:text-20b 3xl:text-32b", className)}>{value}</h2>;
}
export default HomePageTitle;
