import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import { Row, Col, Card, CardBody, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import loginImg from "../../assets/images/Register/login.svg";

const ForgetPasswordPage = props => {

  const [loadBtn, setloadBtn] = useState();
  const handleValidSubmit = (e, inputVal) => {
    e.preventDefault();

  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | visit help </title>
      </MetaTags>

      <Row>
        <Col md={3} className="registration-img">
          <div> <h3 className="text-white mt-4 mb-4"> Forgot Password </h3> </div>
          <div className="img-container mt-5 mb-3">
            <img src={loginImg} alt="" />
          </div>
          <p className="text-white mt-5 mb-4 m-5 text-center"> Your information is safe with us </p>
        </Col>

        <Col md={9} d-flex justify-content-center align-items-center>
          <Card className="overflow-hidden">
            <CardBody className="p-4">
              <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                <div className="mb-3">
                  <AvField name="email" label="Email" className="form-control" placeholder="Enter email"
                    type="email"
                    required
                  />
                </div>
                <Row className="mb-3">
                  <Col className="text-end">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit" onClick={() => setSubmit(true)} >
                      {!loadBtn ? <span className="me-2">Reset Password</span> : null}
                      {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                  </Col>
                </Row>
              </AvForm>
            </CardBody>
          </Card>

          <p className="p-1">
            © {new Date().getFullYear()} Online Learning. Crafted with
            <i className="mdi mdi-heart text-danger" /> by visit-help.com
          </p>

        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ForgetPasswordPage

