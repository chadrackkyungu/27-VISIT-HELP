import React from 'react';
import MetaTags from 'react-meta-tags';
import { Col, Row, Container } from "reactstrap"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';


function Layout(props) {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Account</title>
                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col md={2} className="bg-white sidebar">
                            <SidebarContent />
                        </Col>
                        <Col md={10} className="mt-5">
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Layout