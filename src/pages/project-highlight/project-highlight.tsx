import { ProjectHighLights } from "@/configs/datas/project-highlight";
import ProjectCard from "./components/project-card";

function ProjectHighlight() {
  return (
    <main className="container pb-10 pt-5">
      <h1 className="text-lg text-f7 text-center font-semibold">Project HighLights</h1>
      <div className="mt-8 flex flex-col items-center space-y-6">
        {ProjectHighLights.map((project) => (
          <ProjectCard key={project.id} className="w-full !flex-1" {...project} />
        ))}
      </div>
    </main>
  );
}
export default ProjectHighlight;
