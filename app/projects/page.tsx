
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
    <>
        <h1 className="text-center mb-8 outline-text text-blue-200 text-5xl dark:text-slate-600 font-bold">
          PROJECTS
        </h1>
        <div className="sm:flex sm:justify-center sm:flex-wrap sm:flex-col sm:align-middle mx-4">
          {projects.map((project:Project) => {
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
    </>
  );
}
