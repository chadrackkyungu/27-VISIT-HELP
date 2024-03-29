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
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';

function ImageSlider() {

    const { id } = useParams();
    const tourImg = "https://tourism.up.railway.app/img/imageCover/";
    const { data } = useFetch(`https://tourism.up.railway.app/api/v1/tours`);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    if (!data) {
        return <Loading />
    }
    const filterTour = data.filter(tour => tour.id === id);

    const images = filterTour[0]?.images
    console.log(
        images
    )

    return (
        <div>
            <Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide> <img src={`${tourImg}${filterTour[0]?.imageCover}`} /></SwiperSlide>
                <SwiperSlide>
                    {
                        images.map((img, i) =>
                            <img src={`${tourImg}${img}`} />
                        )
                    }
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
                <SwiperSlide> <img src={`${tourImg}${filterTour[0]?.imageCover}`} /></SwiperSlide>
                <SwiperSlide>
                    {
                        images.map((img, i) =>
                            <img src={`${tourImg}${img}`} />
                        )
                    }
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default ImageSlider