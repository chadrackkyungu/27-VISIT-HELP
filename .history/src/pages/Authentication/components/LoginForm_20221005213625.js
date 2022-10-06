import React from 'react'
import { Row, Col, Spinner } from "reactstrap"
import { AvField } from "availity-reactstrap-validation"

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

            <Row className="mb-3">
                <Col sm={6}>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="customControlInline" />
                        <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                    </div>
                </Col>
                <Col sm={6} className="text-end">
                    <div className="col-12 text-center">
                        <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit" onClick={() => setSubmit(true)} >
                            {!loadBtn ? <span className="me-2">Submit</span> : null}
                            {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LoginForm