import Content from "@/components/content";

type TabContentProps = {
  icon: string;
  title: string;
  description: string;
};
function TabContent({ icon, title, description }: TabContentProps) {
  return (
    <div className="flex gap-5">
      <img src={icon} alt={title} className="h-6 w-6 xl:h-8 xl:w-8" />
      <div className="flex flex-col gap-2">
        <p className="text-16s text-gravel-25 xl:text-18s">{title}</p>
        <Content content={description} />
      </div>
    </div>
  );
}

export default TabContent;
