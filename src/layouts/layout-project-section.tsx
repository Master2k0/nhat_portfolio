import TableOfContents from "@/components/table-of-contents";
import { PropsWithChildren } from "react";

type LayoutProjectSectionProps = {
  listIds: string[];
} & PropsWithChildren;

export function LayoutProjectSection({ listIds, children }: LayoutProjectSectionProps) {
  return (
    <div className="flex gap-6">
      <TableOfContents listIds={listIds} />
      {children}
    </div>
  );
}

export default LayoutProjectSection;
