import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import { Badge } from 'react-bootstrap';
import tour1 from "../../../assets/images/gallery/tour-1.svg"

function AdminTour() {
    return (
        <div>
            <Row className='mt-5'>
                <Col md={3}>
                    <h4 className='mb-4'> My Tours </h4>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='w-100 pb-4'>
                                <img src={tour1} alt="" className='w-100' />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Park virunga</h6>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Badge className='p-2 text-white'>  <Link to="/tour-details/1" className='text-white'>  view details </Link> </Badge>
                                <Badge className='p-2 bg-warning'> Edit </Badge>
                                <Badge className='p-2 bg-danger'> Delete </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3}>
                    <h4 className='mb-4'> My Tours </h4>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='w-100 pb-4'>
                                <img src={tour1} alt="" className='w-100' />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Park virunga</h6>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Badge className='p-2 text-white'>  <Link to="/tour-details/1" className='text-white'>  view details </Link> </Badge>
                                <Badge className='p-2 bg-warning'> Edit </Badge>
                                <Badge className='p-2 bg-danger'> Delete </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AdminTour