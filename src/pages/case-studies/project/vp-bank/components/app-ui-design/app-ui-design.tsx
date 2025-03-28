import { VPBank as Datas } from "@/configs/datas/vp-bank";
import { useResponsiveProps } from "@/hooks/responsive.hook";

function AppUIDesign() {
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <div className="flex flex-col gap-6 xl:gap-10">
      <div className="flex flex-col gap-5">
        <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
          {Datas.main.section6.datas[0].title}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
          {Datas.main.section6.datas[0].imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={Datas.main.section6.datas[0].title}
              className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
            />
          ))}
        </div>
      </div>
      <div className="border-dash-custom" />
      <div className="flex flex-col gap-5">
        <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
          {Datas.main.section6.datas[1].title}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
          {Datas.main.section6.datas[1].imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={Datas.main.section6.datas[1].title}
              className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
            />
          ))}
        </div>
      </div>
      <div className="border-dash-custom" />
      <div className="flex flex-col xl:flex-row xl:gap-[38px]">
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.main.section6.datas[2].title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
            {Datas.main.section6.datas[2].imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.main.section6.datas[2].title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
        {!isLargeScreen && <div className="border-dash-custom my-6" />}
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.main.section6.datas[3].title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
            {Datas.main.section6.datas[3].imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.main.section6.datas[3].title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppUIDesign;
