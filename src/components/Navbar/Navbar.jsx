import "./navbar.scss";

const Navbar = () => {
  const getUrl = (fileName) => new URL(`/public/images/${fileName}`, import.meta.url).href;

  return (
    <header>
      <img src={getUrl("moon-icon.svg")} alt="theme-icon" />
      <img src={getUrl("signature.svg")} alt="signature" />
      <h2>FRONTEND DEVELOPER</h2>
      <nav>
        <div>
          <a href="#">ABOUT ME</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </div>
        <div>
          <a href="#">L</a>
          <a href="#">GH</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
