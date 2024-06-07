import "./contactSection.scss";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { useState } from "react";

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
        <h1>CONTACT</h1>
        <div className="heading-line"></div>
      </div>

      <p>Feel free to contact me using the form below or by sending me an email if you have any questions or if you wish to work with me.</p>

      <div className="form">
        <div className="form-row">
          <input type="text" placeholder="Your name" name="name" onChange={(e) => handleInputChange(e, "name")} required />
          <input type="email" placeholder="Your email" name="email" onChange={(e) => handleInputChange(e, "email")} required />
        </div>
        <input type="text" placeholder="Subject" name="subject" onChange={(e) => handleInputChange(e, "subject")} required />
        <textarea cols="30" rows="10" placeholder="Message" name="message" onChange={(e) => handleInputChange(e, "message")} required></textarea>
        <div className="form-row bottom-row">
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
          <a href="mailto: stefanrogic@protonmail.com">
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjU2ODIsImV4cCI6NDg3MTM2NTY4Mn0.sKT7Gz29KKbURxKNVzMnRqNfsHcf7W33UyHERzys020&t=2024-06-07T13%3A08%3A02.495Z"
              alt="arrow-up"
            />
            OR SEND ME AN EMAIL
          </a>
        </div>
      </div>

      <div className="socials-container">
        <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
          <img
            src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/linkedin-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9saW5rZWRpbi1pY29uLnN2ZyIsImlhdCI6MTcxNzc2NTcwMywiZXhwIjo0ODcxMzY1NzAzfQ.KxQql90TRpDamAlsISH2pz6AjSsYZgaV7puB-W-g3M0&t=2024-06-07T13%3A08%3A23.323Z"
            alt="linkedin-icon"
          />
          linkedin.com/in/stefanrogic
        </a>
        <div className="line-seperator"></div>
        <a href="https://github.com/stefanrogic" target="_blank">
          <img
            src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/github-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9naXRodWItaWNvbi5zdmciLCJpYXQiOjE3MTc3NjU0ODQsImV4cCI6NDg3MTM2NTQ4NH0.BWztiGfYn7UlFuYNeH9uCfZoMxV-VKfJAHBY0ebdmqo&t=2024-06-07T13%3A04%3A44.840Z"
            alt="github-icon"
          />
          github.com/stefanrogic
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
