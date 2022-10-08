import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"

const TourDetails = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    <h1> Tour details page  </h1>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TourDetails