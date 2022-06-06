import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import "../css/services_temp.css";

const ServicesTemp = ({ emoji, title, body, more }) => {
  const [showMore, setShowMore] = useState(false);
  const more_container = useRef();

  const closeMore = (e) => {
    if (e.target === more_container.current) {
      document.querySelector("body").classList.remove("modal-open");
      setShowMore(false);
    }
  };
  const handleShowMore = () => {
    document.querySelector("body").classList.add("modal-open");
    setShowMore(true);
  };

  return (
    <div className="services__temp">
      <img src={emoji} alt="" />
      <p>{title}</p>
      <p>{body}</p>
      {showMore && (
        <div className="more__info" ref={more_container} onClick={closeMore}>
          <div className="more__info-main">{more} </div>
        </div>
      )}
      <p onClick={handleShowMore} className="button2">
        Read More
      </p>
    </div>
  );
};

export default ServicesTemp;
