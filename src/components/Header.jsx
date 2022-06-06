import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { myContext } from "./Home";
import DiamondIcon from "@mui/icons-material/Diamond";

function Header() {
  const contextValue = useContext(myContext);
  const { setSideBar } = contextValue;
  const header = useRef();

  const openSideBar = () => {
    setSideBar(0, "20rem");
    document.querySelector("body").classList.add("modal-open");
  };

  const scrollBody = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  window.addEventListener("scroll", (e) => {});

  return (
    <div className="header" ref={header}>
      <MenuIcon id="menu__icon" onClick={openSideBar} />

      <div className="header__company-name">
        <p onClick={() => scrollBody("home")}>
          Techo<span>S</span>an
        </p>
      </div>
      <div className="header__navbar">
        <p onClick={() => scrollBody("home")} tabIndex={0}>
          Home
        </p>
        <p onClick={() => scrollBody("services")} tabIndex={0}>
          Services
        </p>
        <p onClick={() => scrollBody("experiences")} tabIndex={0}>
          Experiences
        </p>
        <p onClick={() => scrollBody("projects")} tabIndex={0}>
          Projects
        </p>
        <p onClick={() => scrollBody("testimonies")} tabIndex={0}>
          Testimonies
        </p>
        <button className="styled-button" onClick={() => scrollBody("contact")}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
