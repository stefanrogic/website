import "./App.scss";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";
import HomePage from "./pages/homePage/HomePage";

function App() {
  // const getUrl = (fileName) => new URL(`/public/images/${fileName}`, import.meta.url).href;

  return (
    <div className="App">
      <LeftPanel />
      <HomePage />
      <RightPanel />
    </div>
  );
}

export default App;
