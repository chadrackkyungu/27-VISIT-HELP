import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import TicketsTable from "./components/MyTickets";

const MyTourGuide = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Container fluid>
                    <TicketsTable />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MyTourGuide