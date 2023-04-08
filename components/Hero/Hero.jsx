import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import img from "../../public/whiteBirdBack.svg";

const Hero = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.container}>
          <div className={s.hero_content}>
            <Image src={img} alt="image" />
          </div>
          <button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9Vx8XcU5DKWSfCUtFy9i1gsRvTTjUHRM5coY7sSCTBvNwtQ/viewform?usp=sharing">
              Записаться
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
