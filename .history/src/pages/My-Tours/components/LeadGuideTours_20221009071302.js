import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import tour1 from "../../assets/images/gallery/tour-1.svg"

const MyTourGuide = () => {

    return (
        <React.Fragment>
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
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        </React.Fragment >
    )
}

export default MyTourGuide