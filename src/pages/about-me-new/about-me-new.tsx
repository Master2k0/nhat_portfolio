import { cn } from "@/libs/utils";
import { AboutMeNew as Datas } from "@/configs/datas/about-me-new";
import ZoomableImage from "@/components/zoomable-image";
import Title from "@/components/title";

const AboutMeNew = () => {
  return (
    <div className={cn("flex flex-col px-4", "xl:mx-auto xl:max-w-[1040px] xl:px-0")}>
      {/* About me */}
      <div className="mt-8 flex flex-col gap-8 xl:mt-[60px] xl:gap-[100px]">
        <p className={cn("text-24b text-white-footer", "xl:text-60b")}>About me</p>
        <div className="flex flex-col gap-5 xl:flex-row">
          <Title value="Experience" className="mr-[108px] text-24b xl:w-[245px] xl:text-32b" />
          <div className="flex w-full flex-col gap-5 xl:gap-[60px]">
            <div className="flex w-full flex-col gap-4 xl:flex-row xl:gap-5">
              <div className="flex w-full flex-col gap-[6px] xl:max-w-[245px]">
                <p className="text-16b text-gravel-25 xl:text-32b">{Datas.experience.vng.title}</p>
                <div className="flex xl:flex-col xl:gap-3">
                  <p className="border-r border-gravel-800 pr-2 text-14r text-gravel-25 xl:border-0 xl:pr-0 xl:text-16m">
                    {Datas.experience.vng.timeline}
                  </p>
                  <p className="pl-2 text-14r text-gravel-300 xl:pl-0 xl:text-16r">
                    {Datas.experience.vng.position}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 xl:max-w-[422px] xl:gap-3">
                {Datas.experience.vng.content.map((contentGroup, groupIndex) =>
                  contentGroup.map((content, contentIndex) => (
                    <p
                      key={groupIndex + contentIndex}
                      className="text-12r text-gravel-300 xl:text-16r"
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    />
                  )),
                )}
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 xl:flex-row xl:gap-5">
              <div className="flex w-full flex-col gap-[6px] xl:max-w-[245px]">
                <p className="text-16b text-gravel-25 xl:text-32b">
                  {Datas.experience.buymed.title}
                </p>
                <div className="flex xl:flex-col xl:gap-3">
                  <p className="border-r border-gravel-800 pr-2 text-14r text-gravel-25 xl:border-0 xl:pr-0 xl:text-16m">
                    {Datas.experience.buymed.timeline}
                  </p>
                  <p className="pl-2 text-14r text-gravel-300 xl:pl-0 xl:text-16r">
                    {Datas.experience.buymed.position}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 xl:max-w-[422px] xl:gap-10">
                {Datas.experience.buymed.content.map((contentGroup, groupIndex) => (
                  <div className="flex flex-col gap-2 xl:gap-3">
                    {contentGroup.map((content, contentIndex) => (
                      <p
                        key={groupIndex + contentIndex}
                        className="text-12r text-gravel-300 xl:text-16r"
                        dangerouslySetInnerHTML={{
                          __html: content,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 xl:flex-row xl:gap-5">
              <div className="flex w-full flex-col gap-[6px] xl:max-w-[245px]">
                <p className="text-16b text-gravel-25 xl:text-32b">{Datas.experience.usum.title}</p>
                <div className="flex xl:flex-col xl:gap-3">
                  <p className="border-r border-gravel-800 pr-2 text-14r text-gravel-25 xl:border-0 xl:pr-0 xl:text-16m">
                    {Datas.experience.usum.timeline}
                  </p>
                  <p className="pl-2 text-14r text-gravel-300 xl:pl-0 xl:text-16r">
                    {Datas.experience.usum.position}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 xl:max-w-[422px] xl:gap-3">
                {Datas.experience.usum.content.map((contentGroup, groupIndex) =>
                  contentGroup.map((content, contentIndex) => (
                    <p
                      key={groupIndex + contentIndex}
                      className="text-12r text-gravel-300 xl:text-16r"
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    />
                  )),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="border-dash-custom w-full" data-type="separator" />
      </div>

      {/* Skills */}
      <div>
        <div className="mt-8 flex flex-col xl:mt-[100px] xl:flex-row xl:gap-0">
          <p
            className={cn(
              "text-20b text-white-footer",
              "mb-5 xl:mb-0 xl:mr-[108px] xl:w-[200px] xl:text-32b",
            )}
          >
            Skills
          </p>
          <div className="mb-5 flex flex-row items-center gap-2 xl:mb-0 xl:mr-5 xl:w-[245px] xl:flex-col xl:items-start">
            {Datas.tools.map((item, index) => (
              <>
                <p key={index} className={cn("text-14r text-gravel-300", "xl:text-16r")}>
                  {item}
                </p>
                {index !== Datas.tools.length - 1 && (
                  <div className="h-4 border-[0.5px] border-gravel-800 xl:hidden" />
                )}
              </>
            ))}
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-3 xl:mb-[100px] xl:flex-col xl:items-start">
            {Datas.skills.map((item, index) => (
              <>
                <p key={index} className={cn("text-14r text-gravel-300", "xl:text-16r")}>
                  {item}
                </p>
                {index % 2 === 0 && (
                  <div className="h-4 border-[0.5px] border-gravel-800 xl:hidden" />
                )}
              </>
            ))}
          </div>
        </div>
        <div className="border-dash-custom w-full" data-type="separator" />
      </div>
      {/* Achievement */}
      <div className={cn("xl:mt-[100px]", "mt-8")}>
        <p className={cn("text-20b text-white-footer", "mb-4 xl:mb-10 xl:w-[200px] xl:text-32b")}>
          Achievement
        </p>
        <div className="flex flex-col gap-5 xl:flex-row xl:flex-wrap">
          <div className={cn("flex flex-col gap-3", "xl:mb-0 xl:gap-8")}>
            <ZoomableImage
              src={Datas.certificate.image}
              alt="Certificate Image"
              className={cn(
                "aspect-[361/262] w-full rounded-[8px] object-cover",
                "xl:aspect-[205/150] xl:max-w-[510px]",
              )}
            />
            <div className="flex flex-col gap-2">
              <a
                className={cn("text-16s text-yellow", "xl:text-20s")}
                href={Datas.certificate.link}
                target="_blank"
              >
                {Datas.certificate.title}
              </a>
              <p className="text-14m text-gravel-300 xl:text-18m">{Datas.certificate.content}</p>
              <div className="flex gap-2">
                <span className={cn("text-14m text-gravel-300", "xl:text-18r")}>Lecturer: </span>
                <span className={cn("text-14m text-gravel-25", "xl:text-18r")}>
                  {Datas.certificate.lecturer}
                </span>
              </div>
            </div>
          </div>
          <div className={cn("flex flex-col gap-3", "xl:mb-0 xl:gap-8")}>
            <ZoomableImage
              src={Datas.education.image}
              alt="Education Image"
              className={cn(
                "aspect-[361/262] w-full rounded-[8px] object-cover",
                "xl:aspect-[205/150] xl:max-w-[510px]",
              )}
            />
            <div className="flex flex-col gap-2">
              <p className={cn("text-16s text-gravel-25", "xl:text-20s")}>
                {Datas.education.university}
              </p>
              <p className={cn("text-14m text-gravel-300", "xl:text-18m")}>
                {Datas.education.major}
              </p>
              <span className={cn("text-14r text-gravel-300", "xl:text-18r")}>
                Graduated{" "}
                <span className={cn("text-14s text-gravel-25", "xl:text-18s")}>
                  {Datas.education.year}
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeNew;
