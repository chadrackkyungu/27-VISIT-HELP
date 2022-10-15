import React from 'react';
import { Row, Col, Card, CardBody, Spinner } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

function Ratings() {
    return (
        <div>
            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                <div className="mb-3">
                    <AvField name="email" label="Email" className="form-control" placeholder="Enter email"
                        type="email"
                        required
                    />
                </div>
                <Row className="mb-3">
                    <Col className="text-end">
                        <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                            {!loadBtn ? <span className="me-2">Forgot Password</span> : null}
                            {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                        </button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}

export default Ratings