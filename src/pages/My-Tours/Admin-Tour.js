import React, { useState, useEffect } from "react";
import "./Styles.scss";
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import AdminTours from "./components/Admin-tour"
import AllTours from "./components/Alltours";
import TourOnSelling from "./components/Tour-on-selling";
import TourInProgress from "./components/TourInProgress";

const AdminTour = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    <AdminTours />
                    <TourOnSelling />
                    <TourInProgress />
                    <AllTours />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AdminTour