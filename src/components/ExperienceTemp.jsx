import React from "react";
import "../css/experience_temp.css";

const ExperienceTemp = ({ years, text1, text2 }) => {
  return (
    <div className="experience__temp">
      <div className="years">
        <p>{years}</p>
      </div>
      <p>
        {text1}
        <br /> <span>{text2}</span>
      </p>
    </div>
  );
};

export default ExperienceTemp;
