import "./aboutPage.scss";

const AboutPage = ({ getUrl }) => {
  return (
    <div className="about" id="about">
      <div className="image-container">
        <img src={getUrl("about-img.png")} alt="about-img" />
      </div>
      <h3>FRONTEND DEVELOPER WITH 2 YEARS OF HANDS-ON EXPERIENCE IN CRAFTING DYNAMIC AND USER-CENTRIC WEBSITES.</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum ex eaque, nesciunt adipisci sed explicabo aspernatur quibusdam tempore fugiat nostrum a delectus aperiam dignissimos suscipit sit. Error beatae nobis doloribus, at, debitis
        eos, cumque tenetur rerum vel magnam quam. <span>Enim aliquid aliquam</span> culpa hic at beatae numquam fugiat non totam sed cum minima sunt, tempora consequatur tempore quae tenetur corrupti quam dicta voluptates ex a exercitationem
        consequuntur quasi. Iusto, quisquam a! Expedita in tempore dolore error ratione minus earum doloribus deserunt temporibus perspiciatis similique dolorum deleniti.
      </p>
    </div>
  );
};

export default AboutPage;
