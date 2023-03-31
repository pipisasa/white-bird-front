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

<<<<<<< HEAD
  return (
    <div className="container">
      <div className={s.cards_title}>
        <h1>Новости</h1>
      </div>
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
    </div>
  );
  //   cards_main
=======
  return   <>
  <h1 className={s.cards_title}>ОБЪЕКТЫ</h1>

  <div className={s.cards_main}>
    {dataSlide.map(card => {
       return <Card 
       image={card.image} title={card.title} description={card.description}
       />

    })}
  </div>;
//   cards_main
  </>   
>>>>>>> 7c3bfda4bba84332cc24fd2cda70a6612b560aa7
};

export default CardsBlock;
