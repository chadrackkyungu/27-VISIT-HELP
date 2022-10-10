import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import Layout from './components/Layout';
import UpdateProfile from './components/UpdateProfile';

function MyBookings() {
    return (
        <Layout>
            <UpdateProfile />
        </Layout>
    )
}

export default MyBookings