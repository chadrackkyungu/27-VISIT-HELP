import React from 'react'
import { Row, Col } from "reactstrap"
import Img from "../../../assets/images/users/user-9.jpg"
import Img2 from "../../../assets/images/users/avatar-8.jpg"
import { useParams } from 'react-router-dom'
import useFetch from 'hooks/useFecth'

function tourContent() {

    const { id } = useParams();
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);

    if (!data) {
        return <Loading />
    }

    const filterTour = data.filter(tour => tour.id === id);
    console.log(filterTour);

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
                    <h4> ABOUT THE PARK CAMPER TOUR </h4>
                    <p className='description'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
                        page editors now use Lorem Ipsum as their default model text, and a search
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
                        page editors now use Lorem Ipsum as their default model text, and a search

                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default tourContent