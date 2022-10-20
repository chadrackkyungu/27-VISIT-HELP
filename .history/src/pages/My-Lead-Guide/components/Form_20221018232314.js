import React, { useEffect, useState, useRef } from "react"
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Row, Col, CardBody, Card, Spinner, Button, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Image from "../../../assets/images/users/user-9.jpg";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import { userDetails } from '../../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../../index';
import { successMessage, warningMessage } from "../../../components/Toast"

function Form() {

    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token
    const [loadBtn, setloadBtn] = useState();
    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("firstName", "Whitney");
        formdata.append("lastName", "matjie");
        formdata.append("IdNumber", "123456HYUI");
        formdata.append("phoneNumber", "0827000150");
        formdata.append("alternativeNumber", "0827000155");
        formdata.append("gender", "femal");
        formdata.append("dateOfBirth", "1997-02-23");
        formdata.append("streetAddress", "56 richard street");
        formdata.append("country", "South Africa");
        formdata.append("stateProvince", "Gauteng");
        formdata.append("city", "Joburg");
        formdata.append("houseNumber", "58");
        formdata.append("zipCode", "2198");
        formdata.append("agreed", "true");
        formdata.append("email", "chad@tngsolutions.co.za");
        formdata.append("photo", profileServer);
        formdata.append("password", "123456");
        formdata.append("passwordConfirm", "123456");

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
                    successMessage('Successful added the lead guide')
                    setloadBtn(false)
                    setModal(true)
                }
                if (result.status === "fail") {
                    warningMessage("Sorry something went wrong please try again")
                    setloadBtn(false)
                }
            })
            .catch(error => {
                warningMessage(`Sorry something went wrong please try again`)
                setloadBtn(false)
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
        <div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <img src={profile === undefined ? Image : profile} alt="user" width={100} height={100} className="rounded" />
                <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                    onClick={onThumbChangeClick}> <i className="ion ion-md-image"></i>
                </Button>
                <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
            </div>

            <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Form1 />
                <Form3 />
                <Form2 />
                <Form4 />
                <button className="btn text-white mt-4" type="submit" onClick={() => setSubmit(true)} >
                    {!loadBtn ? <span className="me-2">Submit</span> : null}
                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                </button>
            </AvForm>
        </div>
    )
}

export default Form