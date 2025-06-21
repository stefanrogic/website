import "./contactSection.scss";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { useState } from "react";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import { Button, Link, HeadingContainer } from "../ui";
import { SOCIAL_LINKS } from "../../constants";

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

  const handleSendMessage = () => {
    if (formFields.name.length !== 0 || formFields.email.length !== 0 || formFields.subject.length !== 0 || formFields.message.length !== 0) {
      emailjs.init("LbOf6uX1O4rSRpoN_");
      emailjs.send("service_jet6xln", "template_vrs5by3", formFields);
      toast.success("Message sent!");
    } else toast.error("Please fill in all fields.");
  };

  return (
    <section id="contact_section">
      <HeadingContainer title="CONTACT" variant="row-reverse" />

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
            <Button
              onClick={handleSendMessage}
              variant="primary"
              noZoom={true}
            >
              SEND MESSAGE
            </Button>
          </ContentRevealSuper>
          <ContentRevealSuper>
            <Link 
              href="mailto:stefanrogic@protonmail.com"
              icon="/icons/arrow-up.svg"
              variant="text"
              noZoom={true}
            >
              OR SEND ME AN EMAIL
            </Link>
          </ContentRevealSuper>
        </div>
      </div>

      <ContentRevealSuper width="100%">
        <div className="socials-container">
          <Link 
            href={SOCIAL_LINKS.LINKEDIN}
            icon="/icons/linkedin-icon.svg"
            variant="text"
            noZoom={true}
            target="_blank"
          >
            linkedin.com/in/stefanrogic
          </Link>
          <div className="line-seperator"></div>
          <Link 
            href={SOCIAL_LINKS.GITHUB}
            icon="/icons/github-icon.svg"
            variant="text"
            noZoom={true}
            target="_blank"
          >
            github.com/stefanrogic
          </Link>
        </div>
      </ContentRevealSuper>
    </section>
  );
};

export default ContactSection;
