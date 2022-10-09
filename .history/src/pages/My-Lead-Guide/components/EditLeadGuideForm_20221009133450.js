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
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            type="number"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="role"
                            label="Role"
                            type="select"
                            required
                        >
                            <option> Select... </option>
                            <option> Admin </option>
                            <option> Lead Guide </option>
                        </AvField>
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="city"
                            label="City"
                            className="form-control"
                            type="text"
                            required
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Address"
                            type="text"
                            required
                        />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default EditLeadGuideForm