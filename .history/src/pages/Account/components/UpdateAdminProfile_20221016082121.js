import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function UpdateAdminProfile({ details }) {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter your email address"
                            type="email"
                            required
                            value={details.email}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            type="number"
                            placeholder="Enter your phone number"
                            required
                            value={details.phoneNumber}
                        />
                    </div>
                </Col>
                {/* <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="companyRegNum"
                            label="Company registration number"
                            type="number"
                            placeholder="Enter your company registration number"
                            required
                        />
                    </div>
                </Col> */}
            </Row>
        </div>
    )
}

export default UpdateAdminProfile