import React from 'react'
import { Card, CardBody } from "reactstrap"

function BuyButton() {
    return (
        <Card>
            <CardBody>
                <h3> WHAT ARE YOU WAITING FOR? </h3>
                <p> 10 days. 1 adventure. Infinite memories. Make it yours today! </p>

                <button className='btn btn-warning'> Book Now</button>
            </CardBody>
        </Card>
    )
}

export default BuyButton