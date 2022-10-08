import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import tour1 from "../../assets/images/gallery/tour-1.svg"
import tour2 from "../../assets/images/gallery/tour-2.svg"
import tour3 from "../../assets/images/gallery/tour-3.svg"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';

function MyBookings() {
    return (
        <React.Fragment>
            <div className="">
                <Container fluid>
                    <CardBody>
                        <Row>
                            <Col md={3} className="bg-white">
                                {/* <div className="pages mt-5">
                                    <div className='d-flex justify-content-center align-items-center mt-5'>
                                        <img src={tour1} alt="visitHelp" className="rounded avatar-lg" />
                                    </div>
                                    <p><Link to="/profile">My Profile</Link> </p>
                                    <p><Link to="/#">My Bookings</Link> </p>
                                </div> */}

                                <SidebarContent />
                            </Col>

                            <Col md={9} className="mt-5">

                            </Col>
                        </Row>
                    </CardBody>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MyBookings