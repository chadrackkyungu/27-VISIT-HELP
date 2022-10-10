import React from 'react';
import { Col, Row } from "reactstrap"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';


function Layout(props) {
    return (
        <React.Fragment>
            <Row>

                <Col md={2} className="bg-white">
                    <SidebarContent />
                </Col>
                <Col md={10} className="mt-5">
                    {props.children}
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Layout