import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import tour1 from "../../../assets/images/gallery/tour-1.svg"

function AdminTour() {
    return (
        <div>
            <Row className='mt-5'>
                <Col md={3}>
                    <h4> Upcoming </h4>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='w-100 pb-4'>
                                <img src={tour1} alt="" className='w-100' />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>Park virunga</h4>
                                <button className='btn btn-warning'>R 250</button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/tour-details/1" className='btn btn-success'>View details</Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AdminTour