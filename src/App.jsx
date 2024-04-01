import { Toaster } from "react-hot-toast";
import "./App.scss";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const getUrl = (fileName) => new URL(`/public/${fileName}`, import.meta.url).href;

  return (
    <div className="App">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: "1px solid #414141",
            padding: "15px 100px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "rgb(27, 27, 27)",
          },
        }}
      />
      <HomePage getUrl={getUrl} />
    </div>
  );
}

export default App;
