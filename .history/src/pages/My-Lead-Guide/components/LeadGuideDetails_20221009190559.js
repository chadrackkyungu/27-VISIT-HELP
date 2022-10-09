import React from 'react'
import { Row, Col } from "reactstrap"

function LeadGuideDetails(props) {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <p> <b> First Name: </b>  { }</p>
                    <p> <b>Last Name :</b> { }</p>
                    <p> <b>ID / Passport Number :</b> { }</p>
                    <p> <b>Email Address :</b> { }</p>
                    <p> <b>Gender :</b> { }</p>
                </Col>
                <Col md={4}>
                    <p> <b>House Number :</b> { }</p>
                    <p> <b>Alternative number :</b> { }</p>
                    <p> <b>Date of birth :</b> { }</p>
                    <p> <b>City :</b> { }</p>
                </Col>
                <Col md={4}>
                    <p> <b>Password :</b> { }</p>
                    <p> <b>Phone Number :</b> { }</p>
                    <p> <b>State / Province :</b> { }</p>
                    <p> <b>Zip Code :</b> { }</p>
                </Col>
            </Row>
        </div>
    )
}

export default LeadGuideDetails