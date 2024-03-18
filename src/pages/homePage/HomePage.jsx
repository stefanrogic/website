import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home" id="home">
      <h1>Stefan Rogić</h1>
      <h3>Frontend Developer</h3>
      <div className="hero-buttons">
        <a href="#">
          <button className="button-primary">Projects</button>
        </a>
        <a href="#">
          <button className="button-secondary">Contact</button>
        </a>
      </div>
      <p>Open to work</p>
    </div>
  );
};

export default HomePage;
