import "./pageNavigation.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNavigation = ({ position, backLink }) => {
  return (
    <motion.div className="page-navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}>
      <Link className="text-link" to={backLink}>
        <img
          src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-back.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy1iYWNrLnN2ZyIsImlhdCI6MTcxNzc2MTkzNCwiZXhwIjo0ODcxMzYxOTM0fQ.a4zb54M6NkWtYFmdx1rYYGv-sKeaExcsv8QSwcXj8BY&t=2024-06-07T12%3A05%3A34.513Z"
          alt="arrow-back"
        />
        GO BACK
      </Link>
      <span>{position}</span>
    </motion.div>
  );
};

export default PageNavigation;
