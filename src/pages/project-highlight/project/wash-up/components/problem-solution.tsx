import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { cn } from "@/libs/utils";

type ProblemSolutionProps = {
  problem: React.ReactNode;
  solution: React.ReactNode;
  number: string;
  img?: string;
  className?: string;
};

function ProblemSolution({ problem, solution, number, img, className }: ProblemSolutionProps) {
  const [currentTab, setCurrentTab] = useState("problem");
  const isLargeScreen = useResponsiveProps({ xl: true });
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-between gap-5 rounded-[12px] bg-gravel-800 p-5 xl:flex-row xl:gap-0",
        className,
      )}
    >
      <div className="flex flex-col gap-3 xl:p-8">
        <p className="text-gradient w-fit text-18b xl:text-32b">{number}</p>
        <div className="flex flex-col gap-5 xl:gap-8">
          <Tabs defaultValue="problem">
            <TabsList className="flex gap-5 p-0">
              <TabsTrigger
                value="problem"
                className="shadow-text !p-0 text-18m text-gravel-300 hover:text-gravel-25 xl:text-24b"
                onClick={() => setCurrentTab("problem")}
              >
                Problem
              </TabsTrigger>
              <div className="text-24r text-gravel-500">/</div>
              <TabsTrigger
                value="solution"
                className="shadow-text !p-0 text-18m text-gravel-300 hover:text-gravel-25 xl:text-24b"
                onClick={() => setCurrentTab("solution")}
              >
                Solution
              </TabsTrigger>
            </TabsList>
            <TabsContent value="problem">{problem}</TabsContent>
            <TabsContent value="solution">{solution}</TabsContent>
          </Tabs>
        </div>
      </div>
      {(isLargeScreen || (!isLargeScreen && currentTab === "solution")) && (
        <img src={img} alt="solution" />
      )}
    </div>
  );
}

export default ProblemSolution;
