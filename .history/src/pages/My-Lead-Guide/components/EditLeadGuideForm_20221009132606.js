import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function EditLeadGuideForm() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email Address"
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="passport"
                            label="ID / Passport"
                            className="form-control"
                            placeholder="Enter your id or passport"
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

export default EditLeadGuideForm