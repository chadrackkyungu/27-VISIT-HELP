import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, Modal, Button } from 'react-bootstrap';
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"

const AllTours = () => {

    const [lExample, setLExample] = useState(false);
    const [smExample, setSmExample] = useState(false);
    const [rightModalScrollExample, setRightModalScrollExample] = useState(false);
    const [AddLeadGuide, setAddLeadGuide] = useState(false);

    const deleteFunc = () => {
        console.log("delete")
    }

    return (
        <>
            <div className="page-content">
                <MetaTags>
                    <title>Visit-Help</title>
                </MetaTags>
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
                                        <th className="align-middle">Tour No</th>
                                        <th className="align-middle">Tour Name</th>
                                        <th className="align-middle">Number of participants</th>
                                        <th className="align-middle">Tour Type</th>
                                        <th className="align-middle">Lead Guide</th>
                                        <th className="align-middle">View</th>
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
                                        <td>{"Virunga"} {""}</td>
                                        <td>{"15"}</td>
                                        <td>{'Easy'}</td>
                                        <td>{'Chadrack'}</td>
                                        <td><Badge className='bg-success cursor-pointer p-2'
                                            onClick={() => {
                                                setLExample(true)
                                                setViewEmployee()
                                            }}> View  </Badge>
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

                <Modal show={lExample} onHide={() => setLExample(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title> Employee Details </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* <LeadGuideDetails /> */}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setLExample(false)}> Close </Button>
                    </Modal.Footer>
                </Modal>

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
        </>
    );
};

export default AllTours;




