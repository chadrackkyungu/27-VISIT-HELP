import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import { Badge } from 'react-bootstrap';
import tour1 from "../../../assets/images/gallery/tour-1.svg"

function TourOnSelling() {
    return (
        <div>
            <Row className='mt-5'>
                <h4 className='mb-4'> My Tours on selling </h4>
                <Col md={4}>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='w-100 pb-4'>
                                <img src={tour1} alt="" className='w-100' />
                            </div>
                            <div>
                                <h6>Park virunga</h6>
                                <p>Closing date tickets   2022-09-30</p>
                                <p>Number of peoples who have bought the tickets 15 /15</p>
                            </div>
                            <div className="d-flex  mt-3 p-3">
                                <Badge className='p-2 text-white'> open </Badge>
                                <Badge className='p-2 bg-danger'> close </Badge>
                                <Badge className='p-2 bg-info'> Move to progress </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='w-100 pb-4'>
                                <img src={tour1} alt="" className='w-100' />
                            </div>
                            <div>
                                <h6>Park virunga</h6>
                                <p>Closing date tickets   2022-09-30</p>
                                <p>Number of peoples who have bought the tickets 15 /15</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Badge className='p-2 text-white'> open </Badge>
                                <Badge className='p-2 bg-danger'> close </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TourOnSelling