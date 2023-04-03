import React from "react";
import s from "./BirdVideo.module.scss";

const BirdVideo = () => {
  return (
    <div className={s.birdVideo}>
      <h2>Видео о нас</h2>
      <iframe width="100%" height="600px" style={{
        borderRadius: "20px",
        border: 'none'
      }} src="https://www.youtube.com/embed/HOejnkjdoFc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>{" "}
    </div>
  );
};

export default BirdVideo;
