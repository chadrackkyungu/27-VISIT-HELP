import React, { useRef, useState } from 'react';
import "../Style.scss";
import { Card, Col, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';

function ReviewCard() {

    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);

    if (!data) {
        return <Loading />
    }

    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={3}>
                <SwiperSlide>
                    <Card className='review-card'>
                        <CardBody className='review-img-container'>
                            <div className='img-review'>
                                <img src={""} alt="" />
                            </div>
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus ipsum tempora </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ReviewCard