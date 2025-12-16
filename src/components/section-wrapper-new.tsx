import { cn } from "@/libs/utils";
import { PropsWithChildren } from "react";

interface SectionWrapperNewProps extends PropsWithChildren {
  wrapperClassName?: string;
  divClassName?: string;
  id?: string;
}

export function SectionWrapperNew({ children, divClassName = "", id }: SectionWrapperNewProps) {
  return (
    <div className={cn(divClassName)} id={id}>
      {children}
    </div>
  );
}
