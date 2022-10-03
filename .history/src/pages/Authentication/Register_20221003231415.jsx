import PropTypes from "prop-types"
import React, { useEffect, useState, useRef } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container, Spinner, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import AuthNavbar from './AuthNavbar';
import Image from "../../assets/images/users/user-9.jpg";
import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import FormInput4 from "./components/FormInput4";
import FormInput5 from "./components/FormInput5";

const Register = props => {

  const [loadBtn, setloadBtn] = useState();
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();

  const handleValidSubmit = (e, v) => {
    e.preventDefault();
    setloadBtn(true)

    console.log(v)

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
    <React.Fragment>
      <MetaTags>
        <title> Visit help | Register</title>
      </MetaTags>

      {/* <AuthNavbar Login="LogIn" question="Already have an account ?" loginRoute="login" /> */}

      <Row>
        <Col md={9}>
          <div className="d-flex justify-content-center align-items-center mb-5 mt-3">

            <img src={profile === undefined ? Image : profile} alt="user" width={100} height={100} className="rounded-circle" />
            <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
              onClick={onThumbChangeClick}
            > <i className="ion ion-md-image"></i>
            </Button>
            <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
          </div>

          <Card className="overflow-hidden">

            <CardBody className="p-4">
              <div className="p-3">
                <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                  <FormInput1 />
                  <FormInput2 />
                  <FormInput3 />
                  <FormInput4 />
                  <FormInput5 />

                  <div className="mb-3 row mt-3">
                    <div className="col-12 text-start">
                      <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                        {!loadBtn ? <span className="me-2">Submit</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                      </button>
                    </div>
                  </div>

                </AvForm>
              </div>
            </CardBody>
          </Card>

          <div className="mt-5 text-center">
            <p>
              © {new Date().getFullYear()} Crafted with
              <i className="mdi mdi-heart text-danger" /> by Visit-help
            </p>
          </div>
        </Col>


        <Col md={3}>
          <div className="registration-img">

          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default Register