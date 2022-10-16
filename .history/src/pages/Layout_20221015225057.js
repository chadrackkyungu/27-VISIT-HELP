import React, { useEffect } from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row } from "reactstrap"
import "./Styles.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import { useStore1Selector } from '../index';
import { userDetails } from '../Redux/Slices/userSlice'
import { useHistory } from "react-router-dom"

function Layout(props) {

    const history = useHistory()
    const userDet = useStore1Selector(userDetails);

    useEffect(() => {
        var checkLogin = userDet?.token
        checkLogin
    }, []);

    console.log(checkLogin)
    // if (!checkLogin) { return <div></div> }

    if (!checkLogin) {
        return (
            window.setTimeout(() => {
                history.push("/login");
            })
        )
    }

    return (
        <React.Fragment>
            <MetaTags>
                <title> Account</title>
            </MetaTags>

            <Row className='Account-container'>
                <Col md={2} className='sidebar'>
                    <SidebarContent />
                </Col>

                <Col m={10} className='content'>
                    <div className="page-content">
                        {props.children}
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Layout