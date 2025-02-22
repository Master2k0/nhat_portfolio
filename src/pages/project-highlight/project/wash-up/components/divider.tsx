import { cn } from "@/libs/utils";

type DividerProps = {
  type?: "dot" | "line";
};

function Divider({ type = "line" }: DividerProps) {
  return (
    <div
      className={cn("mb-6 mt-3 w-full border-t border-gravel-700 xl:mb-10 xl:mt-5", {
        "border-dotted": type === "dot",
        "border-solid": type === "line",
      })}
    />
  );
}

export default Divider;
