import React, { useState, useEffect } from "react";
import "./Styles.scss";
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import AdminTours from "./components/Admin-tour"
import AllTours from "./components/Alltours";
import TourOnSelling from "./components/Tour-on-selling";
import TourInProgress from "./components/TourInProgress";
import Layout from "../Layout";

const AdminTour = () => {

    return (
        <Layout>
            <Container fluid>
                <AdminTours />
                {/* <TourOnSelling /> */}
                {/* <TourInProgress /> */}
                <AllTours />
            </Container>
        </Layout>
    )
}

export default AdminTour