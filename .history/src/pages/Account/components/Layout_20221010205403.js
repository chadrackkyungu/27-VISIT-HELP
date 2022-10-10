import React from 'react';
import { Col } from "reactstrap"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';


function Layout(props) {
    return (
        <React.Fragment>
            <Col md={2} className="bg-white">
                <SidebarContent />
            </Col>
            <Col md={10} className="mt-5">
                {props.children}
            </Col>
        </React.Fragment>
    )
}

export default Layout