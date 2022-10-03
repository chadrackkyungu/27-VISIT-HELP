import PropTypes from "prop-types"
import React, { useEffect, useState, useRef } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Form, Spinner, Button, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import AuthNavbar from './AuthNavbar';
import Image from "../../assets/images/users/user-9.jpg";
import SignUp from "../../assets/images/Register/Sign up.svg";

import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import FormInput4 from "./components/FormInput4";
import FormInput5 from "./components/FormInput5";

const Register = props => {

  const [loadBtn, setloadBtn] = useState();
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();

  const handleValidSubmit = (e, v) => {
    e.preventDefault();
    setloadBtn(true)

    console.log(v)

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

  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title> Visit help | Register</title>
      </MetaTags>

      {/* <AuthNavbar Login="LogIn" question="Already have an account ?" loginRoute="login" /> */}

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
                    onClick={() => {
                      setactiveTab(1)
                    }}
                  >
                    <span className="number">1</span>
                    Personal Details
                  </NavLink>
                </NavItem>

                <NavItem className={classnames({ current: activeTab === 2 })}>
                  <NavLink
                    className={classnames({ active: activeTab === 2 })}
                    onClick={() => {
                      setactiveTab(2)
                    }}
                  >
                    <span className="number">2</span>
                    Address Details
                  </NavLink>
                </NavItem>

                <NavItem className={classnames({ current: activeTab === 3 })}>
                  <NavLink
                    className={classnames({ active: activeTab === 3 })}
                    onClick={() => {
                      setactiveTab(3)
                    }}
                  >
                    <span className="number">3</span>
                    Confirm Details
                  </NavLink>
                </NavItem>

              </ul>
            </CardBody>


            <CardBody>
              <Card className="overflow-hidden rounded-75">
                <CardBody className="p-2">
                  <div className="p-3">
                    <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                      <TabContent activeTab={activeTab} className="body">
                        <TabPane tabId={1}>
                          <FormInput1 />
                          <FormInput2 />
                          <FormInput3 />
                        </TabPane>
                        <TabPane tabId={2}>
                          <FormInput4 />
                          <FormInput5 />
                        </TabPane>
                      </TabContent>


                      {/* <div className="col-12 text-start">
                        <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit">
                          {!loadBtn ? <span className="me-2">Submit</span> : null}
                          {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                        </button>
                      </div> */}

                      <ul className="d-flex me-3">
                        <li className={activeTab === 1 ? "previous disabled" : "previous"}>
                          <Link to="#" className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          > Previous </Link>
                        </li>

                        <li className={activeTab === 2 ? "next disabled" : "next"}>
                          <Link to="#" className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab + 1)
                            }}
                          > Next </Link>
                        </li>

                      </ul>

                    </AvForm>
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