import "./App.css";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// react component!
// - capital letter
// - returns JSX (JavaScript XML)

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
