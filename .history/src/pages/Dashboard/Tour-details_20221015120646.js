import React, { useState, useEffect } from "react"
import "./Style.scss";
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import { useParams, Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import ImageSlider from './components/ImageSlider';
import TourContent from './components/tourContent';
import Map from './components/Map';
import ReviewCard from './components/ReviewCard';
import BuyButton from './components/BuyButton';
import Ratings from "./components/Ratings";

const TourDetails = () => {
    const { id } = useParams()

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    <Link to="/dashboard" className="btn text-white"> <BiArrowBack size={24} /> </Link>

                    <ImageSlider />
                    <TourContent />
                    <Map />
                    <ReviewCard />
                    <button className="btn text-white m-2" type="button"> Leave your comments </button>
                    <BuyButton />


                </Container>
            </div>
        </React.Fragment>
    )
}

export default TourDetails