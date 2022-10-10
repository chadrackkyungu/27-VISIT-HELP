import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import Mybookings from './Mybookings';

function MyBookings(props) {
    return (
        <React.Fragment>
            <div className="">
                <Container fluid>
                    <CardBody>
                        <Row>
                            <Col md={3} className="bg-white">
                                <SidebarContent />
                            </Col>

                            <Col md={9} className="mt-5">
                                {/* <Mybookings /> */}
                                {props.children}
                            </Col>
                        </Row>
                    </CardBody>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MyBookings