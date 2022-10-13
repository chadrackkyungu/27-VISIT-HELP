import PropTypes from "prop-types"
import React, { useEffect, useState, useRef } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Spinner, Button, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import AuthNavbar from './AuthNavbar';
import Image from "../../assets/images/users/user-9.jpg";
import SignUp from "../../assets/images/Register/Sign up.svg";
import { successMessage, warningMessage } from "../../components/Toast"

import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import FormInput4 from "./components/FormInput4";
import FormInput5 from "./components/FormInput5";
import UserDetails from "./components/UserDetails";

const Register = props => {

  const [loadBtn, setloadBtn] = useState();
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();
  const [activeTab, setactiveTab] = useState(1)
  const [submit, setSubmit] = useState(false)
  const [showDetails, setShowDetails] = useState()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    setShowDetails(values)

    console.log(values)

    if (submit) {
      setloadBtn(true)
    }

    const myHeaders = new Headers();
    const formdata = new FormData();
    formdata.append("firstName", values.firstName);
    formdata.append("lastName", values.lastName);
    formdata.append("IdNumber", values.IdNumber);
    formdata.append("phoneNumber", values.phoneNumber);
    formdata.append("alternativeNumber", values.alternativeNumber);
    formdata.append("gender", values.gender);
    formdata.append("dateOfBirth", values.dateOfBirth);
    formdata.append("streetAddress", values.streetAddress);
    formdata.append("country", values.country);
    formdata.append("stateProvince", values.stateProvince);
    formdata.append("city", values.city);
    formdata.append("houseNumber", values.houseNumber);
    formdata.append("zipCode", values.zipCode);
    formdata.append("agreed", values.checkboxCustomInputExample2[0]);
    formdata.append("email", values.email);
    formdata.append("photo", !profileServer ? " " : profileServer);
    formdata.append("password", values.password);
    formdata.append("passwordConfirm", values.passwordConfirm);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://tourisms.herokuapp.com/api/v1/users/signup", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "success") {
          successMessage('Verified your email to complete your registration')
          setloadBtn(false)
        }
        if (result.status === "fail") {
          warningMessage(message)
          setloadBtn(false)
        }
      })
      .catch(error => {
        warningMessage(`Sorry something went wrong please try again ${error.message}`)
      });

  }

  const refFileUpload = useRef(null);
  const onThumbChangeClick = () => {
    if (refFileUpload) {
      refFileUpload.current.dispatchEvent(new MouseEvent('click'));
    }
  };

  const changeThumb = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileServer(event.target.files[0]);

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setProfile(loadEvent.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        setactiveTab(tab)
      }
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title> Visit help | Register</title>
      </MetaTags>

      <Row>
        <Col md={3} className="registration-img">
          <div> <h3 className="text-white mt-4 mb-4">Sign Up</h3> </div>
          <div className="img-container">
            <img src={SignUp} alt="" />
          </div>
          <p className="text-white mt-4 mb-4 m-5 text-center"> Register with us your information is very well secured </p>
        </Col>

        <Col md={9}>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <img src={profile === undefined ? Image : profile} alt="user" width={100} height={100} className="rounded" />
            <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
              onClick={onThumbChangeClick}
            > <i className="ion ion-md-image"></i>
            </Button>
            <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
          </div>

          <CardBody className="form-horizontal form-wizard-wrapper wizard clearfix ">
            <CardBody className="steps clearfix">
              <ul>
                <NavItem
                  className={classnames({ current: activeTab === 1 })}>
                  <NavLink
                    className={classnames({ current: activeTab === 1 })}
                    onClick={() => { setactiveTab(1) }}>
                    <span className="number">1</span>
                    Personal Details
                  </NavLink>
                </NavItem>

                <NavItem className={classnames({ current: activeTab === 2 })}>
                  <NavLink
                    className={classnames({ active: activeTab === 2 })}
                    onClick={() => { setactiveTab(2) }}>
                    <span className="number">2</span>
                    Address Details
                  </NavLink>
                </NavItem>

                <NavItem className={classnames({ current: activeTab === 3 })}>
                  <NavLink
                    className={classnames({ active: activeTab === 3 })}
                    onClick={() => { setactiveTab(3) }}>
                    <span className="number">3</span>
                    Review your details
                  </NavLink>
                </NavItem>

              </ul>
            </CardBody>

            <CardBody>
              <Card className="overflow-hidden rounded-75">
                <CardBody className="p-2">
                  <div className="p-3">
                    <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                      <TabContent activeTab={activeTab} className="body mb-5">

                        <TabPane tabId={1}>
                          <FormInput1 />
                          <FormInput2 />
                          <FormInput3 />
                        </TabPane>

                        <TabPane tabId={2}>
                          <FormInput4 />
                          <FormInput5 />
                        </TabPane>

                        <TabPane tabId={3}>
                          <UserDetails details={!showDetails ? {} : showDetails} />
                        </TabPane>

                      </TabContent>

                      <ul className="d-flex me-5">
                        <li className={`me-4 ${activeTab === 1 ? "previous disabled" : "previous"}`}>
                          <Link to="#" className="btn btn-primary" onClick={() => { toggleTab(activeTab - 1) }}> Previous </Link>
                        </li>

                        <li className={`${activeTab === 3 ? "next disabled" : "next"} me-4`}>
                          <button className="btn btn-primary me-2" onClick={() => { toggleTab(activeTab + 1) }} type="submit"> Next </button>
                        </li>

                        {
                          activeTab === 3 ? (
                            <div className="col-12 text-center">
                              <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit" onClick={() => setSubmit(true)} >
                                {!loadBtn ? <span className="me-2">Submit</span> : null}
                                {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                              </button>
                            </div>
                          ) : null
                        }
                      </ul>

                    </AvForm>

                    <div className="col-12 mt-5">
                      You already have an account ? <Link to="/login" className='text-success'> Login </Link>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </CardBody>
          </CardBody>

          <div className="text-center">
            <p>
              © {new Date().getFullYear()} Crafted with
              <i className="mdi mdi-heart text-danger" /> by Visit-help
            </p>
          </div>

        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Register