import { cn } from "@/libs/utils";
import { PropsWithChildren } from "react";
import BorderGradientWrapper from "./border-gradient-wrapper";

interface SectionWrapperProps extends PropsWithChildren {
  wrapperClassName?: string;
  divClassName?: string;
}

export function SectionWrapper({
  children,
  wrapperClassName = "",
  divClassName = "",
}: SectionWrapperProps) {
  return (
    <BorderGradientWrapper
      className={cn(
        "overflow-hidden rounded-[20px] lg:rounded-[16px] 3xl:rounded-[28px]",
        wrapperClassName,
      )}
    >
      <div
        className={cn(
          "rounded-[20px] bg-block-bg px-4 py-5 lg:rounded-[16px] 3xl:rounded-[28px] 3xl:p-7",
          divClassName,
        )}
      >
        {children}
      </div>
    </BorderGradientWrapper>
  );
}
