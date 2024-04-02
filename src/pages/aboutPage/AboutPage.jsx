import PageNavigation from "../../components/pageNavigation/PageNavigation";
import "./aboutPage.scss";

const AboutPage = ({ getUrl }) => {
  return (
    <section>
      <PageNavigation position="/about-me" backLink="/" getUrl={getUrl} />
    </section>
  );
};

export default AboutPage;
