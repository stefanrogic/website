import "./featuredProjectCard.scss";

import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";

const FeaturedProjectCard = ({ projectData }) => {
  return (
    <div className="featured-project-card">
      <div className="project-content">
        <Link to={`/projects/${projectData?.slug}`}>
          <div className="project-left">
            <ContentRevealSuper>
              <h2>{projectData?.title}</h2>
            </ContentRevealSuper>
            <ContentRevealSuper>
              <p>{projectData?.sub_title}</p>
            </ContentRevealSuper>
          </div>
        </Link>

        <div className="project-right">
          {projectData?.demo_url && (
            <ContentRevealSuper>
              <a href={projectData?.demo_url} target="_blank" onClick={() => projectData.demo_url === null && toast.error("Work in progress.")}>
                <button>
                  <img
                    src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/demo-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9kZW1vLWljb24uc3ZnIiwiaWF0IjoxNzE3NzY1NTIxLCJleHAiOjQ4NzEzNjU1MjF9.3aKuyMpCHRWSh2IJKuQ8y6NB-YI71QsnyTTmQZ61AqA&t=2024-06-07T13%3A05%3A21.792Z"
                    alt="demo-icon"
                  />
                  DEMO
                </button>
              </a>
            </ContentRevealSuper>
          )}
          <ContentRevealSuper>
            <a href={projectData?.source_url} target="_blank">
              <button style={{ textDecoration: "none" }}>
                <img
                  src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/github-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9naXRodWItaWNvbi5zdmciLCJpYXQiOjE3MTc3NjU0ODQsImV4cCI6NDg3MTM2NTQ4NH0.BWztiGfYn7UlFuYNeH9uCfZoMxV-VKfJAHBY0ebdmqo&t=2024-06-07T13%3A04%3A44.840Z"
                  alt="github-icon"
                />
                CODE
              </button>
            </a>
          </ContentRevealSuper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
