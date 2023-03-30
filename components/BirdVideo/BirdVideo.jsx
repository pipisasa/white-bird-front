import React from "react";

const BirdVideo = () => {
  return (
    <div className={s.birdVideo}>
      <video src="/path/to/video.mp4" controls />
    </div>
  );
};

export default BirdVideo;
