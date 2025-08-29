import { cn } from "@/libs/utils"
import { AboutMeNew as Datas } from "@/configs/datas/about-me-new";

const AboutMeNew = () => {
  return (
    <div className={cn(
      "flex flex-col max-w-[1040px] mx-auto"
    )}>

      {/* About me */}
      <div className="flex flex-col gap-8 mt-8 lg:mt-[60px] lg:gap-[100px]">
        <p className={
          cn(
            "text-white-footer text-24b",
            "lg:text-60b"
          )
        }>About me</p>
        <div className="flex flex-col gap-3">
          {
            Datas.aboutme.map((item, index) => (
              <p key={index} className={cn(
                "text-14r text-gravel-25",
                "lg:text-16r"
              )}>{item}</p>
            ))
          }
        </div>
        <div className="border-dash-custom w-full lg:hidden" data-type="separator" />
      </div>

      {/* Tools */}
      <div className="mt-8 lg:mt-[100px] flex flex-col lg:flex-row lg:gap-[120px]">
        <p className={cn(
          "text-white-footer text-20b  ",
          "lg:text-32b lg:w-[200px] mb-4 lg:mb-0"
        )}>Tools</p>
        <div className="flex flex-col gap-3 mb-8 lg:mb-0">
          {
            Datas.tools.map((item, index) => (
              <p key={index} className={cn(
                "text-14r text-gravel-25",
                "lg:text-16r"
              )}>{item}</p>
            ))
          }
        </div>
        <div className="border-dash-custom w-full lg:hidden " data-type="separator" />
      </div>
      {/* Kills */}
      <div className="mt-8 lg:mt-[100px] flex flex-col lg:flex-row lg:gap-[120px]">
        <p className={cn(
          "text-white-footer text-20b  ",
          "lg:text-32b lg:w-[200px] mb-4 lg:mb-0"
        )}>Skills</p>
        <div className="flex flex-col gap-3 mb-8 lg:mb-0">
          {
            Datas.skills.map((item, index) => (
              <p key={index} className={cn(
                "text-14r text-gravel-25",
                "lg:text-16r"
              )}>{item}</p>
            ))
          }
        </div>
        <div className="border-dash-custom w-full lg:hidden " data-type="separator" />
      </div>
      {/* Education*/}
      <div className="mt-8 lg:mt-[100px] flex flex-col lg:flex-row lg:gap-[120px]">
        <p className={cn(
          "text-white-footer text-20b  ",
          "lg:text-32b lg:w-[200px] mb-4 lg:mb-0"
        )}>Education</p>
        <div className={
          cn(
            "flex flex-col gap-3 mb-8 ",
            "lg:mb-0 lg:flex-row lg:gap-8"
          )
        }>
          <img className={cn(
            "w-full aspect-[361/262] object-cover rounded-[8px]",
            "lg:aspect-[205/150] max-w-[205px]"
          )} src={Datas.education.image} alt="" />
          <div className="flex flex-col gap-1">
            <p className={cn(
              "text-gravel-25 text-16s",
              "lg:text-20s"
            )}>{Datas.education.university}</p>
            <p className={cn(
              "text-gravel-100 text-14m",
              "lg:text-18m"
            )}>{Datas.education.major}</p>
            <span className={cn(
              "text-gravel-100 text-14m",
              "lg:text-18m"
            )}>Graduated <span className={
              cn(
                "text-gravel-25 text-14s",
                "lg:text-18s"
              )
            }>{Datas.education.year}</span> </span>

          </div>
        </div>
        <div className="border-dash-custom w-full lg:hidden " data-type="separator" />
      </div>
      {/* Certificate */}
      <div className="mt-8 lg:mt-[100px] flex flex-col lg:flex-row lg:gap-[120px] ">
        <p className={cn(
          "text-white-footer text-20b  ",
          "lg:text-32b lg:w-[200px] mb-4 lg:mb-0"
        )}>Certificate</p>
        <div className={
          cn(
            "flex flex-col gap-3 mb-8 ",
            "lg:mb-0 lg:flex-row lg:gap-8"
          )
        }>
          <img className={cn(
            "w-full aspect-[361/262] object-cover rounded-[8px]",
            "lg:aspect-[205/150] max-w-[205px]"
          )} src={Datas.certificate.image} alt="" />
          <div className="flex flex-col gap-1">
            <p className={cn(
              "text-gravel-25 text-16s",
              "lg:text-20s"
            )}>{Datas.certificate.title}</p>
            <div className="flex gap-2">
              <span className={cn(
                "text-gravel-100 text-14r",
                "lg:text-18r"
              )}>Lecturer: </span>
              <span className={
                cn(
                  "text-white-footer text-14r",
                  "lg:text-18r"
                )
              }>{Datas.certificate.lecturer}</span>
            </div>
            <a className={cn(
              "text-14m text-underline-gradient  ",
              "lg:text-18m"
            )}
              href={Datas.certificate.link}
              target="_blank"
            >Link to Certificate</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMeNew
