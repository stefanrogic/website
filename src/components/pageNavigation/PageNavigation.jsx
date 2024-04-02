import "./pageNavigation.scss";

import { Link } from "react-router-dom";

const PageNavigation = ({ position, backLink, getUrl }) => {
  return (
    <div className="page-navigation">
      <Link to={backLink}>
        <img src={getUrl("icons/arrow-up.svg")} alt="arrow-up" />
        GO BACK
      </Link>
      <span>{position}</span>
    </div>
  );
};

export default PageNavigation;
