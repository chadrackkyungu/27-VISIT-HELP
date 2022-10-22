import React, { useState, useEffect } from "react"
import "./Style.scss";
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import { Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import ImageSlider from './components/ImageSlider';
import TourContent from './components/tourContent';
import Map from './components/Map';
import ReviewCard from './components/ReviewCard';
import BuyButton from './components/BuyButton';
import Ratings from "./components/Ratings";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51LWmoLF1YNOAGxK9HWSDzSfoSb2MmKjtPb4lDiPOR3MLyWBILfDz1qdKXQ9eywYdZnsdVWgNHcM7hr1dHzluNut700hypApaqK");

const TourDetails = () => {
    const { id } = useParams()
    const [viewModal, setViewModal] = useState(false);

    const modalHandler = () => {
        setViewModal(true);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    <Link to="/dashboard" className="btn text-white"> <BiArrowBack size={24} /> </Link>

                    <ImageSlider id={id} />
                    <TourContent id={id} />
                    {/* <Map id={id} /> */}
                    <ReviewCard id={id} />

                    <button className="btn text-white m-3" type="button" onClick={modalHandler}> Post your comments </button>
                    <BuyButton id={id} />

                </Container>
            </div>

            <Modal className="modal-right scroll-out-negative"
                show={viewModal} onHide={() => setViewModal(false)} scrollable
                dialogClassName="full" size="md">

                <Modal.Header closeButton>
                    <Modal.Title> Leave a comment </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Ratings tourId={id} setViewModal={setViewModal} />
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default TourDetails