import "./projectPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectPage = ({ getUrl }) => {
  const { id } = useParams();

  return (
    <section>
      <PageNavigation position={`/projects/${id}`} backLink="/home" getUrl={getUrl} />
      <motion.p initial={{ rotate: 15 }} animate={{ rotate: 0 }}>
        This is project {id}
      </motion.p>
    </section>
  );
};

export default ProjectPage;
