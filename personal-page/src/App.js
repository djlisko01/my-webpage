import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/myNavBar";
import HomePage from "./components/pages/homepage";
import AboutMe from "./components/pages/about-me";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <HomePage />
      </header>
      <div>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
