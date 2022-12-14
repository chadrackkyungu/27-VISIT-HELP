import React from 'react'
import { Row, Col } from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';

function UserDetails(props) {

    return (
        <div>
            <Row>
                <Col md={4}>
                    <p> <b> First Name: </b>  {props.details.firstName}</p>
                    <p> <b>Last Name :</b> {props.details.lastName}</p>
                    <p> <b>ID / Passport Number :</b> {props.details.IdNumber}</p>
                    <p> <b>Email Address :</b> {props.details.email}</p>
                    <p> <b>Gender :</b> {props.details.gender}</p>
                </Col>
                <Col md={4}>
                    <p> <b>House Number :</b> {props.details.houseNumber}</p>
                    <p> <b>Alternative number :</b> {props.details.alternativeNumber}</p>
                    <p> <b>Date of birth :</b> {props.details.dateOfBirth}</p>
                    <p> <b>City :</b> {props.details.city}</p>
                    <p> <b>Street Address :</b> {props.details.streetAddress}</p>
                </Col>
                <Col md={4}>
                    <p> <b>Password :</b> {props.details.password}</p>
                    <p> <b>Phone Number :</b> {props.details.phoneNumber}</p>
                    <p> <b>State / Province :</b> {props.details.stateProvince}</p>
                    <p> <b>Zip Code :</b> {props.details.zipCode}</p>
                </Col>
            </Row>
            <AvCheckboxGroup inline name="checkboxCustomInputExample2" required className="mt-5">
                <AvCheckbox customInput label="Do you agree to the terms & conditions ? " className="me-3 bg-white" value={"true"} />
            </AvCheckboxGroup>
        </div>
    )

}

export default UserDetails