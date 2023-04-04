import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import axios from 'axios'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper";

export default function UnderSLider() {
    const [dataSlide, setDataSlide] = useState([]);

    useEffect(() => {
        try {
            axios.get("http://159.65.144.176/api/events/").then((response) => setDataSlide(response.data));
        } catch (error) {
            console.log(error);
        }
    }, []);

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
                        navigation: false,
                        slidesPerView: 1
                    },
                    600: {
                        slidesPerView: "1.5",
                        navigation: true
                    },
                }}
                className="Under_slider"
            >
                {dataSlide.map((slide) => (
                    <SwiperSlide>
                        <img src={slide.image} alt="slide_img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
