import ProjectCardNew from "@/components/project-card-new"
import { OtherProjects } from "@/configs/datas/other-projects"
import { cn } from "@/libs/utils"

const OrtherProjects = () => {
  return (
    <div className={
      cn(
        " py-8 flex flex-col gap-8 mx-auto px-4",
        " lg:py-[100px] lg:gap-[100px] lg:max-w-[1048px]  lg:p-2"
      )
    }>
      <p className={cn(
        "text-white-footer text-24b",
        "lg:text-60b"
      )}>Other projects</p>
      <div className={cn(
        "grid grid-cols-1 gap-6  ",
        "lg:grid-cols-2 lg:gap-10 "

      )}>
        {OtherProjects.projects.map((item, index) => (
          <div className="" key={index}>
            <ProjectCardNew item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrtherProjects
