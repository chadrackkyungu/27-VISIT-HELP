import React from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function AddtourForm() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="tourName"
                            label="Tour Name"
                            className="form-control"
                            placeholder="Enter tour name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
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

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="dateOfBirth"
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
        </div>
    )
}

export default AddtourForm