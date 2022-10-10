import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import Mybookings from './Mybookings';

function MyBookings(props) {
    return (
        <React.Fragment>
            <Col md={2} className="bg-white">
                <SidebarContent />
            </Col>

            <Col md={9} className="mt-5">
                {/* <Mybookings /> */}
                {props.children}
            </Col>
        </React.Fragment>
    )
}

export default MyBookings