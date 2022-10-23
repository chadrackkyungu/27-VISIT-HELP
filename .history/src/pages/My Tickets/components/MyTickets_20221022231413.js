import React, { useState, useEffect } from 'react'
import { Container, Row, Card, CardBody, Modal, Spinner, Badge } from "reactstrap";
import { MDBDataTable } from "mdbreact"
import useFetch from "../../../hooks/useFecth";
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import { Link } from 'react-router-dom';

function TicketsTable() {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/bookings`, token);

    const tours = data?.map(tour => {
        return tour.tour
    })

    const status_arr = [];
    const user_new_arr = [];

    data?.filter(tour => {
        status_arr.push({ paid: tour.paid })
    })
    data?.filter(tour => {
        user_new_arr.push(tour.user)
    })

    function viewFunc(id) {
        // setViewmodal(true)
        // setViewID(id)
    }

    function editFunc(id) {
        // setmodal_center(!modal_center)
        // setViewID(id)
    }

    function deleteFunc(id) {
        // setDeleteID(id)
        // setDeleteModal(true)
    }

    const result = tours.map((res) => {
        return ({
            ...res,
            status_arr,
            user_new_arr,
            // viewBtn: <Link className=" btn-success p-1" onClick={() => viewFunc(res._id)}> view </Link>,
            // deleteBtn: <button className=" btn-danger" onClick={() => deleteFunc(res._id)}> Delete </button>
        })
    })

    console.log(".......: ", result)

    const column = [
        { label: "User Name", field: "name", sort: "asc", width: 150 },
        { label: "Phone", field: "price", sort: "asc", width: 150 },
        { label: "Status", field: "status1", sort: "asc", width: 150 },
        { label: "Status", field: "status2", sort: "asc", width: 150 },
        { label: "view", field: "viewBtn", sort: "asc", width: 150 },
        { label: "view", field: "deleteBtn", sort: "asc", width: 150 },
    ];

    const dataRes = {
        columns: column,
        rows: result,
    }

    return (
        <div>
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
                                <th className="align-middle">Full Name</th>
                                <th className="align-middle">Email</th>
                                <th className="align-middle">Phone Number</th>

                                <th className="align-middle">Tour Name</th>
                                <th className="align-middle">Price</th>

                                <th className="align-middle">Status</th>
                                <th className="align-middle">Delete</th>
                            </tr>
                        </thead>

                        {
                            result?.map((book, i) => {
                                console.log(book)
                                return (
                                    <tbody key={i}>
                                        <tr key={"_tr_" + "key"} >
                                            <td>
                                                <div className="form-check font-size-16">
                                                    <input type="checkbox" className="form-check-input" id={"id"} />
                                                    <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                </div>
                                            </td>
                                            {
                                                book?.user_new_arr?.map(user => (
                                                    <>
                                                        <td>{user?.firstName} {user?.lastName}</td>
                                                        <td>{user?.email}</td>
                                                        <td>{user?.phoneNumber}</td>
                                                    </>
                                                ))
                                            }
                                            {/* <td>{leads}</td>
                                            <td>{leads} {leads}</td>
                                            <td>{leads}</td>
                                            <td>{leads}</td> */}
                                            {/* <td><Badge className='bg-success cursor-pointer p-2'
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
                                                </td> */}

                                            <td>
                                                <Badge className="bg-danger cursor-pointer p-2"
                                                    onClick={() => {
                                                        // setSmExample(true)
                                                        // setLeadGuide(leads?._id)
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

            {/* <Modal show={smExample} onHide={() => setSmExample(false)} size="md">
                <Modal.Header closeButton>
                    <h4 className="text-danger"> Are you sure you want delete this ? </h4>
                </Modal.Header>

                <Modal.Footer className="d-flex justify-content-around">
                    <Button variant="secondary" onClick={() => setSmExample(false)}> No </Button>
                    <Button variant="danger" onClick={deleteFunc}>Yes</Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}

export default TicketsTable