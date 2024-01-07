import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "./../utils/projects.json"
import './../globals.css'

export default function Projects() {
    return (
      <>
        <div className="bg-blue-200 min-h-screen py-12">
          <h1 className="text-center mb-8 outline-text text-blue-200 text-5xl">PROJECTS</h1>
          <div className="sm:flex sm:justify-center sm:flex-wrap sm:flex-col sm:align-middle mx-4">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.name}
                  img={project.img}
                  url={project.url}
                  name={project.name}
                  description={project.description}
                  gh={project.gh}
                />
              );
            })}
          </div>
        </div>
      </>
    );
}