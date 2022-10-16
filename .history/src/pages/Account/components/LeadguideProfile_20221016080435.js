import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function UpdateLeadProfile() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            type="number"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="alternativeNumber"
                            label="Alternative Number"
                            type="number"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="city"
                            label="City"
                            type="text"
                            required
                            placeholder="Enter your city"
                        />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="stateProvince"
                            label="State or province"
                            type="text"
                            required
                            placeholder="Enter state or province"
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="zipCode"
                            label="Zip Code"
                            type="text"
                            required
                            placeholder="Enter your zip code"
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="houseNumber"
                            label="House Number"
                            type="text"
                            required
                            placeholder="Enter your house number"
                        />
                    </div>
                </Col>
            </Row>

            {/* <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter your email address"
                            type="email"
                            required
                        />
                    </div>
                </Col>
            </Row> */}
        </div>
    )
}

export default UpdateLeadProfile