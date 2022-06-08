import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/myNavBar";
import HomePage from "./components/pages/homepage";
import AboutMe from "./components/pages/about-me";
import Resume from "./components/pages/resume";
import Projects from "./components/pages/projects";
import { useEffect, useState } from "react";
import { API } from "./components/utils";

function App() {
  // States
  const [resume, setResume] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.getResume("resume").then((data) => setResume(data));
    API.getResume("projects").then((data) => setProjects(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <HomePage />
      </header>
      <div>
        <AboutMe />
        <Resume resume={resume} />
        <Projects projects={projects} />
      </div>
    </div>
  );
}

export default App;
