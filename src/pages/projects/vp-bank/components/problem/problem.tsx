import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type ProblemProps = {
  datas: {
    title: string;
    content: string[];
    end?: string;
    mid?: string;
  }[];
};

type propsTab = {
  isPC: boolean;
} & ProblemProps;

function Tab1({ datas, isPC }: propsTab) {
  return (
    <div className="flex flex-col">
      {isPC && <p className="text-green-gradient text-32b">01</p>}
      <p className="mb-5 text-18s text-gravel-25 lg:mt-3 lg:text-24b">{datas[0].title}</p>
      <ul className="flex list-outside list-disc flex-col gap-3">
        {datas[0].content.map((content, index) => (
          <li className="ml-3 text-14r text-gravel-100 lg:text-16r" key={index}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tab2({ datas, isPC }: propsTab) {
  return (
    <div className="flex flex-col">
      {isPC && <p className="text-green-gradient text-32b">02</p>}
      <p className="mb-5 text-18s text-gravel-25 lg:mt-3 lg:text-24b">{datas[1].title}</p>
      <ul className="flex list-outside list-disc flex-col gap-3">
        {datas[1].content.map((content, index) => (
          <li className="ml-3 text-14r text-gravel-100 lg:text-16r" key={index}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tab3({ datas, isPC }: propsTab) {
  return (
    <div className="flex flex-col">
      {isPC && <p className="text-green-gradient text-32b">03</p>}
      <p className="mb-5 text-18s text-gravel-25 lg:mt-3 lg:text-24b">{datas[2].title}</p>
      <ul className="flex list-outside list-disc flex-col gap-3">
        {datas[2].content.map((content, index) => (
          <li className="ml-3 text-14r text-gravel-100 lg:text-16r" key={index}>
            {content}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-14r text-gravel-100 lg:text-16r">{datas[2].end}</p>
    </div>
  );
}

function Tab4({ datas, isPC }: propsTab) {
  return (
    <div className="flex flex-col">
      {isPC && <p className="text-green-gradient text-32b">04</p>}
      <p className="mb-5 text-18s text-gravel-25 lg:mt-3 lg:text-24b">{datas[3].title}</p>
      <ul className="flex list-outside list-disc flex-col gap-3">
        {datas[3].content.map((content, index) => (
          <li className="ml-3 text-14r text-gravel-100 lg:text-16r" key={index}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tab5({
  datas,
  isPC,
  expanded,
  setExpanded,
}: propsTab & { expanded?: boolean; setExpanded?: (value: boolean) => void }) {
  const isLargeScreen = useResponsiveProps({ lg: true });
  return (
    <div className="flex flex-col">
      {isPC && <p className="text-green-gradient text-32b">05</p>}
      <p className="mb-5 text-18s text-gravel-25 lg:mt-3 lg:text-24b">{datas[4].title}</p>
      <p className="mb-5 text-14r text-gravel-100 lg:text-16r">{datas[4].mid}</p>

      <ul className="flex list-outside list-disc flex-col gap-3">
        {datas[4].content.map((content, index) => (
          <li className="ml-3 text-14r text-yellow lg:text-16r" key={index}>
            {content}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-14r text-gravel-100 lg:text-16r">{datas[4].end}</p>
      {!isLargeScreen && (
        <div
          onClick={() => setExpanded && setExpanded(!expanded)}
          className="sticky bottom-[-20px] flex h-[60px] w-[calc(100%+40px)] -translate-x-[20px] cursor-pointer flex-col items-center justify-center bg-gravel-800 text-14m text-gravel-25"
        >
          <div className="flex flex-row items-center gap-2">
            {!expanded ? (
              <>
                See More
                <ChevronDown />
              </>
            ) : (
              <>
                Hide
                <ChevronUp />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SmallScreen({ datas }: ProblemProps) {
  const [activeTab, setActiveTab] = useState("1");
  const [expanded, setExpanded] = useState(false);

  function onClick(value: string) {
    setActiveTab(value);
    setExpanded(false);
  }
  return (
    <div
      className={cn(
        "mt-6 overflow-hidden rounded-xl bg-gravel-800 p-5",
        expanded ? "max-h-fit" : "h-[450px]",
      )}
    >
      <Tabs defaultValue="account" value={activeTab}>
        <TabsList className="mb-3 flex flex-row gap-3">
          <TabsTrigger
            value="1"
            onClick={() => {
              onClick("1");
            }}
            className="data-[state=active]:green-gradient flex aspect-square w-[44px] items-center justify-center !rounded-full text-18b"
          >
            01
          </TabsTrigger>
          <TabsTrigger
            value="2"
            onClick={() => {
              onClick("2");
            }}
            className="data-[state=active]:green-gradient flex aspect-square w-[44px] items-center justify-center !rounded-full text-18b"
          >
            02
          </TabsTrigger>
          <TabsTrigger
            value="3"
            onClick={() => {
              onClick("3");
            }}
            className="data-[state=active]:green-gradient flex aspect-square w-[44px] items-center justify-center !rounded-full text-18b"
          >
            03
          </TabsTrigger>
          <TabsTrigger
            value="4"
            onClick={() => {
              onClick("4");
            }}
            className="data-[state=active]:green-gradient flex aspect-square w-[44px] items-center justify-center !rounded-full text-18b"
          >
            04
          </TabsTrigger>
          <TabsTrigger
            value="5"
            onClick={() => {
              onClick("5");
            }}
            className="data-[state=active]:green-gradient flex aspect-square w-[44px] items-center justify-center !rounded-full text-18b"
          >
            05
          </TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <Tab1 isPC={false} datas={datas} />
        </TabsContent>
        <TabsContent value="2">
          <Tab2 isPC={false} datas={datas} />
        </TabsContent>
        <TabsContent value="3">
          <Tab3 isPC={false} datas={datas} />
        </TabsContent>
        <TabsContent value="4">
          <Tab4 isPC={false} datas={datas} />
        </TabsContent>
        <TabsContent value="5">
          <Tab5 isPC={false} datas={datas} expanded={expanded} setExpanded={setExpanded} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function LargeScreen({ datas }: ProblemProps) {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="rounded-xl bg-gravel-800 p-8">
          <Tab1 isPC={true} datas={datas} />
        </div>
        <div className="rounded-xl bg-gravel-800 p-8">
          <Tab2 isPC={true} datas={datas} />
        </div>
        <div className="rounded-xl bg-gravel-800 p-8">
          <Tab3 isPC={true} datas={datas} />
        </div>
        <div className="rounded-xl bg-gravel-800 p-8">
          <Tab4 isPC={true} datas={datas} />
        </div>
      </div>
      <div className="rounded-xl bg-gravel-800 p-8">
        <Tab5 isPC={true} datas={datas} expanded={false} setExpanded={() => {}} />
      </div>
    </div>
  );
}

function Problem({ datas }: ProblemProps) {
  const isLargeScreen = useResponsiveProps({ lg: true });

  return <div>{isLargeScreen ? <LargeScreen datas={datas} /> : <SmallScreen datas={datas} />}</div>;
}

export default Problem;
