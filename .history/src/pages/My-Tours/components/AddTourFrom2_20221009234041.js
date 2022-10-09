import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function Form2() {
    return (
        <div>
            <Row>
                <h5 className='my-5'> Tickets date </h5>
                <Col md={3}>
                    <div className="mb-3">
                        <AvField
                            name="startDate"
                            label="Start Date"
                            className="form-control"
                            placeholder="Enter tour name"
                            type="date"
                            required
                        />
                    </div>
                </Col>

                <Col md={3}>
                    <div className="mb-3">
                        <AvField
                            name="endDate"
                            label="End Date"
                            className="form-control"
                            type="date"
                            required
                        />
                    </div>
                </Col>

                <Col md={3}>
                    <div className="mb-3">
                        <AvField
                            name="startDate2"
                            label="Start Date"
                            className="form-control"
                            placeholder="Enter tour name"
                            type="date"
                            required
                        />
                    </div>
                </Col>

                <Col md={3}>
                    <div className="mb-3">
                        <AvField
                            name="endDate2"
                            label="End Date"
                            className="form-control"
                            type="date"
                            required
                        />
                    </div>
                </Col>

                <h5 className='my-5'> Start Location    (where the location should start when you open the map) </h5>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="Desc"
                            label="Description"
                            className="form-control"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Address"
                            className="form-control"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="longitude"
                            label="Longitude"
                            className="form-control"
                            type="number"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="lalTitude"
                            label="Lalttitude"
                            className="form-control"
                            type="number"
                            required
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Form2