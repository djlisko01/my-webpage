import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/myNavBar";
import HomePage from "./components/pages/homepage";
import AboutMe from "./components/pages/about-me";
import Resume from "./components/pages/resume";
import Projects from "./components/pages/projects";
import { useEffect, useState } from "react";
// import { API } from "./components/utils";

function App() {
  // States

  const [resume, setResume] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/my_api/resume/")
      .then((resp) => resp.json())
      .then((data) => setResume(data));
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
        <Projects />
      </div>
    </div>
  );
}

export default App;
