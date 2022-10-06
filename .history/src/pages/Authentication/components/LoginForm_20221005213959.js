import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"

function LoginForm() {
    return (
        <div>
            <div className="mb-3">
                <AvField
                    name="email"
                    label="Email"
                    className="form-control"
                    placeholder="Enter email"
                    type="email"
                    required
                />
            </div>

            <div className="mb-3">
                <AvField
                    name="password"
                    label="Password"
                    type="password"
                    required
                    placeholder="Enter Password"
                />
            </div>

            <Row className="mt-2 mb-0 row">
                <div className="col-12 mt-4">
                    <Link to="/forgot-password" className='text-success'><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                </div>
            </Row>

            <Row className="mb-3">
                <Col sm={6}>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="customControlInline" />
                        <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LoginForm