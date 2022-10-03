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
                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="mb-3 row">
                          <div className="col-12 text-end">
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