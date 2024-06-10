import "./pageNavigation.scss";

import { Link } from "react-router-dom";

const PageNavigation = ({ position, backLink }) => {
  return (
    <div className="page-navigation">
      <Link className="text-link not-button" to={backLink}>
        <img
          src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-back.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy1iYWNrLnN2ZyIsImlhdCI6MTcxNzc2MTkzNCwiZXhwIjo0ODcxMzYxOTM0fQ.a4zb54M6NkWtYFmdx1rYYGv-sKeaExcsv8QSwcXj8BY&t=2024-06-07T12%3A05%3A34.513Z"
          alt="arrow-back"
        />
        GO BACK
      </Link>
      <span>{position}</span>
    </div>
  );
};

export default PageNavigation;
