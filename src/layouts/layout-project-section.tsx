import TableOfContents from "@/components/table-of-contents";
import { CurrentTab } from "@/pages/project-highlight/project/wash-up/wash-up";
import { PropsWithChildren } from "react";

type LayoutProjectSectionProps = {
  currentTab: CurrentTab;
} & PropsWithChildren;

const listIds = {
  "Vehicle wash app": [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "identifying-users",
      title: "Identifying Users",
    },
    {
      id: "key-features",
      title: "Key Features",
    },
    {
      id: "user-journeys",
      title: "User Journeys",
    },
    {
      id: "user-flow",
      title: "User Flow",
    },
    {
      id: "ui-design",
      title: "UI Design",
    },
  ],
  "Insurance Feature": [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "key-features",
      title: "Key Features",
    },
    {
      id: "user-flow",
      title: "User Flow",
    },
    {
      id: "problems-solutions",
      title: "Problems/ Solutions",
    },
    {
      id: "user-contracts",
      title: "User Contracts",
    },
    {
      id: "conclusion",
      title: "Conclusion",
    },
  ],
  "Technician app": [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "identifying-users",
      title: "Identifying Users",
    },
    {
      id: "key-features",
      title: "Key Features",
    },
    {
      id: "user-journeys",
      title: "User Journeys",
    },
    {
      id: "user-flow",
      title: "User Flow",
    },
    {
      id: "task-reception-ui",
      title: "Task Reception UI",
    },
    {
      id: "import-order-ui",
      title: "Import Order UI",
    },
  ],
  "Technician Task": [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "some-ux-points",
      title: "Some UX Points",
    },
    {
      id: "conclusion",
      title: "Conclusion",
    },
  ],
};

export function LayoutProjectSection({ currentTab, children }: LayoutProjectSectionProps) {
  return (
    <div className="flex gap-6">
      <TableOfContents listIds={listIds[currentTab]} />
      {children}
    </div>
  );
}

export default LayoutProjectSection;
