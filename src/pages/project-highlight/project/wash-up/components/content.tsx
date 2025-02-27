import { cn } from "@/libs/utils";

function Content({ content, className }: { content: string; className?: string }) {
  return <p className={cn("text-14r text-gravel-100 xl:text-18r", className)}>{content}</p>;
}

export default Content;
