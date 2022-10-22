import React from 'react'
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
    const { data } = useFetch(`http://localhost:4000/api/v1/bookings`, token);

    // const filterTour = data.filter(tour => tour?._id === userId);
    const filterTour = data.filter(tour => {
        console.log(tour)
        return tour?.user?._id === userId
    });
    console.log(filterTour)

    return (
        <Layout>
            <CardBody>
                <Row className='mt-5 mx-5'>
                    <Col md={4}>
                        <Card className='tour-card'>
                            <CardBody>
                                <div className='w-100 pb-4'>
                                    <img src={tour1} alt="" className='w-100' />
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

                </Row>
            </CardBody>
        </Layout>
    )
}

export default Mybookings