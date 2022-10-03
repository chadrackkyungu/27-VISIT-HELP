import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput4() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="country"
                            label="Country"
                            type="select"
                            required
                            placeholder="Enter your country"
                        >
                            <option> Select... </option>
                            <option> South Africa </option>
                            <option> Lesotho </option>
                        </AvField>
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
            </Row>
        </div>
    )
}

export default FormInput4