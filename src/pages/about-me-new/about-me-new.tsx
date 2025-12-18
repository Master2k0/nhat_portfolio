import { cn } from "@/libs/utils";
import { AboutMeNew as Datas } from "@/configs/datas/about-me-new";
import ZoomableImage from "@/components/zoomable-image";

const AboutMeNew = () => {
  return (
    <div className={cn("flex flex-col px-4", "xl:mx-auto xl:max-w-[1040px] xl:px-0")}>
      {/* About me */}
      <div className="mt-8 flex flex-col gap-8 xl:mt-[60px] xl:gap-[100px]">
        <p className={cn("text-24b text-white-footer", "xl:text-60b")}>About me</p>
        <div className="flex flex-col gap-3">
          {Datas.aboutme.map((item, index) => (
            <p key={index} className={cn("text-14r text-gravel-25", "xl:text-16r")}>
              {item}
            </p>
          ))}
        </div>
        <div className="border-dash-custom w-full xl:hidden" data-type="separator" />
      </div>

      {/* Tools */}
      <div className="mt-8 flex flex-col xl:mt-[100px] xl:flex-row xl:gap-[120px]">
        <p className={cn("text-20b text-white-footer", "mb-4 xl:mb-0 xl:w-[200px] xl:text-32b")}>
          Tools
        </p>
        <div className="mb-8 flex flex-col gap-3 xl:mb-0">
          {Datas.tools.map((item, index) => (
            <p key={index} className={cn("text-14r text-gravel-25", "xl:text-16r")}>
              {item}
            </p>
          ))}
        </div>
        <div className="border-dash-custom w-full xl:hidden" data-type="separator" />
      </div>
      {/* Kills */}
      <div className="mt-8 flex flex-col xl:mt-[100px] xl:flex-row xl:gap-[120px]">
        <p className={cn("text-20b text-white-footer", "mb-4 xl:mb-0 xl:w-[200px] xl:text-32b")}>
          Skills
        </p>
        <div className="mb-8 flex flex-col gap-3 xl:mb-0">
          {Datas.skills.map((item, index) => (
            <p key={index} className={cn("text-14r text-gravel-25", "xl:text-16r")}>
              {item}
            </p>
          ))}
        </div>
        <div className="border-dash-custom w-full xl:hidden" data-type="separator" />
      </div>
      {/* Education*/}
      <div className="mt-8 flex flex-col xl:mt-[100px] xl:flex-row xl:gap-[120px]">
        <p className={cn("text-20b text-white-footer", "mb-4 xl:mb-0 xl:w-[200px] xl:text-32b")}>
          Education
        </p>
        <div className={cn("mb-8 flex flex-col gap-3", "xl:gap-8, xl:mb-0 xl:flex-row")}>
          <ZoomableImage
            src={Datas.education.image}
            alt="Education Image"
            className={cn(
              "aspect-[361/262] w-full rounded-[8px] object-cover",
              "max-w-[205px] xl:aspect-[205/150]",
            )}
          />
          <div className="flex flex-col gap-1">
            <p className={cn("text-16s text-gravel-25", "xl:text-20s")}>
              {Datas.education.university}
            </p>
            <p className={cn("text-14m text-gravel-100", "xl:text-18m")}>{Datas.education.major}</p>
            <span className={cn("text-14m text-gravel-100", "xl:text-18m")}>
              Graduated{" "}
              <span className={cn("text-14s text-gravel-25", "xl:text-18s")}>
                {Datas.education.year}
              </span>{" "}
            </span>
          </div>
        </div>
        <div className="border-dash-custom w-full xl:hidden" data-type="separator" />
      </div>
      {/* Certificate */}
      <div className="mt-8 flex flex-col xl:mt-[100px] xl:flex-row xl:gap-[120px]">
        <p className={cn("text-20b text-white-footer", "mb-4 xl:mb-0 xl:w-[200px] xl:text-32b")}>
          Certificate
        </p>
        <div className={cn("mb-8 flex flex-col gap-3", "xl:mb-0 xl:flex-row xl:gap-8")}>
          <ZoomableImage
            src={Datas.certificate.image}
            alt="Certificate Image"
            className={cn(
              "aspect-[361/262] w-full rounded-[8px] object-cover",
              "max-w-[205px] xl:aspect-[205/150]",
            )}
          />
          <div className="flex flex-col gap-1">
            <p className={cn("text-16s text-gravel-25", "xl:text-20s")}>
              {Datas.certificate.title}
            </p>
            <div className="flex gap-2">
              <span className={cn("text-14r text-gravel-100", "xl:text-18r")}>Lecturer: </span>
              <span className={cn("text-14r text-white-footer", "xl:text-18r")}>
                {Datas.certificate.lecturer}
              </span>
            </div>
            <a
              className={cn(
                "text-14m text-yellow underline decoration-solid underline-offset-1",
                "xl:text-18m",
              )}
              href={Datas.certificate.link}
              target="_blank"
            >
              Link to Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeNew;
