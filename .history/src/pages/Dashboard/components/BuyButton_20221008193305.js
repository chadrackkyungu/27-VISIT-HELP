import React from 'react'
import { Card, CardBody } from "reactstrap"

function BuyButton() {
    return (
        <Card className='container-btn'>
            <CardBody>
                <h3> WHAT ARE YOU WAITING FOR? </h3>
                <p> 10 days. 1 adventure. Infinite memories. Make it yours today! </p>

                <button className='btn btn-warning w-25 p-2'> Book Now</button>
            </CardBody>
        </Card>
    )
}

export default BuyButton