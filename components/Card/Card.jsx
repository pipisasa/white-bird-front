import React, { useState } from "react";
import s from "./Card.module.scss";

const Card = ({ image, title, description }) => {
  const [ellipse, setEllipse] = useState(true);
  return (
    <div onClick={() => setEllipse(prev => !prev)} className={s.card_main}>
      <img className={s.card_img} src={image} alt="image" />
      <h1 className={s.card_title}>{title}</h1>
      <p className={ellipse ? s.card_description_ellipse : s.card_description}>
        {description}
      </p>
    </div>
    // card_main
  );
};

export default Card;
