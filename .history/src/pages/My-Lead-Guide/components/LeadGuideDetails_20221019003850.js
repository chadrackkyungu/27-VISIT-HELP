import React from 'react'
import { Row, Col } from "reactstrap"

function LeadGuideDetails({ leadGuides, id }) {

    const filterLeadGuideById = leadGuides.filter(lead => {
        return lead._id === id
    })

    return (
        <div>
            <Row>
                <Col md={4}>
                    <p> <b> First Name: {filterLeadGuideById[0]?.firstName} </b>  { }</p>
                    <p> <b>Last Name :</b> {filterLeadGuideById[0]?.lastName}</p>
                    <p> <b>ID / Passport Number :</b> {filterLeadGuideById[0]?.IdNumber}</p>
                    <p> <b>Email Address :</b> {filterLeadGuideById[0]?.address}</p>
                    <p> <b>Gender :</b> {filterLeadGuideById[0]?.gender}</p>
                </Col>
                <Col md={4}>
                    <p> <b>Date of birth :</b> {filterLeadGuideById[0]?.dateOfBirth.split("T")[0]}</p>
                    <p> <b>City :</b> {filterLeadGuideById[0]?.city}</p>
                    <p> <b>Country :</b> {filterLeadGuideById[0]?.country}</p>
                </Col>
                <Col md={4}>
                    <p> <b>Phone Number :</b> {filterLeadGuideById[0]?.phoneNumber}</p>
                    <p> <b>State / Province :</b> {filterLeadGuideById[0]?.stateProvince}</p>
                    <p> <b>Zip Code :</b> {filterLeadGuideById[0]?.zipCode}</p>
                    <p> <b>Role :</b> {filterLeadGuideById[0]?.role}</p>
                </Col>
            </Row>
        </div>
    )
}

export default LeadGuideDetails