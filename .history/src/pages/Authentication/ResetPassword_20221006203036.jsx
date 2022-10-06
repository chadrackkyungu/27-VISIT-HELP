import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Spinner, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import ResetForm from "./components/ResetForm";
import loginImg from "../../assets/images/Register/login.svg";

const ResetPassword = () => {
  const [loadBtn, setloadBtn] = useState();

  function handleValidSubmit(e, values) {
    e.preventDefault();
    console.log(values)

  }

  return (
    <React.Fragment>
      <MetaTags>
        <title> Reset Password | reset password page </title>
      </MetaTags>

      <Row>

        <Col md={3} className="registration-img">
          <div> <h3 className="text-white mt-4 mb-4">Reset Password </h3> </div>
          <div className="img-container mt-5 mb-3">
            <img src={loginImg} alt="" />
          </div>
          <p className="text-white mt-5 mb-4 m-5 text-center"> Your information is safe with us </p>
        </Col>

        <Col md={9}>
          <Card className="overflow-hidden">
            <CardBody className="p-4">
              <div className="p-3">
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >

                  <ResetForm />

                  <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit" onClick={() => setSubmit(true)} >
                    {!loadBtn ? <span className="me-2">Reset Password</span> : null}
                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                  </button>
                </AvForm>
              </div>
            </CardBody>
          </Card>

          <p className="mb-0">
            Cpoy right © {new Date().getFullYear()} Visit-help.com
            <i className="mdi mdi-heart text-danger" />
            By visit - help
          </p>

        </Col>
      </Row>

    </React.Fragment>
  )
}

export default ResetPassword
