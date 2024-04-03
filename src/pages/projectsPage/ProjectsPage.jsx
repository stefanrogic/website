import "./projectsPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

const ProjectsPage = ({ getUrl }) => {
  return (
    <section>
      <PageNavigation position="/projects" backLink="/home" getUrl={getUrl} />
    </section>
  );
};

export default ProjectsPage;
