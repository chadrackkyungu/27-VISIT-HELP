import React from 'react'
import "../Style.scss";
import { Card, CardBody } from "reactstrap"

function BuyButton({ id }) {
    console.log("result : ", id)

    return (
        <Card className='container-btn'>
            <CardBody>
                <h3> WHAT ARE YOU WAITING FOR? </h3>
                <p className='mt-5'> 10 days. 1 adventure. Infinite memories. Make it yours today! </p>

                <button className='btn btn-warning w-25 p-2'> Book Now</button>
            </CardBody>
        </Card>
    )
}

export default BuyButton