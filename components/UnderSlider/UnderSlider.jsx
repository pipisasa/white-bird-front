import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { baseAxios } from "../../utils/baseAxios";
import { MEDIA_URL } from "../../utils/constants";

export default function UnderSLider() {
  const [dataSlide, setDataSlide] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      baseAxios
        .get("/events/")
        .then((response) => setDataSlide(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const gallery = [];

  dataSlide.map((slide) => {
    gallery.push({ src: slide.image });
  });
  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        freeMode={true}
        initialSlide={2}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        modules={[FreeMode, Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: "1.5",
          },
        }}
        className="Under_slider"
      >
        {dataSlide.map((slide, i) => (
          <SwiperSlide key={i} onClick={() => setOpen(true)}>
            <img src={MEDIA_URL + slide.image} alt="slide_img" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        plugins={[Zoom, Slideshow, Fullscreen, Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={gallery}
      />
    </>
  );
}
