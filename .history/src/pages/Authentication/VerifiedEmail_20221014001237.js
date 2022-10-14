import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useEffect, useState } from "react"
import { Row, Col, CardBody, Card, Spinner, Container } from "reactstrap"
import { useHistory, useLocation, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import loginImg from "../../assets/images/Register/login.svg";
import { successMessage, warningMessage } from "../../components/Toast"

const VerifiedEmail = props => {
    const history = useHistory()
    const location = useLocation()
    const [loadBtn, setloadBtn] = useState();

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer null");
        myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzBjMzNlMGRhNWMwZmUwZGJmZGY3YiIsImlhdCI6MTY2NTY5Mjc4MSwiZXhwIjoxNjczNDY4NzgxfQ.FJoiNydawqTW2U3kt4aifHgUEsdHy3fB86ClAMZr748");

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://tourisms.herokuapp.com/api/v1/users/verify/6329b28f31310776631728cf/8ddd3151d99023843a892b7029bd22da24d720fe11593e48e55c8e174c393726\n", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
                            <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                                {!loadBtn ? <span className="me-2">Submit</span> : null}
                                {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                            </button>
                        </Card>
                    </div>
                </Col>

            </Row>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    const { error } = state.Login
    return { error }
}

export default VerifiedEmail
