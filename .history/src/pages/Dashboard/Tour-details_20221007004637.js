import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import { useParams } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";

const TourDetails = () => {
    const { id } = useParams()
    console.log(id)

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
                <Link> <BiArrowBack /> </Link>
                <Container fluid>
                    <h1> Tour details page  </h1>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TourDetails