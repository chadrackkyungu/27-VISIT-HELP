import React from 'react'
import "../Styles.scss";
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
// import tour1 from "../../assets/images/gallery/tour-1.svg"
import Layout from '../Layout';
import { userDetails } from '../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../index';
import useFetch from "../../hooks/useFecth";
import { BsArrowRight } from "react-icons/bs";
import Loading from '../../components/Loading';
import Empty from '../../components/Empty';

function Mybookings() {

    const userDet = useStore1Selector(userDetails);
    const userId = userDet?.data?.data?._id
    const token = userDet?.token
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/bookings`, token);

    if (!data) { return <Layout>  <Loading /> </Layout> }
    if (data.length <= 0) { return <Layout>  <Empty empty="You have no booking yet" /> </Layout> }

    const filterTour = data.filter(tour => {
        return tour?.user?._id === userId
    });

    const tours = filterTour?.map(tour => {
        return tour.tour
    })

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
                                                <img src={`${tourImg}${tour?.imageCover}`} alt="" />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h5 className='text-dark'>{tour.name}</h5>
                                                <h4 className='text-primary'>R {tour.price}</h4>
                                            </div>
                                            <p className='tour-description'> {tour.description} </p>

                                            <h5 className="d-flex justify-content-between align-items-center">
                                                <Link to={`/tour-details/${tour._id}`}  >View details <BsArrowRight /> </Link>
                                            </h5>
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