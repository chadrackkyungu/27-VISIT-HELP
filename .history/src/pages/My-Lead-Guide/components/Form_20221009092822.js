import React, { useEffect, useState, useRef } from "react"
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Card, Spinner, Button, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Image from "../../../assets/images/users/user-9.jpg";
import Form1 from "./form1";
import Form1 from "./form2";

function Form() {

    const [loadBtn, setloadBtn] = useState();
    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();

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
        <div>

            <div className="d-flex justify-content-center align-items-center mt-3">
                <img src={profile === undefined ? Image : profile} alt="user" width={100} height={100} className="rounded" />
                <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                    onClick={onThumbChangeClick}
                > <i className="ion ion-md-image"></i>
                </Button>
                <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
            </div>

            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Form1 />
                <Form2 />

                <Row>
                    <Col md={4}>
                        <div className="mb-3">
                            <AvField
                                name="IdNumber"
                                label="Id / Passport Number"
                                type="text"
                                placeholder="Id or passport number"
                                required
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mb-3">
                            <AvField
                                name="phoneNumber"
                                label="Phone Number"
                                type="number"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mb-3">
                            <AvField
                                name="alternativeNumber"
                                label="Alternative Number"
                                type="number"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </Col>
                </Row>


            </AvForm>
        </div>
    )
}

export default Form