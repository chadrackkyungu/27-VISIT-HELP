import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import AuthNavbar from './AuthNavbar';
import { useHistory, useLocation } from "react-router-dom"
import { perf, analytics } from '../../Database/init-firebase'
import { logEvent } from "firebase/analytics";

const Register = props => {

  const handleValidSubmit = (e, v) => {
    e.preventDefault();

  }

  //! this check if the user was on the page
  useEffect(() => {
    logEvent(analytics, 'Register Page Visited', { name: 'Chad' });
  }, [])

  logEvent(analytics, 'Login Page Visited', { name: 'Chad' });

  return (
    <React.Fragment>
      <MetaTags>
        <title> Visit help | Register</title>
      </MetaTags>

      <div className="register-container">
        <AuthNavbar Login="LogIn" question="Already have an account ?" loginRoute="login" />
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
                                    type="text"
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
                                type="text"
                                required
                                placeholder="Enter your country"
                              />
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

                        <div className="mb-3 row mt-3
                        
                        ">
                          <div className="col-12 text-start">
                            <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                              Register
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