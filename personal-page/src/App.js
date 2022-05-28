import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/myNavBar";
import HomePage from "./components/pages/homepage";
import AboutMe from "./components/pages/about-me";
import Resume from "./components/pages/resume";
import Projects from "./components/pages/projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <HomePage />
      </header>
      <div>
        <AboutMe />
        <Resume />
        <Projects />
      </div>
    </div>
  );
}

export default App;
