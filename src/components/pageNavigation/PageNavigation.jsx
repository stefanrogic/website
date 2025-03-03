import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import "./pageNavigation.scss";

import { Link } from "react-router-dom";

const PageNavigation = ({ position, backLink }) => {
  return (
    <div className="page-navigation">
      <ContentRevealSuper>
        <Link className="text-link not-button" to={backLink}>
          <img src="/icons/arrow-back.svg" alt="arrow-back" />
          BACK
        </Link>
      </ContentRevealSuper>
      <ContentRevealSuper>
        <span>{position}</span>
      </ContentRevealSuper>
    </div>
  );
};

export default PageNavigation;
