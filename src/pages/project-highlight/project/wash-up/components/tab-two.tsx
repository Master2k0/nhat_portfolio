import { SectionWrapper } from "@/components/sections-wrapper";
import { WashUp as Datas } from "@/configs/datas/wash-up";
import { useResponsiveProps } from "@/hooks/responsive.hook";
import { Header } from "@radix-ui/react-accordion";

function TabTwo() {
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <>
      <SectionWrapper
        wrapperClassName="rounded-tl-none rounded-tr-none !pl-0 !pt-0 xl:!pl-[1px] xl:!pt-[1px] xl:mt-6 xl:rounded-[8px]"
        divClassName="rounded-tl-none rounded-tr-none xl:rounded-[8px] "
      >
        <Header
          title={
            isLargeScreen
              ? Datas.vehicleWashApp.section1.pcTitle
              : Datas.vehicleWashApp.section1.title
          }
        />
      </SectionWrapper>
    </>
  );
}

export default TabTwo;
