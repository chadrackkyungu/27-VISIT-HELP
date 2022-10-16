import React, { useState, useRef } from "react";
import { AvForm } from "availity-reactstrap-validation"
import MetaTags from 'react-meta-tags';
import { Container, Card, CardBody, Spinner, Row, Col, Button } from "reactstrap"
import Image from "../../assets/images/users/user-9.jpg";
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

    const refFileUpload = useRef(null);
    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const changeThumb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };


    return (
        <Layout>
            <Container fluid>
                <Link to="/admin-tour" className="btn text-white mb-3"> Back </Link>
                <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <Card>
                        <CardBody>
                            <Form1 />
                            {/* <Form2 /> */}

                            <Row>
                                <Col md={6}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile === undefined ? Image : profile} alt="user" width={100} height={100} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                                    </div>
                                </Col>
                                <Col md={3}>

                                </Col>
                                <Col md={3}>

                                </Col>
                                <Col md={3}>

                                </Col>
                            </Row>

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