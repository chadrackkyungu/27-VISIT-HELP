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
            <div className="sidebar">
                <SidebarContent />

            </div>

            <div>
                {props.children}
            </div>

        </React.Fragment >
    )
}

export default Layout