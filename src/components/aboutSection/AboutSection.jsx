import "./aboutSection.scss";

const AboutSection = ({ getUrl }) => {
  return (
    <section id="about_section">
      <p>
        Hello, my name is <span>Stefan</span>. There are many variations of passages of <span>Lorem Ipsum</span> available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
      </p>

      <p>
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>

      <button>
        <img src={getUrl("icons/arrow-up.svg")} alt="arrow-up" />
        MORE DETAILS
      </button>
    </section>
  );
};

export default AboutSection;
