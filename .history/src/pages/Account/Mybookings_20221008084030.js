import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function Mybookings() {
    return (
        <div>
            <CardBody>
                <Row className='mt-5'>
                    <Col md={6}>
                        <Card className='tour-card'>
                            <CardBody>
                                <div className='w-100 pb-4'>
                                    <img src={tour1} alt="" className='w-100' />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h4>Park virunga</h4>
                                    <button className='btn btn-warning'>R 250</button>
                                </div>
                                <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/tour-details/1" className='btn btn-success'>View details</Link>
                                    <p className='mt-2'>Ratings(45)</p>
                                    <FcLike size={32} className="like-btn" />
                                    <FcLikePlaceholder size={32} className="like-btn" />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className='tour-card'>
                            <CardBody>
                                <div className='w-100 pb-4'>
                                    <img src={tour2} alt="" className='w-100' />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h4>Park virunga</h4>
                                    <button className='btn btn-warning'>R 350</button>
                                </div>
                                <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/tour-details/2" className='btn btn-success'>View details</Link>
                                    <p className='mt-2'>Ratings(45)</p>
                                    <FcLike size={32} className="like-btn" />
                                    <FcLikePlaceholder size={32} className="like-btn" />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </div>
    )
}

export default Mybookings