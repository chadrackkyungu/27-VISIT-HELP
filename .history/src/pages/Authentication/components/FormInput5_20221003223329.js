import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput5() {
    return (
        <div>
            <Row>
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
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="state"
                            label="State or province"
                            type="text"
                            required
                            placeholder="Enter state or province"
                        />
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default FormInput5