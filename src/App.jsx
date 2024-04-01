import "./App.scss";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const getUrl = (fileName) => new URL(`/public/${fileName}`, import.meta.url).href;

  return (
    <div className="App">
      <HomePage getUrl={getUrl} />
    </div>
  );
}

export default App;
