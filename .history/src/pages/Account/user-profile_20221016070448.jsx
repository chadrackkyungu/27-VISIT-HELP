import PropTypes from 'prop-types'
import React, { useState, useRef } from "react"
import { Container, Card, CardBody, Button, Spinner } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import UpdateProfile from './components/UpdateProfile';
import UpdatePasswordProfile from './components/UpdatePasswordProfile';
import Layout from '../Layout';
import { userDetails } from '../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../index';
import { successMessage, warningMessage } from "../../components/Toast"

const UserProfile = () => {

  const userImg = "https://tourisms.herokuapp.com/img/users/";
  const [loadBtn, setloadBtn] = useState(false);
  const [profile, setProfile] = useState();
  const [profileServer, setProfileServer] = useState();
  const userDet = useStore1Selector(userDetails);
  const details = userDet?.data?.data;
  const photo = details?.photo
  const token = userDet?.token

  function handleValidSubmit(e, values) {
    e.target.preventDefault();
    setloadBtn(true);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const formdata = new FormData();
    formdata.append("photo", !profileServer ? " " : profileServer);
    formdata.append("phoneNumber", values.phoneNumber);
    formdata.append("alternativeNumber", values.alternativeNumber);
    formdata.append("city", values.city);
    formdata.append("stateProvince", values.stateProvince);
    formdata.append("zipCode", values.zipCode);
    formdata.append("houseNumber", values.houseNumber);
    formdata.append("email", values.email);

    const requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/api/v1/users/updateMe", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          successMessage("You have successfully update your account");
          setloadBtn(false);
          window.setTimeout(() => {
            history.push("/login");
          }, 2000)
        }
        if (result.status === 'fail') {
          warningMessage("Try again something went wrong");
          setloadBtn(false);
        }
      })
      .catch(error => {
        warningMessage(`Something went wrong try again ${error.message}`);
        setloadBtn(false);
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

        <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit2(e, v) }}>
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