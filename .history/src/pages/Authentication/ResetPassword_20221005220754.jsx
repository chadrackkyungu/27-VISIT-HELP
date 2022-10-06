import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Spinner, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"

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
        <p className="bg-success text-white">{msg}</p>

        <Col md={8} lg={6} xl={4}>
          <Card className="overflow-hidden">

            <CardBody className="p-4">
              <div className="p-3">
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >


                  <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit" onClick={() => setSubmit(true)} >
                    {!loadBtn ? <span className="me-2">Reset Password</span> : null}
                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                  </button>
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
