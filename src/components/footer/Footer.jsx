import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <ContentRevealSuper>
        <p>© 2024 Stefan Rogić</p>
        <p>
          Built using <a href="#">React</a>, <a href="#">Sass</a> and <a href="#">Framer Motion</a>.
        </p>
      </ContentRevealSuper>
    </footer>
  );
};

export default Footer;
