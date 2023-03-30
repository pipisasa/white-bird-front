import React from "react";
import s from "./BirdVideo.module.scss";

const BirdVideo = () => {
  return (
    <div className={s.birdVideo}>
      <h2>Видео о нас</h2>
      <video
        controls
        muted
        style={{ width: "100%", margin: "0 auto", borderRadius: "20px" }}
      >
        <source src="/miyajima-33821-1.mp4" type="video/mp4" />
      </video>{" "}
    </div>
  );
};

export default BirdVideo;
