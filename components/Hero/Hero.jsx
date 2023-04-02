import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import img from '../../public/variant6.png'

const Hero = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.hero_content}>
          <div className={s.content_left}>
            <Image src={img} alt="image" />
          </div>
          <div className={s.content_right}>
            <p>ЛМК</p>
            <h2>БЕЛАЯ ПТИЦА</h2>
            <p>Литературно-музыкальный клуб </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
