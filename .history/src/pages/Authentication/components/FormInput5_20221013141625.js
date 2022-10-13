import React from 'react'
import { AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"
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
                            name="streetAddress"
                            label="Street Address"
                            type="text"
                            required
                            placeholder="Enter your street address"
                        />
                    </div>
                </Col>
            </Row>

            <AvCheckboxGroup inline name="checkboxCustomInputExample2" required className="mt-5">
                <AvCheckbox customInput label="Do you agree to the terms & conditions ? " className="me-3 bg-white" value={true} />
            </AvCheckboxGroup>

        </div>
    )
}

export default FormInput5