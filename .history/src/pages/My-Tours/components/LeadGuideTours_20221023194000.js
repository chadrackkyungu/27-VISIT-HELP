import React, { useState, useEffect } from "react";
import "../Styles.scss";
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap";
import tour1 from "../../../assets/images/gallery/tour-1.svg";
import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";

const LeadGuideTours = () => {

    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const userDet = user?.data?.data;
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/users/lead-guide`, token);

    console.log(data)
    console.log(userDet)

    return (
        <React.Fragment>
            <Row >
                <Col md={4}>
                    <h4> Upcoming </h4>
                    <Card className='lead-guide-tour-card'>
                        <CardBody>
                            <div className="lead-guide-img-container">
                                <img src={tour1} alt="" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>Park virunga</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/tour-details/1" className='btn btn-success'>View details</Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LeadGuideTours