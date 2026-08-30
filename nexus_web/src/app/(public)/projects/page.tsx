import { getProjects } from "@/lib/data";
import { ProjectItem } from "@/types";
import type { Metadata } from "next";
import ProjectsContent from "./projects-content";

export const metadata: Metadata = {
  title: "Projects Showcase",
  description: "Explore software platforms, IoT hardware, and AI tools built by NEXUS members at RIT.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsContent projects={projects} />;
}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <Card key={project.id} hoverable className="flex flex-col justify-between bg-[#0a0a0e] border-[#1f1f2c]">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="accent">{project.category}</Badge>
                  <span className="text-xs font-mono text-zinc-500">{project.completedYear}</span>
                </div>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <p className="text-xs font-mono text-blue-400">{project.tagline}</p>
                <CardDescription className="text-xs text-zinc-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#1c1c27] flex items-center justify-between text-xs">
                  <div className="text-zinc-500 text-[11px] font-mono">
                    {project.contributors.length} Contributor{project.contributors.length > 1 ? "s" : ""}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white font-mono flex items-center gap-1"
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1"
                      >
                        Live
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
