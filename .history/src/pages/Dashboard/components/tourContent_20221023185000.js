import React from 'react'
import "../Style.scss";
import { Row, Col } from "reactstrap"
import Img from "../../../assets/images/users/user-9.jpg"
import Img2 from "../../../assets/images/users/avatar-8.jpg"
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';

function tourContent({ id }) {

    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);
    {
        const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/users/lead-guide`);
    }

    if (!data) {
        return <Loading />
    }

    const filterTour = data.filter(tour => tour.id === id);
    const tourDate = filterTour[0]?.startDates[0]?.split("T")

    if (!tourDate) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='title'> {filterTour[0]?.name} </h2>

            <Row>
                <Col md={6}>
                    <h4 className='my-5'> QUICK FACTS </h4>
                    <p> <b>NEXT DATE </b> : {tourDate[0]} </p>
                    <p> <b>DIFFICULTY </b> : {filterTour[0]?.difficulty} </p>
                    <p> <b>PARTICIPANTS </b> : {filterTour[0]?.maxGroupSize} </p>

                    <h4 className='my-5'> YOUR TOUR GUIDES </h4>

                    <div className="guide-container">
                        <div className='lead-guide-container'>
                            <img src={Img} alt="" className='tour-img' />
                            <p> <b> Steven Miller </b> </p>
                        </div>
                        <div className='lead-guide-container'>
                            <img src={Img2} alt="" className='tour-img' />
                            <p> <b>Steven Miller </b> </p>
                        </div>
                    </div>

                </Col>

                <Col md={6}>
                    <h4 className='text-uppercase my-5'> ABOUT THE {filterTour[0]?.name} </h4>
                    <p className='description'>
                        {filterTour[0]?.description}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default tourContent