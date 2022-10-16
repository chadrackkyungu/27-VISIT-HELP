import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect, useRef } from "react"
import { Container, Card, CardBody, Button, Col, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import UpdateProfile from './components/UpdateProfile';
import UpdatePasswordProfile from './components/UpdatePasswordProfile';
import Image from "../../assets/images/users/user-9.jpg";
import Layout from '../Layout';
import { userDetails } from '../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../index';

const UserProfile = () => {

  const userImg = "https://tourisms.herokuapp.com/img/users/";
  const [loadBtn, setloadBtn] = useState();
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();
  const userDet = useStore1Selector(userDetails);
  const details = userDet?.data?.data;
  const photo = details?.photo

  function handleValidSubmit(e, values) {
    e.target.preventDefault();
    setloadBtn(true);

    console.log(values);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDVjZTcwMzZjZWUyN2M4YzUyZTdlMiIsImlhdCI6MTY2NTg5NjAwNSwiZXhwIjoxNjczNjcyMDA1fQ.v9C4W1fYxHAjkDYGzrtlvHjxn3O_XAJG5temnkzrzA0");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzBjMzNlMGRhNWMwZmUwZGJmZGY3YiIsImlhdCI6MTY2NTc3MDIzMywiZXhwIjoxNjczNTQ2MjMzfQ.cxVbfyQ2Num2n4tjO7DDEhrkBanWKKfirj6gxrMuYqU");

    var formdata = new FormData();
    formdata.append("photo", fileInput.files[0], "/C:/Users/chadr/OneDrive/Desktop/LOIC/src/assets/images/users/avatar-8.jpg");
    formdata.append("phoneNumber", "0826000500");
    formdata.append("alternativeNumber", "0826000555");
    formdata.append("city", "johannesburg");
    formdata.append("stateProvince", "Gauteng");
    formdata.append("zipCode", "2199");
    formdata.append("houseNumber", "48");
    formdata.append("email", "whitney@gmail.com");

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/api/v1/users/updateMe", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

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

  return (
    <Layout>
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img src={profile === undefined ? `${userImg}${photo}` : profile} alt="user" width={100} height={100} className="rounded" />
          <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5" onClick={onThumbChangeClick}
          > <i className="ion ion-md-image"></i>
          </Button>
          <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
        </div>

        <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
          <Card>
            <CardBody>
              <UpdateProfile details={details} />
            </CardBody>
          </Card>
          <div className="text-center">
            <button className="btn btn-registration-clr w-md waves-effect waves-light m-4" type="submit" onClick={() => setSubmit(true)} >
              {!loadBtn ? <span className="me-2">Update</span> : null}
              {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
            </button>
          </div>
        </AvForm>

        <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
          <Card>
            <CardBody>
              <UpdatePasswordProfile />
            </CardBody>
          </Card>
          <div className="text-center">
            <button className="btn btn-registration-clr w-md waves-effect waves-light mb-4" type="submit" onClick={() => setSubmit(true)} >
              {!loadBtn ? <span className="me-2">Update</span> : null}
              {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
            </button>
          </div>
        </AvForm>

      </Container>
    </Layout>
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