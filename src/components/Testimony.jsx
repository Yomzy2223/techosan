import React, { useEffect } from "react";
import "../css/testimony.css";
import Swiper, { Navigation, Pagination, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import { Clients_testimonies } from "../assets/clients-testimonies";

const Testimony = () => {
  const swiper2 = new Swiper(".swiper2", {
    lazy: true,
    preloadImages: false,
    effect: "cube",
    cubeEffect: {
      shadow: true,
      slideShadows: false,
      shadowOffset: 50,
      shadowScale: 0.3,
    },
    centerInsufficientSlides: true,
    modules: [Navigation, Pagination, EffectCube],
    loop: true,

    slidesPerView: 1,
    grabCursor: true,
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
      el: ".swiper-pagination2",
      type: "bullets",
    },
    spaceBetween: 0,
  });

  useEffect(() => {
    swiper2.init();
  });
  return (
    <div className="testimony">
      <div className="projects__title">
        <p>
          Clients always get <br /> <span>Exeptional Work</span> from me...
        </p>
      </div>
      <div className="my__swiper c__wrapper">
        <div className="swiper swiper2 projects-images c__swiper">
          <div className="swiper-wrapper">
            {Clients_testimonies.map((testimony) => (
              <div className="swiper-slide" key={testimony.id}>
                <img src={testimony.img} alt="" className="testimony__img" />
                <p>{testimony.text}</p>
              </div>
            ))}
          </div>
          <div className="swiper-pagination swiper-pagination2 "></div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
