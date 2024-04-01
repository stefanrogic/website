import "./navbar.scss";

const Navbar = ({ getUrl }) => {
  return (
    <header id="navbar">
      <div className="header-top">
        <a href="#">
          <img className="signature" src={getUrl("icons/signature.svg")} alt="signature" />
        </a>

        <img className="theme-icon" src={getUrl("icons/moon-icon.svg")} alt="theme-icon" onClick={() => console.log("theme-change")} />
        <a href="#">
          <img src={getUrl("icons/frontend-developer.svg")} alt="frontend-developer" />
        </a>
      </div>

      <nav>
        <div>
          <a href="#">ABOUT ME</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </div>

        <div className="socials-container">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <img src={getUrl("icons/linkedin-icon.svg")} alt="frontend-developer" />
          </a>
          <a href="https://github.com/stefanrogic" target="_blank">
            <img src={getUrl("icons/github-icon.svg")} alt="frontend-developer" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
