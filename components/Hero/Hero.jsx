import React from "react";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={s.hero}>
        <img src="/flowers.jpg" alt="" />
        <div className={s.hero_content}>
          <div className={s.content}>
            <p>ЛМК</p>
            <span>БЕЛАЯ ПТИЦА</span>
            <p>Литературно-музыкальный клуб </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
