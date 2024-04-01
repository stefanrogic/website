import "./contactSection.scss";

const ContactSection = ({ getUrl }) => {
  return (
    <section id="contact_section">
      <div className="heading-container row-reverse">
        <h1>CONTACT</h1>
        <div className="heading-line"></div>
      </div>

      <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</p>

      <form>
        <div className="form-row">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
      </form>
    </section>
  );
};

export default ContactSection;
