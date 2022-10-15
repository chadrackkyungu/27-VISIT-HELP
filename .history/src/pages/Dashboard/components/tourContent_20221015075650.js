import React from 'react'
import { Row, Col } from "reactstrap"
import Img from "../../../assets/images/users/user-9.jpg"
import Img2 from "../../../assets/images/users/avatar-8.jpg"
import { useParams } from 'react-router-dom'
import useFetch from 'hooks/useFecth'
import Loading from 'components/Loading';

function tourContent() {

    const { id } = useParams();
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);

    if (!data) {
        return <Loading />
    }

    const filterTour = data.filter(tour => tour.id === id);

    return (
        <div>
            <h2 className='title'> {filterTour[0]?.name} </h2>

            <Row>
                <Col md={6}>
                    <h4> QUICK FACTS </h4>
                    <p> <b>NEXT DATE </b> : August 2021 </p>
                    <p> <b>DIFFICULTY </b> : {filterTour[0]?.difficulty} </p>
                    <p> <b>PARTICIPANTS </b> : {filterTour[0]?.maxGroupSize} </p>

                    <h4> YOUR TOUR GUIDES </h4>
                    <div className="guide-container">
                        <div className='img-container'>
                            <img src={Img} alt="" className='tour-img' />
                            <p> <b> Steven Miller </b> </p>
                        </div>
                        <div className='img-container'>
                            <img src={Img2} alt="" className='tour-img' />
                            <p> <b>Steven Miller </b> </p>
                        </div>
                    </div>
                </Col>

                <Col md={6}>
                    <h4 className='text-uppercase'> ABOUT THE {filterTour[0]?.name} </h4>
                    <p className='description'>
                        {filterTour[0]?.description}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default tourContent