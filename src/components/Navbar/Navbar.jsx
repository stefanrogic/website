import "./navbar.scss";

const Navbar = () => {
  const getUrl = (fileName) => new URL(`/public/images/${fileName}`, import.meta.url).href;

  return (
    <header>
      <div className="header-top">
        <img className="signature" src={getUrl("signature.svg")} alt="signature" />

        <img className="theme-icon" src={getUrl("moon-icon.svg")} alt="theme-icon" onClick={() => console.log("theme-change")} />
        <a href="#">
          <img src={getUrl("frontend-developer.png")} alt="frontend-developer" />
        </a>
      </div>

      <nav>
        <div>
          <a href="#">ABOUT ME</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <img src={getUrl("linkedin-icon.svg")} alt="frontend-developer" />
          </a>
          <a href="https://github.com/stefanrogic" target="_blank">
            <img src={getUrl("github-icon.svg")} alt="frontend-developer" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
