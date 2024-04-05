import "./projectPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectPage = ({ getUrl }) => {
  const { id } = useParams();

  return (
    <section>
      <PageNavigation position={`/projects/${id}`} backLink="/home" getUrl={getUrl} />
      <motion.p initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        This is project {id}
      </motion.p>
    </section>
  );
};

export default ProjectPage;
