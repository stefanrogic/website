import "./contactSection.scss";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { useState } from "react";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const ContactSection = () => {
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
        <ContentRevealSuper>
          <h1>CONTACT</h1>
        </ContentRevealSuper>

        <HeadingLine />
      </div>

      <ContentRevealSuper>
        <p>Feel free to contact me using the form below or by sending me an email if you have any questions or if you wish to work with me.</p>
      </ContentRevealSuper>

      <div className="form">
        <div className="form-row">
          <ContentRevealSuper width="100%">
            <input type="text" placeholder="Your name" name="name" onChange={(e) => handleInputChange(e, "name")} required />
          </ContentRevealSuper>
          <ContentRevealSuper width="100%">
            <input type="email" placeholder="Your email" name="email" onChange={(e) => handleInputChange(e, "email")} required />
          </ContentRevealSuper>
        </div>

        <ContentRevealSuper width="100%">
          <input type="text" placeholder="Subject" name="subject" onChange={(e) => handleInputChange(e, "subject")} required />
        </ContentRevealSuper>
        <ContentRevealSuper width="100%">
          <textarea cols="30" rows="10" placeholder="Message" name="message" onChange={(e) => handleInputChange(e, "message")} required></textarea>
        </ContentRevealSuper>
        <div className="form-row bottom-row">
          <ContentRevealSuper>
            <button
              onClick={() => {
                if (formFields.name.length !== 0 || formFields.email.length !== 0 || formFields.subject.length !== 0 || formFields.message.length !== 0) {
                  emailjs.init("LbOf6uX1O4rSRpoN_");
                  emailjs.send("service_jet6xln", "template_vrs5by3", formFields);
                  toast.success("Message sent!");
                } else toast.error("Please fill in all fields.");
              }}
            >
              SEND MESSAGE
            </button>
          </ContentRevealSuper>
          <ContentRevealSuper>
            <a href="mailto: stefanrogic@protonmail.com" className="not-button">
              <img src="/icons/arrow-up.svg" alt="arrow-up" />
              OR SEND ME AN EMAIL
            </a>
          </ContentRevealSuper>
        </div>
      </div>

      <ContentRevealSuper width="100%">
        <div className="socials-container">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank" className="not-button">
            <img src="/icons/linkedin-icon.svg" alt="linkedin-icon" />
            linkedin.com/in/stefanrogic
          </a>
          <div className="line-seperator"></div>
          <a href="https://github.com/stefanrogic" target="_blank" className="not-button">
            <img src="/icons/github-icon.svg" alt="github-icon" />
            github.com/stefanrogic
          </a>
        </div>
      </ContentRevealSuper>
    </section>
  );
};

export default ContactSection;
