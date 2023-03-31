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
        .get("http://159.65.144.176/api/events/")
        .then((response) => setDataSlide(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
     <h1 className={s.cards_title}>ОБЪЕКТЫ</h1>
    <div className={s.cards_main}>
      {dataSlide.map((card) => {
        return (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
    </>
   
  );
  //   cards_main
};

export default CardsBlock;
