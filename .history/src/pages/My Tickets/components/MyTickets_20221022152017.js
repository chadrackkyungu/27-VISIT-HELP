import React, { useState, useEffect } from 'react'
import { Container, Row, Card, CardBody, Modal, Spinner } from "reactstrap";
import { MDBDataTable } from "mdbreact"
import useFetch from "../../../hooks/useFecth";
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";

function TicketsTable() {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const userId = user?.data?.data?._id
    const tourImg = "https://tourisms.herokuapp.com/img/imageCover/";
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, token);

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

    const list = [];
    const [newArr, setNewArr] = useState([])
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        data.forEach((res) => {
            list.push({
                ...res,
                viewBtn: <button className="btn btn-success" onClick={() => viewFunc(res.TenantID)}> view </button>,
                editBtn: <button className="btn btn-primary" onClick={() => editFunc(res.TenantID)}> Edit </button>,
                deleteBtn: <button className="btn btn-danger" onClick={() => deleteFunc(res.TenantID)}> Delete </button>
            })
            setNewArr(list.sort().reverse())
        })
    }, [])

    console.log("resl : ", newArr)

    const column = [
        { label: "ID", field: "Tickets", sort: "asc", width: 150 },
        { label: "User Name", field: "userName", sort: "asc", width: 150 },
        { label: "Phone", field: "phone", sort: "asc", width: 150 },
        { label: "Email", field: "email", sort: "asc", width: 150 },
        { label: "My Tour", field: "tour", sort: "asc", width: 150 },
        { label: "Status", field: "status1", sort: "asc", width: 150 },
        { label: "Status", field: "status2", sort: "asc", width: 150 },
        { label: "view", field: "view", sort: "asc", width: 150 },
        { label: "Delete", field: "deleteBtn", sort: "asc", width: 150 },
    ];

    const dataRes = {
        columns: column,
        rows: newArr,
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