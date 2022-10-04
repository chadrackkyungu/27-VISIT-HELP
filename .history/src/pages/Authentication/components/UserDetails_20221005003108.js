import React from 'react'
import { Row, Col } from "reactstrap";

function UserDetails(props) {

    return (
        <div>
            <Row>
                <Col md={4}>
                    <p>First Name: {props.details.firstName}</p>
                    <p>Last Name : {props.details.lastName}</p>
                    <p>ID / Passport Number : {props.details.IdNumber}</p>
                    <p>Email Address : {props.details.email}</p>
                    <p>Gender : {props.details.gender}</p>
                </Col>
                <Col md={4}>
                    <p>House Number : {props.details.houseNumber}</p>
                    <p>Alternative number : {props.details.alternativeNumber}</p>
                    <p>Date of birth : {props.details.dateOfBirth}</p>
                    <p>City : {props.details.city}</p>
                </Col>
                <Col md={4}>
                    <p>Password : {props.details.password}</p>
                    <p>Phone Number : {props.details.phoneNumber}</p>
                    <p>State / Province : {props.details.stateProvince}</p>
                    <p>Zip Code : {props.details.zipCode}</p>
                </Col>
            </Row>
        </div>
    )
}

export default UserDetails