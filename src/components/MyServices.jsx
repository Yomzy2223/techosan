import React from "react";
import "../css/my_services.css";
import ServicesTemp from "./ServicesTemp";
import links from "../assets/links";
import my_cv from "../assets/My CV.pdf";

const MyServices = () => {
  const { emoji2, emoji3 } = links;

  return (
    <div className="my__services">
      <div className="main-info my__services-left">
        <p>
          {" "}
          <span>My Awesome</span> <span>Services</span>
        </p>
        <div className="blur blur4"></div>
        <p className="my__services-info">
          I will use my adept creation of scripts using React, Redux, CSS,
          Javascript, HTML and more to convey you a unique branding and promote
          your sales and marketing opportunities. I am passion driven, and an
          avid learner
        </p>
        <div style={{ position: "relative" }}>
          <a href={my_cv} download>
            <button className="styled-button">Download CV</button>
          </a>
          <div className="blur blur5"></div>
        </div>
      </div>
      <div className="my__services-right">
        <div className="service1">
          <ServicesTemp
            emoji={emoji2}
            title="Frontend Web Developer"
            body="Html, Css, JavaScript, React, Redux, Framer Motion"
            more="I have been an active developer for couple of years now. Maybe 2 years."
          />
        </div>
        <div className="service2">
          <ServicesTemp
            emoji={emoji3}
            title="Backend Developer"
            body="Firebase (Authentication, Cloud Firestore, Crashlytics, Performance, Cloud Messaging, A/B Testing)"
            more="I have been an active developer for couple of years now. Maybe 2 years."
          />
        </div>
        <div className="blur blur3"></div>
        <div className="service3">
          <ServicesTemp
            emoji={emoji3}
            title="Backend"
            body="Firebase (Authentication, Cloud Firestore, Crashlytics, Performance, Cloud Messaging, A/B Testing)"
            more="I have been an active developer for couple of years now. Maybe 2 years."
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
