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
                <div>
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