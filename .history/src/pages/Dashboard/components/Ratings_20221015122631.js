import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Spinner } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

function Ratings() {
    const [loadBtn, setloadBtn] = useState();
    const [def, setdef] = useState("")
    const [customize, setcustomize] = useState("")
    const starStyle = {}

    return (
        <CardBody>
            <Col xl="3" md="4" sm="6">
                <div className="p-4 text-center">
                    <h5 className="font-16 m-b-15">
                        Customized heart rating
                    </h5>
                    <RatingTooltip
                        max={5}
                        onChange={rate => {
                            setcustomize(rate)
                        }}
                        ActiveComponent={
                            <i
                                key={"active_4"}
                                className="mdi mdi-heart text-danger"
                                style={starStyle}
                            />
                        }
                        InActiveComponent={
                            <i
                                key={"active_04"}
                                className="mdi mdi-heart-outline text-danger"
                                style={starStyle}
                            />
                        }
                    />
                    <span>{customize}</span>
                </div>
            </Col>

            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                <div className="mb-3">
                    <AvField name="email" label="Email" className="form-control" placeholder="Enter email"
                        type="email"
                        required
                    />
                </div>
                <div className="text-end">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                        {!loadBtn ? <span className="me-2">Post </span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </CardBody>
    )
}

export default Ratings