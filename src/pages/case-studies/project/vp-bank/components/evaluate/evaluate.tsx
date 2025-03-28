import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";
import { ReactNode, useState } from "react";

type ProblemProps = {
  img: string;
  data: {
    title: string;
    content: string;
  }[];
};

type SolutionProps = {
  img: string;
  data: {
    title: string;
    content: string;
  }[];
};

type EvaluateProps = {
  dataMobile: {
    title: string;
    content: string;
    problem: {
      img: string;
      data: {
        title: string;
        content: string;
      }[];
    };
    solution: {
      img: string;
      data: {
        title: string;
        content: string;
      }[];
    };
  }[];
  dataPC: {
    title: string;
    content: string;
    problemIMG: string;
    solutionIMG: string;
  }[];
};

function Container({
  children,
  title,
  content,
  index,
}: {
  children: React.ReactNode;
  title: string;
  content: string;
  index: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] bg-gravel-800 lg:rounded-[12px]">
      <div className="px-4 pt-4 lg:px-8 lg:pt-8">
        <div className="mb-5 flex gap-3 lg:gap-5">
          <p className="text-green-gradient text-18b lg:text-24b">{index}</p>
          <p className="text-18s text-gravel-25 lg:text-24b">{title}</p>
        </div>
        <p className="mb-4 text-14r text-gravel-100 lg:mb-5 lg:text-16r">{content}</p>
      </div>
      {children}
    </div>
  );
}

function TabContainer({
  problemTab,
  solutionTab,
}: {
  problemTab: React.ReactNode;
  solutionTab: React.ReactNode;
}) {
  return (
    <Tabs defaultValue="problem" className="w-full">
      <TabsList className="h-[35px] w-full !justify-start !p-0 lg:h-[44px]">
        <TabsTrigger
          className="shadow-text !rounded-none px-4 text-14m hover:text-gravel-25 data-[state=active]:border-b-2 data-[state=active]:border-gravel-25 data-[state=active]:text-14s lg:px-8 lg:text-20m lg:data-[state=active]:text-20b"
          value="problem"
        >
          Problem
        </TabsTrigger>
        <TabsTrigger
          value="solution"
          className="shadow-text !rounded-none px-4 text-14m hover:text-gravel-25 data-[state=active]:border-b-2 data-[state=active]:border-gravel-25 data-[state=active]:text-14s lg:px-8 lg:text-20m lg:data-[state=active]:text-20b"
        >
          Solution
        </TabsTrigger>
      </TabsList>
      <TabsContent value="problem">{problemTab}</TabsContent>
      <TabsContent value="solution">{solutionTab}</TabsContent>
    </Tabs>
  );
}

function Evaluate({ dataMobile, dataPC }: EvaluateProps) {
  const isLargeScreen = useResponsiveProps({ lg: true });
  return (
    <div className="mt-6 flex flex-col gap-6 lg:mt-10 lg:gap-10">
      {isLargeScreen
        ? dataPC.map((data, index) => (
            <Container
              key={index}
              index={0 + (index + 1).toString()}
              title={data.title}
              content={data.content}
            >
              <TabContainer
                problemTab={
                  <img
                    alt=""
                    src={data.problemIMG}
                    className="aspect-[902/580] w-full bg-gravel-600"
                  />
                }
                solutionTab={
                  <img
                    alt=""
                    src={data.solutionIMG}
                    className="aspect-[902/580] w-full bg-gravel-600"
                  />
                }
              />
            </Container>
          ))
        : dataMobile.map((data, index) => {
            const getProblemTab = (index: number, data: ProblemProps): ReactNode => {
              switch (index) {
                case 0:
                  return <Mobile1Pr data={data} />;
                case 1:
                  return <Mobile2Pr data={data} />;
                case 2:
                  return <Mobile3Pr data={data} />;
                default:
                  return <Mobile1Pr data={data} />;
              }
            };
            const getSolutionTab = (index: number, data: SolutionProps): ReactNode => {
              switch (index) {
                case 0:
                  return <Mobile1So data={data} />;
                case 1:
                  return <Mobile2So data={data} />;
                case 2:
                  return <Mobile3So data={data} />;
                default:
                  return <Mobile1So data={data} />;
              }
            };
            return (
              <Container
                key={index}
                index={0 + (index + 1).toString()}
                title={data.title}
                content={data.content}
              >
                <TabContainer
                  problemTab={
                    <div className="w-full bg-gravel-600">{getProblemTab(index, data.problem)}</div>
                  }
                  solutionTab={
                    <div className="w-full bg-gravel-600">
                      {getSolutionTab(index, data.solution)}
                    </div>
                  }
                />
              </Container>
            );
          })}
    </div>
  );
}

function Mobile1Pr({ data }: { data: ProblemProps }) {
  const [selection, setSelection] = useState<number>(0);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      <div className="relative w-full max-w-[150px] shrink-0 grow">
        <img alt="image" src={data.img} className="aspect-[150/305] w-[150px]" />
        <div
          onClick={() => setSelection(0)}
          className={cn(
            "absolute left-[18px] top-[18px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 0 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          1
        </div>
        <div
          onClick={() => setSelection(1)}
          className={cn(
            "absolute right-[10px] top-[18px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 1 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          2
        </div>
        <div
          onClick={() => setSelection(2)}
          className={cn(
            "absolute left-[46px] top-[65px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 2 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          3
        </div>
        <div
          onClick={() => setSelection(3)}
          className={cn(
            "absolute left-[66px] top-[132px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 3 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          4
        </div>
        <div
          onClick={() => setSelection(4)}
          className={cn(
            "absolute left-[106px] top-[250px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 4 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          5
        </div>
      </div>
      <div className="flex max-w-[300px] flex-col">
        <p className="mb-[6px] text-14b text-gravel-25">{0 + (selection + 1).toString()}</p>
        <p className="mb-1 text-10b text-white">{data.data[selection].title}</p>
        <p className="text-8r text-gravel-100">{data.data[selection].content}</p>
      </div>
    </div>
  );
}

function Mobile1So({ data }: { data: SolutionProps }) {
  const [selection, setSelection] = useState<number>(0);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      <div className="relative w-full max-w-[150px] shrink-0 grow">
        <img alt="image" src={data.img} className="aspect-[150/305] w-[150px]" />
        <div
          onClick={() => setSelection(0)}
          className={cn(
            "absolute left-[93px] top-[12px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 0 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          1
        </div>
        <div
          onClick={() => setSelection(1)}
          className={cn(
            "absolute right-[65px] top-[44px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 1 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          2
        </div>
        <div
          onClick={() => setSelection(2)}
          className={cn(
            "absolute left-[103px] top-[96px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 2 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          3
        </div>
        <div
          onClick={() => setSelection(3)}
          className={cn(
            "absolute left-[90px] top-[140px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 3 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          4
        </div>
      </div>
      <div className="flex max-w-[300px] flex-col">
        <p className="mb-[6px] text-14b text-gravel-25">{0 + (selection + 1).toString()}</p>
        <p className="mb-1 text-10b text-white">{data.data[selection].title}</p>
        <p className="text-8r text-gravel-100">{data.data[selection].content}</p>
      </div>
    </div>
  );
}
function Mobile2Pr({ data }: { data: ProblemProps }) {
  const [selection, setSelection] = useState<number>(0);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      <div className="relative w-full max-w-[150px] shrink-0 grow">
        <img alt="image" src={data.img} className="aspect-[150/305] w-[150px]" />
        <div
          onClick={() => setSelection(0)}
          className={cn(
            "absolute left-[8px] top-[40px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 0 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          1
        </div>
        <div
          onClick={() => setSelection(1)}
          className={cn(
            "absolute right-[27px] top-[15px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 1 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          2
        </div>
        <div
          onClick={() => setSelection(2)}
          className={cn(
            "absolute left-[10px] top-[270px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 2 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          3
        </div>
        <div
          onClick={() => setSelection(3)}
          className={cn(
            "absolute left-[117px] top-[257px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 3 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          4
        </div>
      </div>
      <div className="flex max-w-[300px] flex-col">
        <p className="mb-[6px] text-14b text-gravel-25">{0 + (selection + 1).toString()}</p>
        <p className="mb-1 text-10b text-white">{data.data[selection].title}</p>
        <p className="text-8r text-gravel-100">{data.data[selection].content}</p>
      </div>
    </div>
  );
}

function Mobile2So({ data }: { data: SolutionProps }) {
  const [selection, setSelection] = useState<number>(0);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      <div className="relative w-full max-w-[150px] shrink-0 grow">
        <img alt="image" src={data.img} className="aspect-[150/305] w-[150px]" />
        <div
          onClick={() => setSelection(0)}
          className={cn(
            "absolute left-[2px] top-[33px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 0 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          1
        </div>
        <div
          onClick={() => setSelection(1)}
          className={cn(
            "absolute right-[3px] top-[88px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 1 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          2
        </div>
        <div
          onClick={() => setSelection(2)}
          className={cn(
            "absolute left-[3px] top-[182px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 2 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          3
        </div>
        <div
          onClick={() => setSelection(3)}
          className={cn(
            "absolute left-[127px] top-[246px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 3 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          4
        </div>
      </div>
      <div className="flex max-w-[300px] flex-col">
        <p className="mb-[6px] text-14b text-gravel-25">{0 + (selection + 1).toString()}</p>
        <p className="mb-1 text-10b text-white">{data.data[selection].title}</p>
        <p className="text-8r text-gravel-100">{data.data[selection].content}</p>
      </div>
    </div>
  );
}

function Mobile3Pr({ data }: { data: ProblemProps }) {
  const [selection, setSelection] = useState<number>(0);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      <div className="relative w-full max-w-[150px] shrink-0 grow">
        <img alt="image" src={data.img} className="aspect-[150/305] w-[150px]" />
        <div
          onClick={() => setSelection(0)}
          className={cn(
            "absolute left-[32px] top-[13px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 0 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          1
        </div>
        <div
          onClick={() => setSelection(1)}
          className={cn(
            "absolute right-[24px] top-[16px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 1 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          2
        </div>
        <div
          onClick={() => setSelection(2)}
          className={cn(
            "absolute left-[72px] top-[152px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 2 ? "red-gradient text-red" : "gray-gradient text-gravel-300",
          )}
        >
          3
        </div>
      </div>
      <div className="flex max-w-[300px] flex-col">
        <p className="mb-[6px] text-14b text-gravel-25">{0 + (selection + 1).toString()}</p>
        <p className="mb-1 text-10b text-white">{data.data[selection].title}</p>
        <p className="text-8r text-gravel-100">{data.data[selection].content}</p>
      </div>
    </div>
  );
}

function Mobile3So({ data }: { data: SolutionProps }) {
  const [selection, setSelection] = useState<number>(0);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      <div className="relative w-full max-w-[150px] shrink-0 grow">
        <img alt="image" src={data.img} className="aspect-[150/305] w-[150px]" />
        <div
          onClick={() => setSelection(0)}
          className={cn(
            "absolute left-[109px] top-[15px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 0 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          1
        </div>
        <div
          onClick={() => setSelection(1)}
          className={cn(
            "absolute left-[1px] top-[24px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 1 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          2
        </div>
        <div
          onClick={() => setSelection(2)}
          className={cn(
            "absolute left-[78px] top-[168px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-8s",
            selection === 2 ? "green-gradient-2 text-vp-logo" : "gray-gradient text-gravel-300",
          )}
        >
          3
        </div>
      </div>
      <div className="flex max-w-[300px] flex-col">
        <p className="mb-[6px] text-14b text-gravel-25">{0 + (selection + 1).toString()}</p>
        <p className="mb-1 text-10b text-white">{data.data[selection].title}</p>
        <p className="text-8r text-gravel-100">{data.data[selection].content}</p>
      </div>
    </div>
  );
}

export default Evaluate;
