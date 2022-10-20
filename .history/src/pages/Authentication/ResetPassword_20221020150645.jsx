import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Spinner, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import ResetForm from "./components/ResetForm";
import resetPassword from "../../assets/images/Register/reset-password.svg";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams()
  const [loadBtn, setloadBtn] = useState();

  function handleValidSubmit(e, values) {
    e.preventDefault();
    console.log(values)

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer null");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDlhZTZlOTYwMDM5YmQyYWM3ZGNmYSIsImlhdCI6MTY2NjI2MTU4MSwiZXhwIjoxNjc0MDM3NTgxfQ.ddUY-1IXV-YOV3XBbgG7_aMakfuqfFc-P-MCGN3MdFE");

    var raw = JSON.stringify({
      "password": "pass1234",
      "passwordConfirm": "pass1234"
    });

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

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
            <img src={resetPassword} alt="" />
          </div>
          <p className="text-white mt-5 mb-4 m-5 text-center"> Your information is safe with us </p>
        </Col>

        <Col md={9} className="d-flex justify-content-center align-items-center">
          <div className='w-50'>
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

            <p className="mb-0 text-center">
              Cpoy right © {new Date().getFullYear()} Visit-help.com
              <i className="mdi mdi-heart text-danger" />
              By visit - help
            </p>
          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default ResetPassword
