import React from 'react'
import "../Style.scss";
import { Row, Col } from "reactstrap"
import Img from "../../../assets/images/users/user-9.jpg"
import Img2 from "../../../assets/images/users/avatar-8.jpg"
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';

function tourContent({ id }) {

    let leadGuide;
    const userImg = "https://tourism.up.railway.app/img/users/";
    const { data } = useFetch(`https://tourism.up.railway.app/api/v1/tours`, null);
    {
        const { data } = useFetch(`https://tourism.up.railway.app/api/v1/users/lead-guide`, null);
        leadGuide = data
    }

    if (!data) {
        return <Loading />
    }

    const filterTour = data.filter(tour => tour.id === id);
    const tourDate = filterTour[0]?.startDates[0]?.split("T")

    if (!tourDate) {
        return <Loading />
    }

    const filterLead = leadGuide?.filter(lead => {
        return lead?.tours?._id === id
    })

    return (
        <div>
            <h2 className='title'> {filterTour[0]?.name} </h2>

            <Row>
                <Col md={6}>
                    <h4 className='my-5'> QUICK FACTS </h4>
                    <p> <b>NEXT DATE </b> : {tourDate[0]} </p>
                    <p> <b>DIFFICULTY </b> : {filterTour[0]?.difficulty} </p>
                    <p> <b>PARTICIPANTS </b> : {filterTour[0]?.maxGroupSize} </p>

                    <h4 className='my-5'> LEAD GUIDES </h4>

                    <div className="guide-container">
                        {
                            filterLead?.map(lead => {
                                return (
                                    <div className='lead-guide-container d-flex align-items-center mb-4'>
                                        <img src={`${userImg}${lead?.photo}`} alt="" className='tour-img me-3' />
                                        <p className='mt-3'> <b> {lead?.firstName} {lead?.lastName}</b> </p>
                                    </div>
                                )
                            }
                            )
                        }
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