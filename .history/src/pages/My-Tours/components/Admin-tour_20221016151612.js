import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import { Modal, Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import tour1 from "../../../assets/images/gallery/tour-1.svg"
import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';

function AdminTour() {

    const [smExample, setSmExample] = useState(false);
    const [filteredTour, setFilteredTour] = useState();
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, null);

    if (!data) { return <Loading /> }

    const DeleteTour = (tourId) => {
        setFilteredTour(tourId)
        setSmExample(true)
    }
    const filterTourArr = data.filter(tour => {
        return (
            tour.id === filteredTour
        )
    })

    console.log(filterTourArr);

    return (
        <div>
            <Link to="/add-tour" className='btn text-white'> + Add a new tour </Link>
            <Row className='mt-5'>
                <h4 className='mb-4'> My Tours </h4>

                {
                    data?.map((tours, i) =>
                        <Col md={4} key={i}>
                            <Card className='tour-card'>
                                <CardBody>
                                    <div className='tour-img-container'>
                                        <img src={`${tourImg}${tours.imageCover}`} alt="" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className='mt-3 text-uppercase'> {tours.name} </h6>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <Badge className='p-2 text-white'>  <Link to={`/tour-details/${tours._id}`} className='text-white'>  view details </Link> </Badge>
                                        <Badge className='p-2 bg-warning'> <Link to={`/edit-tour/${tours._id}`} className='text-white'> Edit </Link> </Badge>
                                        <Badge className='p-2 bg-danger' onClick={() => DeleteTour(tours._id)}> Delete </Badge>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </Row>


            <Modal show={smExample} onHide={() => setSmExample(false)} size="md">
                <Modal.Header closeButton>
                    <h2 className="text-danger"> Are you sure you want delete this employee ? </h2>
                </Modal.Header>

                <Modal.Footer className="d-flex justify-content-around">
                    <Button variant="secondary" onClick={() => setSmExample(false)}> No </Button>
                    <Button variant="danger" onClick={deleteFunc}>Yes</Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default AdminTour