import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function Form1() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="password"
                            label="Password"
                            className="form-control"
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="passwordConfirm"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Re enter your password"
                            type="password"
                            required
                        />
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Form1