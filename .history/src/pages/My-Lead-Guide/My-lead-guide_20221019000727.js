import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, Modal, Button } from 'react-bootstrap';
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"
import Form from './components/Form';
import EditLeadGuideForm from './components/EditLeadGuideForm';
import LeadGuideDetails from './components/LeadGuideDetails';
import Layout from "../Layout";
import useFetch from "../../hooks/useFecth";
import Loading from '../../components/Loading';
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";


const Employees = () => {

    const user = useStore1Selector(userDetails);
    const { data, length, error, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, null);
    const [lExample, setLExample] = useState(false);
    const [smExample, setSmExample] = useState(false);
    const [rightModalScrollExample, setRightModalScrollExample] = useState(false);
    const [AddLeadGuide, setAddLeadGuide] = useState(false);

    const deleteFunc = () => {
        console.log("delete")
    }



    if (!data) { return <Loading /> }

    return (
        <Layout>
            <Container fluid>
                <Link className='btn text-white' onClick={() => setAddLeadGuide(true)}> + add a new lead guide </Link>
                <Card className="mt-3">
                    <div className="table-responsive p-4">
                        <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: "20px" }}>
                                        <div className="form-check font-size-16 align-middle">
                                            <input type="checkbox" className="form-check-input" id="customCheck1" />
                                            <label className="form-check-label" htmlFor="customCheck1"> &nbsp;</label>
                                        </div>
                                    </th>
                                    <th className="align-middle">Empl No</th>
                                    <th className="align-middle">Full Name</th>
                                    <th className="align-middle">Email</th>
                                    <th className="align-middle">Role</th>
                                    <th className="align-middle">View</th>
                                    <th className="align-middle">Edit</th>
                                    <th className="align-middle">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={"_tr_" + "key"} >
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input type="checkbox" className="form-check-input" id={"id"} />
                                            <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                        </div>
                                    </td>
                                    <td>{"656565"}</td>
                                    <td>{"john"} {"muleka"}</td>
                                    <td>{"email"}</td>
                                    <td>{'Lead-guide'}</td>
                                    <td><Badge className='bg-success cursor-pointer p-2'
                                        onClick={() => {
                                            setLExample(true)
                                            setViewEmployee()
                                        }}> View  </Badge>
                                    </td>

                                    <td className="cursor-pointer"
                                        onClick={() => {
                                            setRightModalScrollExample(true)
                                            setViewEmployee();
                                        }}> <Badge className='p-2'> Edit </Badge>
                                    </td>

                                    <td>
                                        <Badge className="bg-danger cursor-pointer p-2"
                                            onClick={() => {
                                                setSmExample(true)
                                                setViewEmployee()
                                            }}> Delete </Badge>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </Card>

            </Container>

            <Modal show={AddLeadGuide} onHide={() => setAddLeadGuide(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> Add a lead Guide </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form closeModal={setAddLeadGuide} />
                </Modal.Body>

                <Modal.Footer>
                    <Button className='btn-danger' onClick={() => setAddLeadGuide(false)}> Close </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={lExample} onHide={() => setLExample(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> Employee Details </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <LeadGuideDetails />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={() => setLExample(false)}> Close </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                className="modal-right scroll-out-negative large" show={rightModalScrollExample} onHide={() => setRightModalScrollExample(false)}
                scrollable dialogClassName="full">

                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditLeadGuideForm />
                </Modal.Body>
            </Modal>

            <Modal show={smExample} onHide={() => setSmExample(false)} size="md">
                <Modal.Header closeButton>
                    <h4 className="text-danger"> Are you sure you want delete this ? </h4>
                </Modal.Header>

                <Modal.Footer className="d-flex justify-content-around">
                    <Button variant="secondary" onClick={() => setSmExample(false)}> No </Button>
                    <Button variant="danger" onClick={deleteFunc}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    );
};

export default Employees;




