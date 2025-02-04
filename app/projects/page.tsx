
import ProjectCard from "../components/ProjectCard";
import "./../globals.css";


interface Project {
  demo: string;
  sourceCode: string;
  name: string;
  description: string;
  id: string;
  image: [
    {
      url: string
    }
  ];
}

async function getProjects() {
  const response = await fetch(process.env.API_ENDPOINT!, {
    next: { revalidate: 10 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Projects {
  projects {
    demo
    description
    id
    name
    sourceCode
    image {
      url
    }
  }
}`,
    }),
  });
  const json = await response.json();

  return json.data.projects;
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="py-6">
        <h1 className="py-16 outline-text text-blue-200 text-5xl dark:text-slate-400 font-bold z-10 relative text-center">
          PROJECTS
        </h1>
      <div className="sm:flex sm:justify-center sm:flex-wrap sm:align-middle mx-4">
        {projects.map((project: Project) => {
          return (
            <ProjectCard
              key={project.id}
              img={project.image[0].url}
              url={project.demo}
              name={project.name}
              description={project.description}
              gh={project.sourceCode}
            />
          );
        })}
      </div>
    </div>
  );
}
