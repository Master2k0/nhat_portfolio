import { ProjectHighLights } from "@/configs/datas/project-highlight";
import ProjectCard from "./components/project-card";

function ProjectHighlight() {
  return (
    <main className="container pb-10 pt-5 flex flex-col gap-8">
      <h1 className="text-18s text-gravel-25 text-center font-semibold">Project HighLights</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ProjectHighLights.map((project) => (
          <ProjectCard key={project.id} className="w-full !flex-1" {...project} />
        ))}
      </div>
    </main>
  );
}
export default ProjectHighlight;
