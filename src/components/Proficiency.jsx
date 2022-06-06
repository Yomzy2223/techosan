import React from "react";
import "../css/proficiency.css";

const Proficiency = ({ title, image, top, right, bottom, left }) => {
  return (
    <div
      className="proficiency"
      style={{ top: top, left: left, bottom: bottom, right: right }}
    >
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Proficiency;
