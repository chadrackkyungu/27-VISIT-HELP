import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import AdminProfile from './AdminProfile';
import LeadGuideProfile from './LeadGuideProfile';
import UserProfile from './user-profile';

function MyBookings() {
    return (
        <div>
            {/* Render This 3 components according to the user role */}
            <AdminProfile />
            {/* <LeadGuideProfile /> */}
            {/* <UserProfile /> */}
        </div>
    )
}

export default MyBookings