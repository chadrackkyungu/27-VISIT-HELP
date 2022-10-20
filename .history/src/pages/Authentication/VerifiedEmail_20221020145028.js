import MetaTags from 'react-meta-tags';
import React, { useState } from "react"
import "../Styles.scss";
import { Row, Col, Card, Spinner } from "reactstrap"
import { useHistory, useParams } from "react-router-dom"
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
                <Col md={12} className="card-container">
                    <div className='w-25'>
                        <Card className="overflow-hidden">
                            <p className="text-dark mt-5 mb-4 m-5 text-center"> Click on the button bellow to verify your email </p>
                            <div className=" text-center">
                                <button className="btn btn-registration-clr w-md waves-effect waves-light w-75 mt-4 mb-5 " type="submit" onClick={() => { verifiedHandler }}>
                                    {!loadBtn ? <span className="me-2">Verify</span> : null}
                                    {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                                </button>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerifiedEmail
