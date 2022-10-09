import React from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function Form1() {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="tourName"
                            label="Tour Name"
                            className="form-control"
                            placeholder="Enter tour name"
                            type="text"
                            required
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="duration"
                            label="Duration"
                            className="form-control"
                            placeholder="Enter your duration"
                            type="text"
                            required
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="summary"
                            label="Summary"
                            className="form-control"
                            type="text"
                            required
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="type"
                            label="TourType"
                            type="select"
                            required
                        >
                            <option> Select... </option>
                            <option> easy </option>
                            <option> medium </option>
                            <option> difficulty </option>
                        </AvField>
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
                <Col md={6}>
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

export default Form1