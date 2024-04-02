import "./projectsPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

const ProjectsPage = ({ getUrl }) => {
  return (
    <section>
      <PageNavigation position="/projects" backLink="/" getUrl={getUrl} />
    </section>
  );
};

export default ProjectsPage;
