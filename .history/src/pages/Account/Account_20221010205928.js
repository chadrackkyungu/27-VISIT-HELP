import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import Layout from './components/Layout';
import Mybookings from './Mybookings';

function MyBookings() {
    return (
        <Layout>
            <Mybookings />
        </Layout>
    )
}

export default MyBookings