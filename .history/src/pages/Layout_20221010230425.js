import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row } from "reactstrap"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';

function Layout(props) {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Account</title>
                </MetaTags>

                <SidebarContent />
                {props.children}
            </div>
        </React.Fragment >
    )
}

export default Layout