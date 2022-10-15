import React, { useRef, useState } from 'react';
import "../Style.scss";
import { useParams } from 'react-router-dom';
import { Card, Col, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';

function ReviewCard() {

    const { id } = useParams();
    const userImg = "https://tourisms.herokuapp.com/img/users/";
    const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/reviews`, null);

    if (!data) {
        return <Loading />
    }

    const filterReview = data.filter(review => review.tour === id);
    console.log(" All reviews : ", filterReview);

    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={3}>
                {
                    filterReview.map((review, i) =>
                        <SwiperSlide key={i}>
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
                    )
                }
            </Swiper>
        </div>
    )
}

export default ReviewCard