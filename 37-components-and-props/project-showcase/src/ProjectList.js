import ProjectItem from "./ProjectItem";
import projects from "./data";

function ProjectList() {
  // const projects = [
  //   "ChubChub's Bakery",
  //   "Cycle Heaven",
  //   "Kitchen",
  //   "Rate My Instructor",
  //   "Hotreads",
  // ];

  const obj = { pizza: "lunch" };

  function callMe() {
    console.log("called");
  }

  const projectItemComponents = projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} />;
  });

  console.log(projectItemComponents);

  return (
    <div>
      <h1>ProjectList</h1>
      {projectItemComponents}
    </div>
  );
}

export default ProjectList;
