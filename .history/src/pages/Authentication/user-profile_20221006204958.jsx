import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect } from "react"
import {
  Container,
  Card,
  CardBody,
} from "reactstrap"

import { AvForm } from "availity-reactstrap-validation"
import FormInput1 from './components/FormInput1';
import FormInput2 from './components/FormInput2';
import FormInput3 from './components/FormInput3';
import FormInput4 from './components/FormInput4';
import FormInput5 from './components/FormInput5';

const UserProfile = () => {

  const [loadBtn, setloadBtn] = useState();
  function handleValidSubmit(e, values) {
    e.target.preventDefault()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | visit-help </title>
        </MetaTags>
        <Container fluid>

          <Card>
            <CardBody>
              <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                <FormInput1 />
                <FormInput2 />
                <FormInput3 />
                <FormInput4 />
                <FormInput5 />

                <button className="btn btn-registration-clr w-md waves-effect waves-light" type="submit" onClick={() => setSubmit(true)} >
                  {!loadBtn ? <span className="me-2">Submit</span> : null}
                  {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                </button>


              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default UserProfile