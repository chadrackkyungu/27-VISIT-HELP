import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import AllTours from "./components/AllTours";
import Newslatter from "./components/Newslatter";
import SlideBanner from './Slide-banner';

const TourDetails = () => {
    const [menu, setMenu] = useState(false)

    const toggle = () => {
        setMenu(!menu)
    }

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