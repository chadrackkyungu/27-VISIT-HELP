import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import AdminProfile from './AdminProfile';
import LeadGuideProfile from './LeadGuideProfile';
import UserProfile from './user-profile';

function MyBookings() {
    return (
        <div>
            <AdminProfile />
            <LeadGuideProfile />
            <UserProfile />
        </div>
    )
}

export default MyBookings