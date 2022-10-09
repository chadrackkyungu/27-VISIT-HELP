import React, { useState, useEffect } from "react";
import { AvForm } from "availity-reactstrap-validation"
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

                    <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                        <button className="btn text-white mt-4" type="submit" onClick={() => setSubmit(true)} >
                            {!loadBtn ? <span className="me-2">Submit</span> : null}
                            {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                        </button>
                    </AvForm>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default AddTour