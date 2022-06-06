import React, { useContext, useRef, useState } from "react";
import "../css/sidebar.css";
import { myContext } from "./Home";
import DiamondIcon from "@mui/icons-material/Diamond";

const SideBar = () => {
  const contextValue = useContext(myContext);
  const { state, setSideBar } = contextValue;
  const { sidebar_width, sidebar_right } = state;

  const sidebar = useRef();

  const closeSideBar = (e) => {
    if (e.target === sidebar.current) {
      document.querySelector("body").classList.remove("modal-open");
      setSideBar("auto", 0);
    }
  };
  const handleScroll = (id) => {
    document.querySelector("body").classList.remove("modal-open");
    setSideBar("auto", 0);
    scrollBody(id);
  };
  const scrollBody = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="sidebar"
      ref={sidebar}
      onClick={closeSideBar}
      style={{ right: sidebar_right }}
    >
      <div className="sidebar-main" style={{ width: sidebar_width }}>
        <div className="sidebar-m-name">
          <DiamondIcon sx={{ fontSize: 40 }} className="diamond" />
          <p>
            Techo<span>S</span>an
          </p>
          <DiamondIcon sx={{ fontSize: 40 }} className="diamond" />
        </div>
        <div className="sidebar-m-body">
          <div tabIndex={0} onClick={() => handleScroll("home")}>
            <p>Home</p>
          </div>
          <div tabIndex={0} onClick={() => handleScroll("services")}>
            <p>Services</p>
          </div>
          <div tabIndex={0} onClick={() => handleScroll("experiences")}>
            <p>Experiences</p>
          </div>
          <div tabIndex={0} onClick={() => handleScroll("projects")}>
            <p>Projects</p>
          </div>
          <div tabIndex={0} onClick={() => handleScroll("testimonies")}>
            <p>Testimonies</p>
          </div>
          <div tabIndex={0} onClick={() => handleScroll("contact")}>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
