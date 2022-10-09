import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"

const AdminTour = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    {/* <LeadGuideTours /> */}
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AdminTour