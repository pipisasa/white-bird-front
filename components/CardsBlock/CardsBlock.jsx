import React, { useEffect, useState } from "react";
import s from "./CardsBlock.module.scss";
import axios from "axios";
import Card from "../Card/Card";

const CardsBlock = () => {
  const [dataSlide, setDataSlide] = useState([]);
  console.log(dataSlide);

  useEffect(() => {
    try {
      axios
        .get("https://durawka69.pythonanywhere.com/api/events/")
        .then((response) => setDataSlide(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div className={s.cards_title}>
        <h2>
          Прошедшие мероприятия
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
