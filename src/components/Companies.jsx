import React from "react";
import "../css/companies.css";
import my_cv from "../assets/My CV.pdf";
import links from "../assets/links";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Companies = () => {
  const { twitter_image } = links;

  return (
    <div className="companies">
      <div className="main-info companies-left">
        <p>
          {" "}
          <span>Works for All these</span> <span>Clients and Brands</span>
        </p>
        <div className="blur blur4"></div>
        <p className="my__services-info">
          I will use my adept creation of scripts using React, Redux, CSS,
          Javascript, HTML and more to convey you a unique branding and promote
          your sales and marketing opportunities. I am passion driven, and an
          avid learner
        </p>
        <div style={{ position: "relative" }}>
          <button className="styled-button hire__me">Hire me</button>
          <div className="blur blur5"></div>
        </div>
      </div>
      <div className="companies-right">
        <div className="companies__circles">
          <div className="companies__circles-main">
            <div className="companies__images-fi">
              <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />
            </div>
            <div className="companies__images-li">
              <LinkedInIcon sx={{ fontSize: 40, color: "#0072b1" }} />
            </div>
            <div className="companies__images-tw">
              <TwitterIcon sx={{ fontSize: 40, color: "#00acee" }} />
            </div>
            <div className="companies__images-fa">
              <FacebookIcon sx={{ fontSize: 40, color: "#4267B2" }} />
            </div>
            <div className="companies__images-am">
              <img src={twitter_image} alt="" />
            </div>
          </div>
          <div className="companies__circles-b blue"></div>
          <div className="companies__circles-b orange"></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
