import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import { Badge } from 'react-bootstrap';
import tour1 from "../../../assets/images/gallery/tour-1.svg"
import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';

function AdminTour() {

    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, null);

    if (!data) { return <Loading /> }

    console.log(data);

    return (
        <div>
            <Link to="/add-tour" className='btn text-white'> + Add a new tour </Link>
            <Row className='mt-5'>
                <h4 className='mb-4'> My Tours </h4>
                <Col md={4}>
                    <Card className='tour-card'>
                        <CardBody>
                            <div className='tour-img-container'>
                                <img src={tour1} alt="" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className='mt-3'>Park virunga</h6>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Badge className='p-2 text-white'>  <Link to="/tour-details/1" className='text-white'>  view details </Link> </Badge>
                                <Badge className='p-2 bg-warning'> Edit </Badge>
                                <Badge className='p-2 bg-danger'> Delete </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AdminTour