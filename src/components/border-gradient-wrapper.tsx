import { cn } from "@/libs/utils";
import { PropsWithChildren } from "react";

interface BorderGradientWrapperProps extends PropsWithChildren {
  className?: string;
}

function BorderGradientWrapper({ children, className = "" }: BorderGradientWrapperProps) {
  return <div className={cn("section-border overflow-hidden p-px", className)}>{children}</div>;
}

export default BorderGradientWrapper;
