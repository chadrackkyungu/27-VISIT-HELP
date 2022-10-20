import React from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function Form1({ details }) {

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
                            value={details[0]?.name}
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="duration"
                            label="Duration"
                            className="form-control"
                            placeholder="Enter Number of duration"
                            type="number"
                            required
                            value={details[0]?.duration}
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
                            value={details[0]?.summary}
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="type"
                            label="TourType"
                            type="select"
                            value={details[0]?.difficulty}
                        >
                            <option> {details[0]?.difficulty} </option>
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
                            value={details[0]?.maxGroupSize}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <div className="mb-3">
                                <AvField
                                    name="price"
                                    label="Price"
                                    className="form-control"
                                    type="number"
                                    required
                                    value={details[0]?.price}
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <AvField
                                    name="priceDiscount"
                                    label="Price Discount"
                                    className="form-control"
                                    type="number"
                                    value={details[0]?.priceDiscount}
                                />
                            </div>
                        </Col>
                    </Row>

                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="startDate"
                            label="Start Date"
                            className="form-control"
                            placeholder="Enter tour name"
                            type="date"
                            value={new Date(details[0]?.startDates[0])}
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mb-3">
                        <AvField
                            name="endDate"
                            label="End Date"
                            className="form-control"
                            type="date"
                            value={new Date(details[0]?.startDates[1])}
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
                            rows={8}
                            value={details[0]?.description}
                        />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Form1