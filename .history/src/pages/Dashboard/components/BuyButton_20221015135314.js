import React from 'react'
import "../Style.scss";
import { Card, CardBody } from "reactstrap"
import useFetch from 'hooks/useFecth'
import Loading from '../../../components/Loading';

function BuyButton({ id }) {
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`);
    if (!data) { return <Loading /> }
    const filterTour = data.filter(tour => tour.id === id);
    console.log(filterTour);

    return (
        <Card className='container-btn'>
            <CardBody>
                <h3> WHAT ARE YOU WAITING FOR? </h3>
                <p className='mt-5'> {filterTour[0]?.duration} days. 1 adventure. Infinite memories. Make it yours today! </p>
                <button className='btn btn-warning w-25 p-2'> Book Now</button>
            </CardBody>
        </Card>
    )
}

export default BuyButton