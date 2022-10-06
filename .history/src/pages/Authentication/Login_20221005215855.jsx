import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useEffect, useState } from "react"
import { Row, Col, CardBody, Card, Spinner, Container } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { auth } from '../../Database/init-firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useHistory, useLocation } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import loginImg from "../../assets/images/Register/login.svg";

const Login = props => {
  const history = useHistory()
  const location = useLocation()
  const [loadBtn, setloadBtn] = useState();

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    setloadBtn(true)
    console.log(values)
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Visit Help | Login page </title>
      </MetaTags>

      <Row>

        <Col md={3} className="registration-img">
          <div> <h3 className="text-white mt-4 mb-4">Login </h3> </div>
          <div className="img-container mt-5 mb-3">
            <img src={loginImg} alt="" />
          </div>
          <p className="text-white mt-5 mb-4 m-5 text-center"> Your information is safe with us </p>
        </Col>

        <Col md={9} className="d-flex justify-content-center align-items-center">
          <div className='w-50'>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <div className="p-3">
                  <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <LoginForm />
                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit" onClick={() => setSubmit(true)} >
                      {!loadBtn ? <span className="me-2">Submit</span> : null}
                      {!loadBtn ? null : <span>   <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i> Loading...</span>}
                    </button>
                  </AvForm>
                </div>
              </CardBody>
            </Card>
            <p className="mt-5 text-center">
              © {new Date().getFullYear()} Visit - help. Crafted with
              <i className="mdi mdi-heart text-danger" /> by the dev
            </p>
          </div>
        </Col>

      </Row>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default Login
