import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "./../utils/projects.json"

export default function Projects() {
    return (
      <>
        <Navbar></Navbar>
        <div className="bg-blue-200 min-h-screen py-12">
          <div className="sm:flex sm:justify-center sm:flex-wrap sm:flex-col sm:align-middle">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.name}
                  img={project.img}
                  url={project.url}
                  name={project.name}
                  description={project.description}
                />
              );
            })}
          </div>
        </div>
      </>
    );
}