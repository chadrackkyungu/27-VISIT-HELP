import PropTypes from "prop-types"
import React, { useEffect, useState, useRef } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container, Spinner, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import AuthNavbar from './AuthNavbar';
import { useHistory, useLocation } from "react-router-dom"
import { perf, analytics } from '../../Database/init-firebase'
import { logEvent } from "firebase/analytics";

const Register = props => {

  const [loadBtn, setloadBtn] = useState();
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();

  const handleValidSubmit = (e, v) => {
    e.preventDefault();
    setloadBtn(true)

  }

  //! this check if the user was on the page
  useEffect(() => {
    logEvent(analytics, 'Register Page Visited', { name: 'Chad' });
  }, [])

  logEvent(analytics, 'Login Page Visited', { name: 'Chad' });

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

      <div className="register-container">
        <AuthNavbar Login="LogIn" question="Already have an account ?" loginRoute="login" />

        <div className="d-flex justify-content-center align-items-center mb-5">
          <img src={profile === undefined ? "" : profile} alt="user" width={100} height={100} />
          <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
            onClick={onThumbChangeClick}
          >
            <i className="ion ion-md-image"></i>
          </Button>
          <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
        </div>

        <div className="account-pages  pt-sm-5" >
          <Container>

            <Row className="justify-content-center">
              <Col md={12}>

                <Card className="overflow-hidden">

                  {/* <div className="clr-registration">
                    <div className="text-primary text-center p-4">
                      <h5 className="text-white font-size-20"> Register</h5>
                      <p className="text-white-50">Get your free account now.</p>

                    </div>
                  </div> */}


                  <CardBody className="p-4">
                    <div className="p-3">
                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                        <Row>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="firstName"
                                label="First Name"
                                className="form-control"
                                placeholder="Enter your first name"
                                type="text"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="lastName"
                                label="Last Name"
                                className="form-control"
                                placeholder="Enter your last name"
                                type="text"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <AvField
                                    name="birthDate"
                                    label="Date of birth"
                                    className="form-control"
                                    type="date"
                                    required
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <AvField
                                    name="gender"
                                    label="Gender"
                                    type="select"
                                    placeholder="Enter your last name"
                                    required
                                  >
                                    <option> Select... </option>
                                    <option> Male </option>
                                    <option> Female </option>
                                    <option> Others </option>
                                  </AvField>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="email"
                                label="Email"
                                className="form-control"
                                placeholder="Enter your email address"
                                type="email"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="password"
                                label="Password"
                                className="form-control"
                                placeholder="Enter your password"
                                type="password"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="confirmPassword"
                                label="Confirm Password"
                                className="form-control"
                                placeholder="Re enter your password"
                                type="password"
                                required
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="idNumber"
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
                                name="phoneNumber"
                                label="Alternative Number"
                                type="number"
                                placeholder="Enter your phone number"
                                required
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="country"
                                label="Country"
                                type="select"
                                required
                                placeholder="Enter your country"
                              >
                                <option> Select... </option>
                                <option> South Africa </option>
                                <option> Lesotho </option>
                              </AvField>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="city"
                                label="City"
                                type="text"
                                required
                                placeholder="Enter your city"
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="state"
                                label="State or province"
                                type="text"
                                required
                                placeholder="Enter state or province"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="zipCode"
                                label="Zip Code"
                                type="text"
                                required
                                placeholder="Enter your zip code"
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="houseNumber"
                                label="House Number"
                                type="text"
                                required
                                placeholder="Enter your house number"
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <AvField
                                name="state"
                                label="State or province"
                                type="text"
                                required
                                placeholder="Enter state or province"
                              />
                            </div>
                          </Col>
                        </Row>

                        <div className="mb-3 row mt-3">
                          <div className="col-12 text-start">
                            <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                              {
                                !loadBtn ? <span className="me-2">Submit</span> : null
                              }
                              {
                                !loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>
                              }
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
                    <i className="mdi mdi-heart text-danger" /> by chadrack
                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register