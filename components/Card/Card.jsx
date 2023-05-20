import React, { useState } from "react";
import s from "./Card.module.scss";

const Card = ({ image, title, description }) => {
  const [ellipse, setEllipse] = useState(true);
  return (
    <div onClick={() => setEllipse((prev) => !prev)} className={s.card_main}>
      <div className={s.card_img}>
        <img src={image} alt="image" />
      </div>
      <h1 className={s.card_title}>{title}</h1>
      <p className={ellipse ? s.card_description_ellipse : s.card_description}>
        {description}
      </p>
    </div>
    // card_main
  );
};

export default Card;
