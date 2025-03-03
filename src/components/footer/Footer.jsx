import "./footer.scss";

import ContentRevealSuper from "../contentReveal/ContentRevealSuper";

const Footer = () => {
  return (
    <footer>
      <ContentRevealSuper>
        <p>© 2025 Stefan Rogić</p>
        <p>
          Built using <a href="#">React</a>, <a href="#">Sass</a> and <a href="#">Framer Motion</a>.
        </p>
      </ContentRevealSuper>
    </footer>
  );
};

export default Footer;
