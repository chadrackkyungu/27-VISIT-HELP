import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useEffect, useState } from "react"
import { Row, Col, CardBody, Card, Spinner, Container } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { auth } from '../../Database/init-firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useHistory, useLocation } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import Image from "../../assets/images/users/user-9.jpg";
import SignUp from "../../assets/images/Register/Sign up.svg";

const Login = props => {
  const history = useHistory()
  const location = useLocation()
  const [loadBtn, setloadBtn] = useState();

  const handleValidSubmit = (e, inputVal) => {
    e.preventDefault();
    loginFunc(inputVal);
  }

  function loginFunc(v) {
    signInWithEmailAndPassword(auth, v.email, v.password).then((res) => {
      alert("successfully logged in", res);
      history.replace(location.state?.from ?? "/dashboard")
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log("An error : ", errorCode, errorMessage);
    })
  }


  function googleSignInFunc() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then((res) => {
      alert("successfully logged in", res);
      history.replace(location.state?.from ?? "/dashboard")
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log("An error : ", errorCode, errorMessage);
    })
  }

  //! this check if the user was on the page
  useEffect(() => {
    logEvent(analytics, 'Login Page Visited', { name: 'Chad' });
  }, [])

  logEvent(analytics, 'Login Page Visited', { name: 'Chad' });

  return (
    <React.Fragment>
      <MetaTags>
        <title>Visit Help | Login page </title>
      </MetaTags>

      {/* <AuthNavbar Login="Register" question="I don't have an account ?" loginRoute="register" /> */}

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>

            <Col md={3} className="registration-img">
              <div> <h3 className="text-white mt-4 mb-4">Sign Up</h3> </div>
              <div className="img-container">
                <img src={SignUp} alt="" />
              </div>
              <p className="text-white mt-4 mb-4 m-5 text-center"> Register with us your information is very well secured </p>
            </Col>


            <Col md={9}>
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                      <LoginForm />

                      <div className="col-12 mt-4">
                        <button className="btn btn-registration-clr w-md waves-effect waves-light w-100" type="submit" onClick={() => setSubmit(true)} >
                          {!loadBtn ? <span className="me-2">Submit</span> : null}
                          {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                        </button>
                      </div>

                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p className="bg-white p-1">
                  ?? {new Date().getFullYear()} Visit - help. Crafted with
                  <i className="mdi mdi-heart text-danger" /> by the dev
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default Login
