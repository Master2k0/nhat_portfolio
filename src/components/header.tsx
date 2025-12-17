import { cn } from "@/libs/utils";

function Header({
  title,
  className,
  type = "h3",
}: {
  title: string;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4";
}) {
  return (
    <p
      className={cn(
        type === "h3" && "text-20b text-gravel-25 xl:text-32b",
        type === "h2" && "xl:text-40b text-32b text-gravel-25",
        type === "h1" && "text-32b text-gravel-25 xl:text-60b",
        type === "h4" && "text-16b text-gravel-25 xl:text-24b",
        className,
      )}
    >
      {title}
    </p>
  );
}

export default Header;
