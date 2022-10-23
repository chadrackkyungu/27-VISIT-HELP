import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"
import useFetch from 'hooks/useFecth';

function from4() {
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, null);

    console.log(data);

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
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Address"
                            type="text"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="houseNumber"
                            label="House Number"
                            type="text"
                            required
                            placeholder="Enter your house number"
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="zipCode"
                            label="Zip Code"
                            type="text"
                            required
                            placeholder="Enter your zip code"
                        />
                    </div>
                </Col>
            </Row>

            <Col md={4}>
                <div className="mb-3">
                    <AvField
                        name="country"
                        label="Assign a tour"
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
        </div>
    )
}

export default from4