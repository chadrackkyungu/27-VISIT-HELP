import React, { useState, useEffect } from "react";
import "../Styles.scss";
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap";
import tour1 from "../../../assets/images/gallery/tour-1.svg";
import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import { BsArrowRight } from "react-icons/bs";
import Empty from "components/Empty";

const LeadGuideTours = () => {

    const user = useStore1Selector(userDetails);
    const token = user?.token;
    const userId = user?.data?.data?._id;
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/users/lead-guide`, token);

    const filter = data?.filter(myTour => {
        return myTour?._id === userId
    })

    if (!filter[0]?.tours) {
        return <React.Fragment> <Empty empty="You have no tour assign to you yet" />  </React.Fragment>
    }

    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='tour-img-container'>
                                <img src={`${tourImg}${filter[0]?.tours?.imageCover}`} alt="" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className='mt-3 text-uppercase'> {filter[0]?.tours?.name} </h6>
                            </div>
                            <p> {filter[0]?.tours?.summary} </p>

                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Link to={`/tour-details/${filter[0]?.tours?._id}`}>  View  <BsArrowRight />  </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LeadGuideTours