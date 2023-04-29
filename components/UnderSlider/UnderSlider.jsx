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
import { Autoplay } from "swiper";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import { sl } from "date-fns/locale";

export default function UnderSLider() {
  const [dataSlide, setDataSlide] = useState([]);
  const [open, setOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryVideos, setGalleryVideos] = useState([]);

  useEffect(() => {
    try {
      baseAxios.get("/gallery/").then((data) => {
        const images = data.data.gallery.images;
        const videos = data.data.gallery.videos;
        setDataSlide([...images, ...videos]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (dataSlide.length > 0) {
      const galleryImg = []
      const galleryMp4 = []
      dataSlide.forEach((slide) => {
        if(slide.img){
          galleryImg.push({src: slide.img})
        } else if(slide.video){
          galleryMp4.push({src: slide.video})
        }
      });
      setGalleryImages(galleryImg)
      setGalleryVideos(galleryMp4)
    }
  }, [dataSlide]);

  console.log(galleryImages);

  return (
    <>
      <AwesomeSlider trnsitionDelay={0} className="UnderSlider">
        {dataSlide.map((slide, i) => (
          <div
            key={i}
            onClick={() => {
              setOpen(true);
            }}
          >
            {slide.img ? (
              <div>
                <img src={slide.img} alt="slide_img" />
              </div>
            ) : (
              <div>
                <video autoPlay muted loop preload="auto" controls={false}>
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        ))}
      </AwesomeSlider>
      <Lightbox
        plugins={[Zoom, Slideshow, Fullscreen, Thumbnails, Video]}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            type: "video",
            width: 1280,
            height: 720,
            sources: galleryVideos,
          },
          {
            type: "image",
            width: 1280,
            height: 720,
            src: galleryImages.map(slide => slide.src)
          },
        ]}
      />
    </>
  );
}
