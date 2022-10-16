import React from 'react';
// import "./../Styles.scss"
import MetaTags from 'react-meta-tags';
import { Col, Row, Card, CardBody, Container } from "reactstrap"
import "./Styles.scss"
import SidebarContent from 'components/HorizontalLayout/SidebarContent';
import { useStore1Selector } from '../index';
import { userDetails } from '../Redux/Slices/userSlice'
import { Link } from 'react-router-dom';

function Layout(props) {

    const userDet = useStore1Selector(userDetails);
    const checkLogin = userDet?.token

    if (!checkLogin) {
        return (
            <div className="page-content">
                <Container fluid>
                    <Card className="overflow-hidden mt-5">
                        <CardBody className="p-4">
                            <h5> To view this content you need to login ,  <Link to="/#">Login</Link> </h5>
                        </CardBody>
                    </Card>
                </Container>
            </div>
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