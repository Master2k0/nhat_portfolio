type ContentWithLargeIconProps = {
  title: string;
  description: string;
  icon: string;
};

function ContentWithLargeIcon({ title, description, icon }: ContentWithLargeIconProps) {
  return (
    <div className="flex flex-col gap-4 xl:flex-row-reverse xl:items-center xl:gap-10">
      <img
        src={icon}
        alt={title}
        className="aspect-[86/100] w-[86px] xl:aspect-[200/200] xl:w-[200px]"
      />
      <div className="flex flex-col gap-2">
        <p className="text-16s text-gravel-25 xl:text-24b">{title}</p>
        <p className="text-14r text-gravel-100 xl:text-18r">{description}</p>
      </div>
    </div>
  );
}

export default ContentWithLargeIcon;
