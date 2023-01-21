import React, { useState } from 'react'
import "../Style.scss";
import { Card, CardBody, Spinner } from "reactstrap"
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';
import { userDetails } from "../../../Redux/Slices/userSlice";
import { useStore1Selector } from "../../../index";
import { AvForm } from "availity-reactstrap-validation"
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51LWmoLF1YNOAGxK9HWSDzSfoSb2MmKjtPb4lDiPOR3MLyWBILfDz1qdKXQ9eywYdZnsdVWgNHcM7hr1dHzluNut700hypApaqK");

function BuyButton({ id }) {
    const user = useStore1Selector(userDetails);
    const token = user?.token
    const { data } = useFetch(`https://tourism.up.railway.app/api/v1/tours`);
    if (!data) { return <Loading /> }
    const filterTour = data.filter(tour => tour.id === id);
    const [btnSpin, setBtnSpin] = useState()

    const handleValidSubmit = async () => {
        const stripe = await stripePromise;
        setBtnSpin(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = "";
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://localhost:4000/api/v1/Bookings/checkout-session/${id}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                console.log("Stripe result : ", res)
                if (res.status === 'success') {
                    stripe.redirectToCheckout({
                        sessionId: res.session.id
                    })
                    setBtnSpin(false)
                }
            }).catch(err => {
                console.log(err);
                setBtnSpin(false)
            })
    }

    return (
        <CardBody>
            <Card className='container-btn'>
                <CardBody>
                    <h3> WHAT ARE YOU WAITING FOR? </h3>
                    <p className='mt-5'> <b> {filterTour[0]?.duration}  days. 1 adventure. Infinite memories. Make it yours today! </b> </p>
                    <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                        {/* <button className='btn btn-warning w-25 p-2' type="submit"> Book Now</button> */}

                        <button className="btn btn-warning w-25 p-2" type="submit">
                            <span className="me-2"> Book Now </span>
                            {
                                !btnSpin ? null : <Spinner as="span" animation="border" size="sm" />
                            }
                        </button>
                    </AvForm>
                </CardBody>
            </Card>
        </CardBody>
    )
}

export default BuyButton