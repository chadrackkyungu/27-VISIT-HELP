import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import { useParams, Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import ImageSlider from './components/ImageSlider';
import tourContent from './components/tourContent';

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
                    <tourContent />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TourDetails