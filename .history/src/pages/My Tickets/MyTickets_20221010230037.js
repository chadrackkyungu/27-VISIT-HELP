import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import TicketsTable from "./components/MyTickets";
import Layout from "../Layout";

const MyTourGuide = () => {

    return (
        <Layout>
            <Container fluid>
                <TicketsTable />
            </Container>
        </Layout>
    )
}

export default MyTourGuide