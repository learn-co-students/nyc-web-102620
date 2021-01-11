// every component can receive data from its parents
// via props!
function ProjectItem(props) {
  console.log(props);
  // props.aFunction();
  return <h1>{props.name}</h1>;
}

export default ProjectItem;
