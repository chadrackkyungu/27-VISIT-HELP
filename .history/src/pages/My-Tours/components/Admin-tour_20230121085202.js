import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody } from "reactstrap"
import { Modal } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import useFetch from "../../../hooks/useFecth";
import Loading from '../../../components/Loading';
import { userDetails } from '../../../Redux/Slices/userSlice'
import { useStore1Selector } from '../../../index';
import { successMessage, warningMessage } from "../../../components/Toast"
import { BsArrowRight } from "react-icons/bs";

function AdminTour() {

    const [smExample, setSmExample] = useState(false);
    const [tourID, setTourId] = useState();
    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token
    const tourImg = "https://tourism.up.railway.app/img/imageCover/";
    const { data, reFetch } = useFetch(`https://tourism.up.railway.app/api/v1/tours`, null);

    if (!data) { return <Loading /> }

    const DeleteTour = (Id) => {
        setTourId(Id)
        setSmExample(true)
    }

    const deleteFunc = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://tourism.up.railway.app/api/v1/tours/${tourID}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // if (result.status === 'success') {
                //     successMessage("Successfully deleted!");
                //     setSmExample(false)
                // }
                if (result.status === 'fail') {
                    warningMessage(result.message);
                    setSmExample(false)
                }
            })
            .catch(error => {
                successMessage(`Successful deleted !`);
                setSmExample(false)
                reFetch();
            });
    }

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
                                        <Link to={`/tour-details/${tours._id}`}>  View  <BsArrowRight />  </Link>
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
                    <h4 className="text-danger"> Are you sure you want delete ? </h4>
                </Modal.Header>

                <Modal.Footer className="d-flex justify-content-around">
                    <button className="btn text-white" onClick={() => setSmExample(false)}> No </button>
                    <button className="btn text-white" onClick={deleteFunc}>Yes</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AdminTour