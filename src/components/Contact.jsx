import React, { useRef } from "react";
import "../css/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xnx25yf",
        "template_7x3s6va",
        form.current,
        "FGUfeatbfHso5k1F8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="projects__title">
          <p>
            Get in Touch <span>Contact me</span>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="styled-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
