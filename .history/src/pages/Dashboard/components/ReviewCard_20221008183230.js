import React, { useRef, useState } from 'react'
import { Card, Col, CardBody } from "reactstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ReviewCard() {
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                <SwiperSlide>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus ipsum tempora cupiditate harum ea eaque sed, sint ratione iusto ad fuga non, accusamus commodi possimus. </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus ipsum tempora cupiditate harum ea eaque sed, sint ratione iusto ad fuga non, accusamus commodi possimus. </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus ipsum tempora cupiditate harum ea eaque sed, sint ratione iusto ad fuga non, accusamus commodi possimus. </small>
                        </CardBody>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <p> <b>John</b> </p>
                            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur odit libero impedit temporibus ipsum tempora cupiditate harum ea eaque sed, sint ratione iusto ad fuga non, accusamus commodi possimus. </small>
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