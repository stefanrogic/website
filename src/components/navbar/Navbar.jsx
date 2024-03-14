import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <a className="logo" href="#">
        /Stefan
      </a>
      <nav>
        {["Home", "About", "Projects", "Contact"].map((content, i) => (
          <div className="link" key={content + i}>
            {selected === i && <div className="link-selector"></div>}
            <a href="#" onClick={() => setSelected(i)}>
              {content}
            </a>
          </div>
        ))}
      </nav>

      <div className="social-links">
        <a href="#">Github</a>
        <a href="#">Linkedin</a>
      </div>
    </>
  );
};

export default Navbar;
