import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row, Card, CardBody } from "reactstrap"
import "./Styles.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import { useStore1Selector } from '../index';
import { userDetails } from '../Redux/Slices/userSlice'

function Layout(props) {

    const userDet = useStore1Selector(userDetails);
    const checkLogin = userDet?.token

    if (!checkLogin) {
        return (
            <Card className="overflow-hidden">
                <CardBody className="p-4">
                    <h2> You need to login </h2>
                </CardBody>
            </Card>
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