import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper";

export default function UnderSLider() {
    const slides = [
        {
            img: '/slide1.jpg'
        },
        {
            img: '/slide2.jpg'
        },
        {
            img: '/slide3.jpg'
        },
        {
            img: '/slide4.jpg'
        },
        {
            img: '/slide5.jpg'
        },
    ]
    return (
        <>
            <Swiper
                loop={true}
                centeredSlides={true}
                spaceBetween={30}
                freeMode={true}
                slidesPerView={1}
                breakpoints={{
                    600: {
                        slidesPerView: "1.5"
                    }
                }}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="Under_slider"
            >
                {slides.map((slide) => (
                    <SwiperSlide>
                        <img src={slide.img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
