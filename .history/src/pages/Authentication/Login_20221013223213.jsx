import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useEffect, useState } from "react"
import { Row, Col, CardBody, Card, Spinner, Container } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { useHistory, useLocation, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import loginImg from "../../assets/images/Register/login.svg";
import { successMessage, warningMessage } from "../../components/Toast"

const Login = props => {
  const history = useHistory()
  const location = useLocation()
  const [loadBtn, setloadBtn] = useState();

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    setloadBtn(true)
    console.log(values)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": values.email,
      "password": values.password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://tourisms.herokuapp.com/api/v1/users/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          alert("You have successfully logged in!");
          successMessage("You have successfully logged in!");
          setloadBtn(false);
        }
      })
      .catch(error => console.log('error', error));
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

                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                      {!loadBtn ? <span className="me-2">Submit</span> : null}
                      {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>

                    <div className="col-12 mt-5">
                      You don't have an account ? <Link to="/register" className='text-success'> Register </Link>
                    </div>

                  </AvForm>
                </div>
              </CardBody>
            </Card>
            <p className="mt-5 text-center">
              ?? {new Date().getFullYear()} Visit - help. Crafted with
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
