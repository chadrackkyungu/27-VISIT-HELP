import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { useLocation, useHistory } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

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



      <Row >
        <p className="bg-success text-white">{msg}</p>

        <Col md={8} lg={6} xl={4}>
          <Card className="overflow-hidden">
            <div className="clr-registration">
              <div className="text-primary text-center p-4">
                <h5 className="text-white font-size-20 p-2">
                  Reset Password
                </h5>
              </div>
            </div>

            <CardBody className="p-4">
              <div className="p-3">
                <div className="alert alert-success mt-5" role="alert" >
                  Enter Your Password!
                </div>

                <AvForm
                  className="form-horizontal mt-4"
                  onValidSubmit={(e, v) => {
                    handleValidSubmit(e, v)
                  }} >
                  <div className="mb-3">
                    <AvField
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>

                  <div className="row mb-0">
                    <Col xs={12} className="text-end">
                      <button
                        className="btn btn-registration-clr w-md waves-effect waves-light"
                        type="submit"
                      >
                        Reset password
                      </button>
                    </Col>
                  </div>
                </AvForm>
              </div>
            </CardBody>
          </Card>

          <div className="mt-5 text-center">

            <p className="mb-0">
              Cpoy right © {new Date().getFullYear()} Evening Lessons
              <i className="mdi mdi-heart text-danger" />
              By chadrack_code
            </p>
          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default ResetPassword
