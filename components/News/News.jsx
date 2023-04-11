import React, { useEffect, useState } from "react";
import s from "./News.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper";
import axios from "axios";
import "swiper/css/effect-coverflow";
import format from "date-fns/format";

const News = () => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    await axios
      .get("https://durawka69.pythonanywhere.com/api/posts/")
      .then((res) => setPhotos(res.data));
  };
  useEffect(() => {
    getPhotos(photos);
  }, []);

  const formatDate = (date) => {
    return format(new Date(date), "dd.MM.yyyy")
  }

  const formattedDates = photos.map(photo => ({
    ...photo,
    formattedDate: formatDate(photo.date)
  }))


  return (
    <div id="news" className={s.news_main}>
      <div className="container">
        <div className={s.title}>
          <h1>
            Анонсы
            <hr />
          </h1>
        </div>
        <Swiper
          effect={"coverflow"}
          navigation={true}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          slidesPerView={3}
          pagination={true}
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              effect: "slide",
            },
            600: {
              slidesPerView: 1,
              effect: "coverflow",
            },
            960: {
              slidesPerView: 3,
              effect: "coverflow",
            },
          }}
          modules={[Navigation, EffectCoverflow, Pagination]}
          className="sliderNews"
        >
          {formattedDates.map((photo, i) => {
            return (
              <SwiperSlide className={s.slide} key={i}>
                <img
                  style={{
                    objectFit: "cover",
                  }}
                  src={photo.img}
                  alt="image"
                />
                <div className={s.slide_content}>
                  <h2>{photo.title}</h2>
                  <p>{photo.content}</p>
                  <h3>Дата создания анонса: {photo.formattedDate}</h3>
                  <button>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9Vx8XcU5DKWSfCUtFy9i1gsRvTTjUHRM5coY7sSCTBvNwtQ/viewform?usp=sharing">
                      Принять участие
                    </a>
                  </button>
                </div>
                <div className={s.slide_content_opacity}></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
