import React, { useEffect, useState } from "react";
import s from "./News.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import axios from "axios";
import "swiper/css/effect-coverflow";

const News = () => {
    const [photos, setPhotos] = useState([])
    const getPhotos = async() => {
        await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(res => setPhotos(res.data))
    }
    useEffect(() => {
        getPhotos(photos)
    }, [photos])
  return (
    <div className={s.news_main}>
      <div className="container">
        <div className={s.title}>
          <h1>Новости</h1>
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
        initialSlide={1}
        breakpoints={{
            0: {
                slidesPerView: 1,
                effect: "slide",
            },
            600: {
                slidesPerView: 3,
                effect: "coverflow"
            },
            700: {
                slidesPerView: 3,
                effect: "coverflow"
            }
        }}
        modules={[Navigation, EffectCoverflow]} 
        className="sliderNews">
          {
            photos.map(photo => {
                return(
                    <SwiperSlide>
                        <img src={photo.url} alt='image'/>
                    </SwiperSlide>
                )
            })
          }
        </Swiper>
      </div>
    </div>
  );
};

export default News;
