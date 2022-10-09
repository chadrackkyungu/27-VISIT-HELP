import React from 'react'
import { Col, Row, Card, CardBody } from "reactstrap"
import { Badge } from 'react-bootstrap';
import tour1 from "../../../assets/images/gallery/tour-1.svg"

function TourInProgress() {
    return (
        <div>
            <Row>
                <h4 className='mb-4'> My Tours in  progress </h4>
                <Col md={4}>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='w-100 pb-4'>
                                <img src={tour1} alt="" className='w-100' />
                            </div>
                            <div>
                                <h6>Park virunga</h6>
                                <p>Closing date tickets   2022-09-30</p>
                                <div className='d-flex justify-content-between'>
                                    <b>10 Days long</b>
                                    <b>5 Days to finished</b>
                                </div>
                            </div>
                            <div className="d-flex  mt-3 ">
                                <Badge className='p-2 bg-danger'> Completed </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TourInProgress