import React, { useRef, useState } from 'react';
import "../Style.scss";
import { Card, Col, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';

function ReviewCard() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDVjZTcwMzZjZWUyN2M4YzUyZTdlMiIsImlhdCI6MTY2NTgxNTY0MSwiZXhwIjoxNjczNTkxNjQxfQ.-3jU0TdJY9Ikx4cgG0RwoIVRC7ZJbFqlwENfwqmrAM4"

    const tourImg = "https://tourisms.herokuapp.com/img/users/";
    const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/reviews`, token);

    if (!data) {
        return <Loading />
    }

    console.log(" All reviews : ", data);

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