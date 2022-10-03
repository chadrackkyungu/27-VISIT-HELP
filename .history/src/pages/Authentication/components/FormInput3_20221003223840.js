import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput3() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="IdNumber"
                            label="Id / Passport Number"
                            type="text"
                            placeholder="Id or passport number"
                            required
                        />
                    </div>
                </Col>
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
            </Row>
        </div>
    )
}

export default FormInput3