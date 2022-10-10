import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import Mybookings from './Mybookings';

function MyBookings() {
    return (
        <React.Fragment>
            <div className="">
                <Container fluid>
                    <CardBody>
                        <Row>
                            <TutorNavbar />

                            <Col md={9} className="mt-5">
                                <Mybookings />
                            </Col>
                        </Row>
                    </CardBody>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MyBookings