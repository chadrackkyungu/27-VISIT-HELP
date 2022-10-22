import React from 'react'
import "../Style.scss";
import { Card, CardBody } from "reactstrap"
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51LWmoLF1YNOAGxK9HWSDzSfoSb2MmKjtPb4lDiPOR3MLyWBILfDz1qdKXQ9eywYdZnsdVWgNHcM7hr1dHzluNut700hypApaqK");

function BuyButton({ id }) {

    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);
    if (!data) { return <Loading /> }
    const filterTour = data.filter(tour => tour.id === id);
    console.log(" Book a tour now : ", filterTour);

    console.log(id)

    const bookNow = async () => {
        const stripe = await stripePromise;

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzBjMzNlMGRhNWMwZmUwZGJmZGY3YiIsImlhdCI6MTY2NDQ4NjM1MywiZXhwIjoxNjcyMjYyMzUzfQ.m0hPcY_5VlAMduwkVwXS8I89fE44MZ2Vgn5BAMkyNAM");
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://localhost:4000/api/v1/Bookings/checkout-session/${id}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res.status === 'success') {
                    console.log(res.session.id);
                    stripe.redirectToCheckout({
                        sessionId: res.session.id
                    })
                }
            }).catch(err => {
                console.log(err);
            })
    }



    return (
        <CardBody>
            <Card className='container-btn'>
                <CardBody>
                    <h3> WHAT ARE YOU WAITING FOR? </h3>
                    <p className='mt-5'> <b> {filterTour[0]?.duration}  days. 1 adventure. Infinite memories. Make it yours today! </b> </p>
                    <button className='btn btn-warning w-25 p-2'> Book Now</button>
                </CardBody>
            </Card>
        </CardBody>
    )
}

export default BuyButton