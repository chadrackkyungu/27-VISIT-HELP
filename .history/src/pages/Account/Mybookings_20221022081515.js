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
                                            <div className='w-100 pb-4'>
                                                <img src={`${tourImg}${tour.imageCover}`} alt="" />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h4>Park virunga</h4>
                                                <h4>R 250</h4>
                                            </div>
                                            <p className='tour-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error nostrum numquam, deserunt, doloribus accusamus quo incidunt iste animi magnam quidem eius. Aliquam, sint recusandae. Quidem ad rerum doloremque sapiente.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link to="/tour-details/1" className='btn btn-success'>View details</Link>
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