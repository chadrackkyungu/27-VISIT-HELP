import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import Layout from '../Layout';
import AdminProfile from './AdminProfile';

function MyBookings() {
    return (
        <div>
            <AdminProfile />
        </div>
    )
}

export default MyBookings