import React, { useState } from "react"
import "./Style.scss";
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import { Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";
import ImageSlider from './components/ImageSlider';
import TourContent from './components/tourContent';
// import Map from './components/Map';
import ReviewCard from './components/ReviewCard';
import BuyButton from './components/BuyButton';
import Ratings from "./components/Ratings";
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";

const TourDetails = () => {

    const user = useStore1Selector(userDetails);
    const { id } = useParams()
    const [viewModal, setViewModal] = useState(false);
    const [prevPost, setPrevPost] = useState(false);

    const modalHandler = () => {
        if (user?.status !== "success") {
            setPrevPost(true)
        } else {
            setViewModal(true);
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    <Link to="/dashboard"> <BsArrowLeft size={22} /> Back </Link>

                    <ImageSlider id={id} />
                    <TourContent id={id} />
                    {/* <Map id={id} /> */}
                    <ReviewCard id={id} />

                    {/* <button className="btn text-white m-3" type="button" onClick={modalHandler}> Post your comments </button> */}

                    <BuyButton id={id} loginFirst={user?.status} />

                </Container>
            </div>

            <Modal className="modal-right scroll-out-negative"
                show={viewModal} onHide={() => setViewModal(false)} scrollable
                dialogClassName="full" size="md">

                <Modal.Header closeButton>
                    <Modal.Title> Leave a comment </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Ratings tourId={id} />
                </Modal.Body>
            </Modal>

            <Modal className="modal-right scroll-out-negative"
                show={prevPost} onHide={() => setPrevPost(false)} scrollable
                dialogClassName="full" size="md">
                <Modal.Body className="d-flex">
                    <h3 className="text-center me-3"> Please login to perform this action </h3>
                    <Link to="/login" className='btn text-white'> Login </Link>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default TourDetails