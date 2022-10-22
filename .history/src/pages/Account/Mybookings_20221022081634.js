import React from 'react'
import "../Styles.scss";
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import tour1 from "../../assets/images/gallery/tour-1.svg"
import Layout from '../Layout';
import { userDetails } from '../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../index';
import useFetch from "../../hooks/useFecth";

function Mybookings() {

    const userDet = useStore1Selector(userDetails);
    const userId = userDet?.data?.data?._id
    const token = userDet?.token
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`http://localhost:4000/api/v1/bookings`, token);

    const filterTour = data.filter(tour => {
        return tour?.user?._id === userId
    });

    const tours = filterTour.map(tour => {
        return tour.tour
    })
    console.log(" Result : ", tours)

    return (
        <Layout>
            <CardBody>
                <Row className='mt-5 mx-5'>
                    {
                        tours.map((tour, i) => {
                            return (
                                <Col md={4} key={i}>
                                    <Card className='tour-card'>
                                        <CardBody>
                                            <div className='pb-4 image-cover'>
                                                <img src={`${tourImg}${tour.imageCover}`} alt="" />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h4>{tour.name}</h4>
                                                <button className='btn btn-warning'>R {tour.price}</button>
                                            </div>
                                            <p className='tour-description'> {tour.description} </p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link to={`/tour-details/${tour._id}`} className='btn btn-success'>View details</Link>
                                                <p className='mt-2'>Ratings({tour.ratingsQuantity})</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
            </CardBody>
        </Layout>
    )
}

export default Mybookings