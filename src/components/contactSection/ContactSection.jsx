import "./contactSection.scss";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { useState } from "react";

const ContactSection = ({ getUrl }) => {
  const [formFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // setFormFields((prev) => (prev[input] = e.target.value)
  const handleInputChange = (e, input) => {
    formFields[input] = e.target.value;
  };

  return (
    <section id="contact_section">
      <div className="heading-container row-reverse">
        <h1>CONTACT</h1>
        <div className="heading-line"></div>
      </div>

      <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</p>

      <div className="form">
        <div className="form-row">
          <input type="text" placeholder="Your name" name="name" onChange={(e) => handleInputChange(e, "name")} required />
          <input type="email" placeholder="Your email" name="email" onChange={(e) => handleInputChange(e, "email")} required />
        </div>
        <input type="text" placeholder="Subject" name="subject" onChange={(e) => handleInputChange(e, "subject")} required />
        <textarea cols="30" rows="10" placeholder="Message" name="message" onChange={(e) => handleInputChange(e, "message")} required></textarea>
        <div className="form-row">
          <button
            onClick={() => {
              console.log(formFields);
              emailjs.init("LbOf6uX1O4rSRpoN_");
              emailjs.send("service_jet6xln", "template_vrs5by3", formFields);
              toast.success("Message sent!");
            }}
          >
            SEND MESSAGE
          </button>
          <a href="mailto: stefanrogic@protonmail.com">
            <img src={getUrl("icons/arrow-up.svg")} alt="arrow-up" />
            OR SEND ME AN EMAIL
          </a>
        </div>
      </div>

      <div className="socials-container">
        <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
          <img src={getUrl("icons/linkedin-icon.svg")} alt="frontend-developer" />
          linkedin.com/in/stefanrogic
        </a>
        <div className="line-seperator"></div>
        <a href="https://github.com/stefanrogic" target="_blank">
          <img src={getUrl("icons/github-icon.svg")} alt="frontend-developer" />
          github.com/stefanrogic
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
