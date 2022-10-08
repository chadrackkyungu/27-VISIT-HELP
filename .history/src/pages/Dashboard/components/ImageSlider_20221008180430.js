import React, { useState, useEffect, useRef } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import { useParams, Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

function ImageSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide >
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> </SwiperSlide>
                <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> </SwiperSlide>
                <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> </SwiperSlide>
                <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default ImageSlider