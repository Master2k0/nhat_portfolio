import { cn } from "@/libs/utils";

type DividerProps = {
  type?: "dot" | "line";
  className?: string;
};

function Divider({ type = "line", className }: DividerProps) {
  return (
    <div
      className={cn(
        "w-full border-t border-gravel-700",
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
