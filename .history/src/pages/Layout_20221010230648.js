import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row } from "reactstrap"
import "./Styles.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';

function Layout(props) {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title> Account</title>
                </MetaTags>
                <div className='Account-container'>
                    <div>
                        <SidebarContent />
                    </div>

                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Layout