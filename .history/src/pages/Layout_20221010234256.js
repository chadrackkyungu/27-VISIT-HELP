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
                <Col md={2} className='sidebar'>
                    <SidebarContent />
                </Col>

                <Col m={8} className='content'>
                    <div className="page-content">
                        {props.children}
                    </div>
                </Col>
            </Row>

        </React.Fragment >
    )
}

export default Layout