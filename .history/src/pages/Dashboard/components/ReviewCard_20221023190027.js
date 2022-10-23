import React, { useRef, useState } from 'react';
import "../Style.scss";
import { Card, Col, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';

function ReviewCard({ id }) {

    const userImg = "https://tourisms.herokuapp.com/img/users/";
    const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/reviews`, null);

    if (!data) {
        return <Loading />
    }

    const filterReview = data.filter(review => review.tour === id);
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={3}>
                {
                    filterReview.map((review, i) =>
                        <SwiperSlide key={i}>
                            <Card className='review-card'>
                                <CardBody className='review-img-container'>
                                    <div className='img-review'>
                                        <img crossorigin="anonymous" src={`${userImg}${review.user.photo}`} alt="" />
                                    </div>
                                    <p> <b>{review.user.firstName} {review.user.lastName}</b> </p>
                                    <small> {review.review} </small>
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