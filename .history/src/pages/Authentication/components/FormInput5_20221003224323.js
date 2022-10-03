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
                    <AvCheckboxGroup inline name="checkboxCustomInputExample2" label="Custom Checkboxes! (inline)" required>
                        <AvCheckbox customInput label="Charmander" value="Charmander" />
                    </AvCheckboxGroup>
                </Col>
            </Row>

        </div>
    )
}

export default FormInput5