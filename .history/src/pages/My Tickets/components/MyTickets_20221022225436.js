import React, { useState, useEffect } from 'react'
import { Container, Row, Card, CardBody, Modal, Spinner } from "reactstrap";
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
            bookingStatus: Object.assign({}, status_arr),
            users: Object.assign({}, user_new_arr),
            viewBtn: <Link className="btn btn-success" onClick={() => viewFunc(res._id)}> view </Link>,
            // editBtn: <button className="btn btn-primary" onClick={() => editFunc(res._id)}> Edit </button>,
            deleteBtn: <button className="btn btn-danger" onClick={() => deleteFunc(res._id)}> Delete </button>
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
            <Card>
                <CardBody>
                    <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={dataRes} />
                </CardBody>
            </Card>
        </div>
    )
}

export default TicketsTable