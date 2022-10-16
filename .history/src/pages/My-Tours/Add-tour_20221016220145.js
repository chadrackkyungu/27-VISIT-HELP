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
    const [profile2, setProfile2] = useState();
    const [profile3, setProfile3] = useState();
    const [profile4, setProfile4] = useState();
    const [profileServer, setProfileServer] = useState();
    const [profileServer2, setProfileServer2] = useState();
    const [profileServer3, setProfileServer3] = useState();
    const [profileServer4, setProfileServer4] = useState();

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)
        console.log(values)
    }

    const refFileUpload = useRef(null);
    const refFileUpload2 = useRef(null);
    const refFileUpload3 = useRef(null);
    const refFileUpload4 = useRef(null);
    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick2 = () => {
        if (refFileUpload2) {
            refFileUpload2.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick3 = () => {
        if (refFileUpload3) {
            refFileUpload3.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const onThumbChangeClick4 = () => {
        if (refFileUpload4) {
            refFileUpload4.current.dispatchEvent(new MouseEvent('click'));
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
    const changeThumb2 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer2(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile2(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeThumb3 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer3(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile3(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const changeThumb4 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer4(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile4(loadEvent.target.result);
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
                            <Col md={12}>
                                <div className="d-flex justify-content-center align-items-center mt-3">
                                    <img src={profile === undefined ? Image : profile} alt="user" width={900} height={350} className="rounded" />
                                    <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                        onClick={onThumbChangeClick}
                                    > <i className="ion ion-md-image"></i>
                                    </Button>
                                    <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                                </div>
                            </Col>

                            <Form1 />
                            {/* <Form2 /> */}

                            <Row>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile === undefined ? Image : profile} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile2 === undefined ? Image : profile2} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick2}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload2} className="file-upload d-none" accept="image/*" onChange={changeThumb2} />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile3 === undefined ? Image : profile3} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick3}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload3} className="file-upload d-none" accept="image/*" onChange={changeThumb3} />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <img src={profile4 === undefined ? Image : profile4} alt="user" width={200} height={150} className="rounded" />
                                        <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                                            onClick={onThumbChangeClick4}
                                        > <i className="ion ion-md-image"></i>
                                        </Button>
                                        <input type="file" ref={refFileUpload4} className="file-upload d-none" accept="image/*" onChange={changeThumb4} />
                                    </div>
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