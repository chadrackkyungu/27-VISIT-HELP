import React, { useState, useEffect } from "react";
import "./Styles.scss";
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"

const AddTour = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    {/* <AdminTours />
                    <TourOnSelling />
                    <TourInProgress />
                    <AllTours /> */}
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AddTour