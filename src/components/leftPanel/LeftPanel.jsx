import "./leftPanel.scss";

import { useState } from "react";

const LeftPanel = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="left-panel">
      <a className="logo" href="#">
        /Sr
      </a>
      <div className="nav-links">
        {["Home", "About", "Projects", "Contact"].map((content, i) => (
          <div className="link" key={content + i}>
            {selected === i && <div className="link-selector"></div>}
            <a href="#" onClick={() => setSelected(i)}>
              {content}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
