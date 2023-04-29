import React, { useEffect, useState } from "react";
import s from "./CardsBlock.module.scss";
import Card from "../Card/Card";
import { baseAxios } from "../../utils/baseAxios";
import { MEDIA_URL } from "../../utils/constants";

const CardsBlock = () => {
  const [dataSlide, setDataSlide] = useState([]);
  console.log(dataSlide);

  useEffect(() => {
    try {
      baseAxios
        .get("/events/")
        .then((response) => setDataSlide(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className={s.cards_title}>
        <h2>
          МЕРОПРИЯТИЯ
          <hr />
        </h2>
      </div>
      <div className={s.cards_main}>
        {dataSlide.map((card) => {
          return (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
  //   cards_main
};

export default CardsBlock;
