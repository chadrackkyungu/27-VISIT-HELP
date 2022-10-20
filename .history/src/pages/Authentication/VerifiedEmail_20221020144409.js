import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import { Row, Col, Card, Spinner } from "reactstrap"
import { useHistory, useParams } from "react-router-dom"
import loginImg from "../../assets/images/Register/login.svg";
import { successMessage, warningMessage } from "../../components/Toast"

const VerifiedEmail = () => {
    const { userId, token } = useParams()
    const history = useHistory()
    const [loadBtn, setloadBtn] = useState();

    const verifiedHandler = () => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        const raw = "";
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://tourisms.herokuapp.com/api/v1/users/verify/${userId}/${token}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    successMessage('Successful verified')
                    setloadBtn(false)
                    window.setTimeout(() => {
                        history.push("/login");
                    }, 2000);
                }
            })
            .catch(error => {
                warningMessage('Fail to verified', error.message)
                setloadBtn(false)
            });
    }

    return (
        <React.Fragment>
            <MetaTags>
                <title>Visit Help | Verify page </title>
            </MetaTags>

            <Row>
                <Col md={3} className="registration-img">
                    <div> <h3 className="text-white mt-4 mb-4">Verified email </h3> </div>
                    <div className="img-container mt-5 mb-3">
                        <img src={loginImg} alt="" />
                    </div>
                    <p className="text-white mt-5 mb-4 m-5 text-center"> Your information is safe with us </p>
                </Col>

                <Col md={9} className="d-flex justify-content-center align-items-center">
                    <div className='w-50'>
                        <Card className="overflow-hidden">
                            <p className="text-dark mt-5 mb-4 m-5 text-center"> Click on the button bellow to verify your email </p>
                            <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit" onClick={() => { verifiedHandler }}>
                                {!loadBtn ? <span className="me-2">Verify</span> : null}
                                {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                            </button>
                        </Card>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerifiedEmail
