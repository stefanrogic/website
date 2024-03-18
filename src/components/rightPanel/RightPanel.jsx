import "./rightPanel.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const RightPanel = () => {
  return (
    <div className="app-right">
      <div className="social-links">
        {[
          { icon: <GitHubIcon />, text: "GitHub" },
          { icon: <LinkedInIcon />, text: "LinkedIn" },
        ].map((link, i) => (
          <a key={link.text + i} className="social-link-div">
            {link.icon}
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
