import React from 'react'
import { Row, Col, CardBody, Card, Alert, Container, Spinner, Button } from "reactstrap"

function FormInput1() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            placeholder="Enter your first name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="lastName"
                            label="Last Name"
                            className="form-control"
                            placeholder="Enter your last name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col md={6}>
                            <div className="mb-3">
                                <AvField
                                    name="birthDate"
                                    label="Date of birth"
                                    className="form-control"
                                    type="date"
                                    required
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <AvField
                                    name="gender"
                                    label="Gender"
                                    type="select"
                                    placeholder="Enter your last name"
                                    required
                                >
                                    <option> Select... </option>
                                    <option> Male </option>
                                    <option> Female </option>
                                    <option> Others </option>
                                </AvField>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FormInput1
