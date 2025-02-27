import { cn } from "@/libs/utils";

function Header({ title, className }: { title: string; className?: string }) {
  return <p className={cn("text-24b text-gravel-25 xl:text-32b", className)}>{title}</p>;
}

export default Header;
