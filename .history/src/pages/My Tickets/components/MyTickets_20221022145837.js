import React, { useState, useEffect } from 'react'
import { Container, Row, Card, CardBody, Modal, Spinner } from "reactstrap";
import { MDBDataTable } from "mdbreact"
import useFetch from "../../../hooks/useFecth";
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";

function TicketsTable() {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/tours`, token);

    console.log(data)

    const [tickets, setTickets] = useState([
        {
            "Tickets": "5689",
            "userName": "john",
            "phone": "0827000150",
            "email": "john@gmail.com",
            "tour": "Virunga",
            "status1": "Success",
            "status2": "New",
            "view": <button className="btn-primary"> view </button>,
            "deleteBtn": <button className="btn-danger"> Delete </button>,
        }
    ])
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
        rows: tickets,
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