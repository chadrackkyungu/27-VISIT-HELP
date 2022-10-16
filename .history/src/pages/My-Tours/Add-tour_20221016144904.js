import React, { useState, useEffect } from "react";
import { AvForm } from "availity-reactstrap-validation"
import MetaTags from 'react-meta-tags';
import { Container, Card, CardBody, Spinner } from "reactstrap"
import Form1 from "./components/AddtourForm";
import Form2 from "./components/AddTourFrom2";
import Layout from "../Layout"
import { Link } from "react-router-dom";

const AddTour = () => {

    const [loadBtn, setloadBtn] = useState();
    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)
        console.log(values)
    }

    return (
        <Layout>
            <Container fluid>
                <Link> Back</Link>
                <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <Card>
                        <CardBody>
                            <Form1 />
                            <Form2 />
                            <button className="btn text-white mt-4" type="submit" onClick={() => setSubmit(true)} >
                                {!loadBtn ? <span className="me-2">Submit</span> : null}
                                {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                            </button>
                        </CardBody>
                    </Card>
                </AvForm>
            </Container>
        </Layout >
    )
}

export default AddTour