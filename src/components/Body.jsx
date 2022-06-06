import React, { useState } from "react";
import "../css/body.css";
import my_pics from "../assets/picture.png";
import Proficiency from "./Proficiency";
import links from "../assets/links";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MyServices from "./MyServices";
import ExperienceTemp from "./ExperienceTemp";
import Companies from "./Companies";
import Projects from "./Projects";
import Testimony from "./Testimony";
import Contact from "./Contact";
import bottom_curve from "../assets/bottom-curve.png";
import { motion } from "framer-motion";

function Body() {
  const { web_image, emoji1 } = links;
  const scrollBody = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const transition = {
    duration: 2,
    type: "string",
  };

  return (
    <div className="homepage-body">
      <div className="homepage-body__main">
        <div className="main-info">
          <p>
            {" "}
            <span>hy! i am</span>
            <br /> <span>Oluwole Sayo</span>
          </p>
          <p>I am a web developer</p>
          <div className="blur blur2"></div>
          <div className="main-info__footer">
            <button
              className="styled-button hire__me"
              onClick={() => scrollBody("contact")}
            >
              Hire me
            </button>
          </div>
          <div className="social-media">
            <GitHubIcon sx={{ fontSize: 50 }} />
            <TwitterIcon sx={{ fontSize: 50 }} />
            <LinkedInIcon sx={{ fontSize: 50 }} />
          </div>
        </div>
        <div className="homepage-images">
          <div className="image">
            <motion.img
              animate={{}}
              className="image"
              src={my_pics}
              alt="sayo"
            />
          </div>
          <motion.img src={emoji1} alt="" className="emoji1" />
          <div className="blur"></div>
          <Proficiency
            title="Web Developer"
            image={web_image}
            top="-5%"
            right="-4%"
          />
        </div>
      </div>
      <div id="services">
        <MyServices />
      </div>
      <div id="experiences" className="experiences__section">
        <div className="experiences__container">
          <ExperienceTemp years="2+" text1="Years" text2="Experience" />
          <ExperienceTemp years="10+" text1="Completed" text2="Projects" />
          <ExperienceTemp years="2+" text1="Companies" text2="Work" />
          <div className="blur blur2"></div>
          <div className="blur blur6"></div>
          <div className="blur blur4"></div>
        </div>
      </div>
      <div className="companies__section">
        <Companies />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className="testiomies" id="testimonies">
        <Testimony />
      </div>
      <div id="contact" className="contact-section">
        <Contact />
        <div className="bottom-curve">
          <div className="bottom-curve-content">
            <p>Techosan@gmail.com</p>
            <div>
              <GitHubIcon sx={{ fontSize: 40 }} />
              <TwitterIcon sx={{ fontSize: 40 }} />
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
          <img src={bottom_curve} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body;
