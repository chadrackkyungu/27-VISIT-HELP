import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import tour1 from "../../assets/images/gallery/tour-1.svg"
import Layout from '../Layout';

function Mybookings() {
    return (
        <Layout>
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
                                    <div className='btn btn-warning'>R 250</div>
                                </div>
                                <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/tour-details/1" className='btn btn-success'>View details</Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Layout>
    )
}

export default Mybookings