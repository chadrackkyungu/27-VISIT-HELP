import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect, useRef } from "react"
import { Container, Card, CardBody, Button, Col, Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import Image from "../../assets/images/users/user-9.jpg";
import Layout from '../Layout';
import UpdateLeadProfile from './components/LeadguideProfile';
import { userDetails, Login } from '../../Redux/Slices/userSlice'
import { useStore1Selector, useStore1Dispatch } from '../../index';
import { successMessage, warningMessage } from "../../components/Toast"
import { useHistory } from 'react-router-dom';

const LeadGuideProfile = () => {

    const dispatch = useStore1Dispatch();
    const history = useHistory()
    const userImg = "https://tourisms.herokuapp.com/img/users/";
    const [loadBtn, setloadBtn] = useState();
    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();
    const userDet = useStore1Selector(userDetails);
    const details = userDet?.data?.data;
    const photo = details?.photo
    const token = userDet?.token

    function handleValidSubmit(e, values) {
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
                    dispatch(Login(""));
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
                    <img src={!profile ? `${userImg}${photo}` : profile} alt="user" width={100} height={100} className="rounded" />
                    <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5" onClick={onThumbChangeClick}
                    > <i className="ion ion-md-image"></i>
                    </Button>
                    <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                </div>

                <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <Card>
                        <CardBody>
                            <UpdateLeadProfile details={details} />
                        </CardBody>
                    </Card>
                    <div className="text-center">
                        <button className="btn btn-registration-clr w-md waves-effect waves-light m-4" type="submit" onClick={() => setSubmit(true)} >
                            {!loadBtn ? <span className="me-2">Update</span> : null}
                            {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                        </button>
                    </div>
                </AvForm>
            </Container>
        </Layout>
    )
}

export default LeadGuideProfile