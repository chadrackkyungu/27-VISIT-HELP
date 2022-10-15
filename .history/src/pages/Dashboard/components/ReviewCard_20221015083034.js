import React, { useRef, useState } from 'react';
import "../Style.scss";
import { Card, Col, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Img from "../../../assets/images/users/user-9.jpg";
import Img2 from "../../../assets/images/users/avatar-8.jpg";

function ReviewCard() {
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={3}>
                <SwiperSlide className='review-card'>
                    <Card className='review-card'>
                        <CardBody className='review-img-container'>
                            <div className='img-review'>
                                <img src={Img} alt="" />
                            </div>
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus ipsum tempora </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='review-card'>
                        <CardBody className='review-img-container'>
                            <div className='img-review'>
                                <img src={Img} alt="" />
                            </div>
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero  </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card className='review-card'>
                        <CardBody className='review-img-container'>
                            <div className='img-review'>
                                <img src={Img} alt="" />
                            </div>
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus  </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardBody className='review-img-container'>
                            <div className='img-review'>
                                <img src={Img} alt="" />
                            </div>
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus  </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ReviewCard