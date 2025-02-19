import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";

type TableOfContentsProps = {
  listIds: {
    id: string;
    title: string;
  }[];
};

function TableOfContents({ listIds }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(listIds[0].id);
  const isLargeScreen = useResponsiveProps({ xl: true });

  useEffect(() => {
    const handleScroll = () => {
      const sections = listIds.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentId = activeId;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
        currentId = listIds[listIds.length - 1].id;
      } else if (window.scrollY === 0) {
        currentId = listIds[0].id;
      } else {
        sections.forEach((section) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = sectionTop + rect.height;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              currentId = section.id;
            }
          }
        });
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [listIds, activeId]);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setActiveId(id);
  };
  return (
    <div
      className={cn(
        "sticky top-28 mt-[128px] w-[250px] shrink-0 self-start",
        !isLargeScreen && "hidden",
      )}
    >
      {listIds.map((data) => (
        <div className="h-16 px-5">
          <p
            key={data.id}
            className={cn(
              "shadow-text cursor-pointer text-18r hover:text-gravel-25",
              activeId === data.id ? "text-gravel-25" : "text-gravel-500",
            )}
            onClick={() => handleClick(data.id)}
          >
            {data.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TableOfContents;
