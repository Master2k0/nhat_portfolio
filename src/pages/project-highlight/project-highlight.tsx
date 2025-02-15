import ProjectCard from "@/components/project-card";
import { ProjectHighLights } from "@/configs/datas/project-highlight";
import { Outlet } from "react-router-dom";
function ProjectHighlight() {
  return (
    <main className="container mx-auto flex flex-col gap-8 3xl:gap-10">
      <h1 className="3xl:text-40b text-center text-18s font-semibold text-gravel-25 xl:text-left xl:text-32b">
        Project HighLights
      </h1>
      <div className="grid gap-5 md:grid-cols-2 xl:z-[1] xl:grid-cols-3 xl:gap-6 3xl:gap-x-8 3xl:gap-y-10">
        {ProjectHighLights.map((project) => (
          <ProjectCard key={project.id} className="w-full !flex-1" {...project} />
        ))}
      </div>
      <Outlet />
    </main>
  );
}
export default ProjectHighlight;
