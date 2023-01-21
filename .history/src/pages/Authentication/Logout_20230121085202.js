import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Spinner, Row, Container } from "reactstrap"
import { Link, useHistory } from "react-router-dom";
import { successMessage, warningMessage } from "../../components/Toast"
import { useStore1Selector } from "index";
import { userDetails } from './../../Redux/Slices/userSlice';
import { useStore1Dispatch } from './../../index';

const Logout = () => {
    const history = useHistory()
    const userDet = useStore1Selector(userDetails);
    const dispatch = useStore1Dispatch();
    const Token = userDet?.token
    const [loadBtn, setloadBtn] = useState();

    function loutFunc() {
        setloadBtn(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);

        const raw = "";
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://tourism.up.railway.app/api/v1/users/logout", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    dispatch(Login(""));
                    successMessage("You have successfully logged out!");
                    window.setTimeout(() => {
                        history.push("/login");
                    })
                }
                if (result.status === 'fail') {
                    warningMessage(`Try again something went wrong ${result.message}`);
                }
            })
            .catch(error => {
                warningMessage(`Something went wrong try again ${error.message}`);
            });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags> <title> Visit | Logout </title> </MetaTags>

                <Row>
                    <Col md={12} className="d-flex justify-content-center align-items-center">
                        <Card className="overflow-hidden w-50 text-center">
                            <CardBody className="p-4">
                                <h3>Are you sure you want to logout ?</h3>
                                <button className="btn btn-registration-clr w-md waves-effect waves-light w-25 mt-4" onClick={() => loutFunc}>
                                    {!loadBtn ? <span className="me-2" > Logout </span> : null}
                                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                                </button>

                                <div className="col-12 mt-5">
                                    Do you want to go back ? <Link to="/" className='text-success'> Yes </Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Logout
