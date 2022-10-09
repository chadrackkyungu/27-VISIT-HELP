import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Badge, Card, Modal, Button, Spinner } from 'react-bootstrap';
import MetaTags from 'react-meta-tags';
import { Container } from "reactstrap"


const Employees = () => {

    const [lExample, setLExample] = useState(false);
    const [smExample, setSmExample] = useState(false);
    const [rightModalScrollExample, setRightModalScrollExample] = useState(false);

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

                    <Link to="/#" className='btn text-white'> + add new lead guide </Link>
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
                                        {/* <th className="align-middle">Pic</th> */}
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

                                        {/* <td>
                                                        <div className="sw-6 me-1 mb-1 d-inline-block ">
                                                            <img src={`${urlUser}${empl.photo}`} alt="user"
                                                                className="img-fluid rounded-xl" />
                                                        </div>
                                                    </td> */}

                                        <td>{"john"} {"muleka"}</td>
                                        <td>{"email"}</td>
                                        <td>{'Lead-guide'}</td>
                                        <td><Badge className='bg-success cursor-pointer'
                                            onClick={() => {
                                                setLExample(true)
                                                setViewEmployee()
                                            }}>
                                            {/* <CsLineIcons icon="eye" size="14" />  */}
                                            View  </Badge></td>

                                        <td className="cursor-pointer"
                                            onClick={() => {
                                                setRightModalScrollExample(true)
                                                setViewEmployee();
                                            }}> <Badge>
                                                {/* <CsLineIcons icon="pen" size="12" />  */}
                                                Edit </Badge>
                                        </td>

                                        <td>
                                            <Badge className="bg-danger cursor-pointer"
                                                onClick={() => {
                                                    setSmExample(true)
                                                    setViewEmployee()
                                                }}
                                            >
                                                {/* <CsLineIcons icon="bin" size="14" />  */}
                                                Delete </Badge>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </Card>

                </Container>

                {/* Modal View Details */}

                <Modal show={lExample} onHide={() => setLExample(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title> Employee Details </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* <EmployeesDetails details={employeeDet} /> */}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setLExample(false)}> Close </Button>
                    </Modal.Footer>
                </Modal>



                {/* Modal Update details */}
                <Modal
                    className="modal-right scroll-out-negative large" show={rightModalScrollExample} onHide={() => setRightModalScrollExample(false)}
                    scrollable dialogClassName="full">

                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible"> */}
                        {/* <UpdateEmployeesDetails details={employeeDet} /> */}
                        {/* </OverlayScrollbarsComponent> */}
                    </Modal.Body>

                </Modal>


                {/* Delete  Modal  */}
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

export default Employees;




