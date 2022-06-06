import React, { useEffect, useState } from "react";
import "../css/projects.css";
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Phoenix from "../assets/Phoenix.jpg";

const Projects = () => {
  // Swiper.use([Navigation, Pagination, Scrollbar]);

  const swiper = new Swiper(".swiper1", {
    effect: "fade",
    centerInsufficientSlides: true,
    modules: [Navigation, Pagination, Scrollbar],
    slidesPerView: 1,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      enabled: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination1",
      type: "bullets",
    },
    spaceBetween: 50,
  });
  useEffect(() => {
    swiper.init();
  }, []);

  return (
    <div className="projects">
      <div className="projects__title">
        <p>
          Recent <span>Projects</span>
        </p>
      </div>
      <div className="blur blur5"></div>
      <div className="blur blur3"></div>
      <div className="blur blur2"></div>
      <div className="blur blur4"></div>
      <div className="blur blur6"></div>
      <div className="my__swiper">
        <div className="swiper swiper1 projects-images">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="projects-image">
                <img src={Phoenix} alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="projects-image">
                <img src={Phoenix} alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="projects-image">
                <img src={Phoenix} alt="" />
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination1 "></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
