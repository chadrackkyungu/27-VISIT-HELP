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
import Empty from 'components/Empty';


const Employees = () => {

    const user = useStore1Selector(userDetails);
    const token = user.token
    const { data, reFetch } = useFetch(`https://tourisms.herokuapp.com/api/v1/users`, token);
    const [lExample, setLExample] = useState(false);
    const [smExample, setSmExample] = useState(false);
    const [rightModalScrollExample, setRightModalScrollExample] = useState(false);
    const [AddLeadGuide, setAddLeadGuide] = useState(false);
    const [leadGuide, setLeadGuide] = useState();

    const deleteFunc = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("IdNumber", values.passport);
        formdata.append("phoneNumber", values.phoneNumber);
        formdata.append("city", values.city);
        formdata.append("role", values.role);
        formdata.append("streetAddress", values.address);
        formdata.append("email", values.email);

        const raw = "";
        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://tourisms.herokuapp.com/api/v1/users/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    successMessage('Successful updated')
                    setloadBtn(false)
                    closeModal(false)
                    reFetch();
                }
                if (result.status === "fail") {
                    warningMessage(`Sorry something went wrong please try again!!  ${error.message} `)
                    setloadBtn(false)
                    closeModal(false)
                }
            })
            .catch(error => {
                warningMessage(`Sorry something went wrong please try again ${error.message}`)
                setloadBtn(false)
                closeModal(false)
            });
    }

    if (!data) { return <Layout>  <Loading /> </Layout> }

    const filterLeadGuide = data?.filter(lead => {
        return lead.role === "lead-guide"
    })

    return (
        <Layout>
            <Container fluid>
                <Link className='btn text-white' onClick={() => setAddLeadGuide(true)}> + add a new lead guide </Link>

                {data.length <= 0 ? <Loading /> : (
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
                                        <th className="align-middle">Lead Guide No</th>
                                        <th className="align-middle">Full Name</th>
                                        <th className="align-middle">Email</th>
                                        <th className="align-middle">Role</th>
                                        <th className="align-middle">View</th>
                                        <th className="align-middle">Edit</th>
                                        <th className="align-middle">Delete</th>
                                    </tr>
                                </thead>

                                {
                                    filterLeadGuide?.map((leads, i) => {
                                        return (
                                            <tbody key={i}>
                                                <tr key={"_tr_" + "key"} >
                                                    <td>
                                                        <div className="form-check font-size-16">
                                                            <input type="checkbox" className="form-check-input" id={"id"} />
                                                            <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td>{leads?._id}</td>
                                                    <td>{leads?.firstName} {leads?.lastName}</td>
                                                    <td>{leads?.email}</td>
                                                    <td>{leads?.role}</td>
                                                    <td><Badge className='bg-success cursor-pointer p-2'
                                                        onClick={() => {
                                                            setLExample(true)
                                                            setLeadGuide(leads?._id)
                                                        }}> View  </Badge>
                                                    </td>

                                                    <td className="cursor-pointer"
                                                        onClick={() => {
                                                            setRightModalScrollExample(true)
                                                            setLeadGuide(leads?._id);
                                                        }}> <Badge className='p-2'> Edit </Badge>
                                                    </td>

                                                    <td>
                                                        <Badge className="bg-danger cursor-pointer p-2"
                                                            onClick={() => {
                                                                setSmExample(true)
                                                                setLeadGuide(leads?._id)
                                                            }}> Delete </Badge>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </Card>
                )}

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
                    <Modal.Title> Lead guide details </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <LeadGuideDetails id={leadGuide} leadGuides={filterLeadGuide} closeModal={setAddLeadGuide} />
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
                    <EditLeadGuideForm id={leadGuide} leadGuides={filterLeadGuide} closeModal={setRightModalScrollExample} />
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




