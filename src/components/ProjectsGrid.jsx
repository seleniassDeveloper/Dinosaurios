import projects from "../data/projects.json";
import ProjectHighlight from "./ProjectHighlight";

export default function ProjectsGrid(){
  return (
    <section className="">
      <div className="">
        <div className="kicker">Proyectos en curso</div>
        <div className="projects-grid">
          {projects.map((p,i)=>(
            <ProjectHighlight key={i} {...p} right={i%2===1}/>
          ))}
        </div>
      </div>
    </section>
  );
}