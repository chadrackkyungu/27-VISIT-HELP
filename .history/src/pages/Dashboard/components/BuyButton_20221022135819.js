import React, { useState } from 'react'
import "../Style.scss";
import { Card, CardBody, Spinner } from "reactstrap"
import { Modal } from "react-bootstrap";
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';
import { userDetails } from "../../../Redux/Slices/userSlice";
import { useStore1Selector } from "../../../index";
import { AvForm } from "availity-reactstrap-validation"
import { loadStripe } from "@stripe/stripe-js";
import { Link } from 'react-router-dom';
const stripePromise = loadStripe("pk_test_51LWmoLF1YNOAGxK9HWSDzSfoSb2MmKjtPb4lDiPOR3MLyWBILfDz1qdKXQ9eywYdZnsdVWgNHcM7hr1dHzluNut700hypApaqK");

function BuyButton({ id }) {
    const user = useStore1Selector(userDetails);
    const token = user?.token
    const { data } = useFetch(`https://tourism.up.railway.app/api/v1/tours`);
    if (!data) { return <Loading /> }
    const filterTour = data.filter(tour => tour.id === id);
    const [btnSpin, setBtnSpin] = useState()
    const [prevPost, setPrevPost] = useState(false);

    const handleValidSubmit = async () => {

        if (!user) {
            return setPrevPost(true)
        }

        const stripe = await stripePromise;
        setBtnSpin(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://tourism.up.railway.app/v1/Bookings/checkout-session/${id}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res.status === 'success') {
                    stripe.redirectToCheckout({
                        sessionId: res.session.id
                    })
                    setBtnSpin(false)
                    BookTour();
                }
            }).catch(err => {
                console.log(err);
                setBtnSpin(false)
            })
    }

    const BookTour = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`https://tourism.up.railway.app/api/v1/tours/${id}/bookings`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(`successful made a bookings ${result}`)
            })
            .catch(error => console.log('error', error));
    }


    return (
        <CardBody>
            <Card className='container-btn'>
                <CardBody>
                    <h3> WHAT ARE YOU WAITING FOR? </h3>
                    <p className='mt-5'> <b> {filterTour[0]?.duration}  days. 1 adventure. Infinite memories. Make it yours today! </b> </p>
                    <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                        <button className="btn btn-warning w-50 p-3" type="submit">
                            <span className="me-2 h5"> Book Now </span>
                            {!btnSpin ? null : <Spinner as="span" animation="border" size="md" />}
                        </button>
                    </AvForm>
                </CardBody>
            </Card>

            <Modal className="modal-right scroll-out-negative"
                show={prevPost} onHide={() => setPrevPost(false)} scrollable
                dialogClassName="full" size="md">
                <Modal.Body className="d-flex">
                    <h3 className="text-center me-3"> Please login to perform this action </h3>
                    <Link to="/login" className='btn text-white'> Login </Link>
                </Modal.Body>
            </Modal>

        </CardBody>
    )
}

export default BuyButton