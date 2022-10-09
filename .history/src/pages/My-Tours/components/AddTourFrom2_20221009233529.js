import React from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function Form2() {
    return (
        <div>
            <Row>
                <h3> Tickets date </h3>
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

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="groupSize"
                            label="Max Group Size"
                            className="form-control"
                            type="number"
                            required
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="price"
                            label="Price"
                            className="form-control"
                            type="number"
                            required
                        />
                    </div>
                </Col>
                <Col md={12}>
                    <div className="mb-3">
                        <AvField
                            name="description"
                            label="Description"
                            className="form-control"
                            type="textarea"
                            required
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Form2