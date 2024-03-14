import "./App.scss";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";

function App() {
  // const getUrl = (fileName) => new URL(`/public/images/${fileName}`, import.meta.url).href;

  return (
    <div className="App">
      <LeftPanel />
      <div className="content">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
      <RightPanel />
    </div>
  );
}

export default App;
