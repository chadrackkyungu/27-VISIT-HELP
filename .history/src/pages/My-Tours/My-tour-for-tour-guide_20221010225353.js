import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import LeadGuideTours from "./components/LeadGuideTours"
import Layout from '../components/Layout';

const MyTourGuide = () => {

    return (
        <Layout>
            <Container fluid>
                <LeadGuideTours />
            </Container>
        </Layout>
    )
}

export default MyTourGuide