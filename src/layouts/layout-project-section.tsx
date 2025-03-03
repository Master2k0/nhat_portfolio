import TableOfContents from "@/components/table-of-contents";
import { PropsWithChildren } from "react";

type LayoutProjectSectionProps<T extends string | number | symbol> = {
  listIds: Record<
    T,
    {
      id: string;
      title: string;
    }[]
  >;
  currentTab: T;
} & PropsWithChildren;

export function LayoutProjectSection<T extends string | number | symbol>({
  currentTab,
  listIds,
  children,
}: LayoutProjectSectionProps<T>) {
  return (
    <div className="flex gap-6">
      <TableOfContents listIds={listIds[currentTab]} />
      {children}
    </div>
  );
}

export default LayoutProjectSection;
