import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Stefan Rogić</h1>
      <h3>Frontend Developer</h3>
      <div className="hero-buttons">
        <a href="#" className="button-primary">
          Projects
        </a>
        <a href="#" className="button-secondary">
          Contact
        </a>
      </div>
      <p>Open to work</p>
    </div>
  );
};

export default HomePage;
