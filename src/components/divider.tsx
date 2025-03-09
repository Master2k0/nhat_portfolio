import { cn } from "@/libs/utils";

type DividerProps = {
  type?: "dot" | "line";
  className?: string;
};

function Divider({ type = "line", className }: DividerProps) {
  return (
    <div
      className={cn(
        "mb-6 mt-3 w-full border-t border-gravel-700 xl:mb-10 xl:mt-5",
        {
          "border-dotted": type === "dot",
          "border-solid": type === "line",
        },
        className,
      )}
    />
  );
}

export default Divider;
