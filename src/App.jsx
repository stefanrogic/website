import "./App.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  // const getUrl = (fileName) => new URL(`/public/images/${fileName}`, import.meta.url).href;

  return (
    <>
      <Navbar />
      <section className="home">
        <h1>Stefan Rogić</h1>
        <h3>Frontend Developer</h3>
        <div className="hero-buttons">
          <button className="button-primary">Projects</button>
          <button className="button-secondary">Contact</button>
        </div>
      </section>
    </>
  );
}

export default App;
