import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row } from "reactstrap"
import "./Styles.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';

function Layout(props) {
    return (
        <React.Fragment>
            <MetaTags>
                <title> Account</title>
            </MetaTags>
            <Row className='Account-container'>
                <Col md={3} className='sidebar'>
                    <SidebarContent />
                </Col>

                <Col m={9}>
                    {props.children}
                </Col>
            </Row>
        </React.Fragment >
    )
}

export default Layout