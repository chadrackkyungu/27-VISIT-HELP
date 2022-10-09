import React from 'react';
import React, { useState, useEffect } from 'react'
import { Container, Row, Card, CardBody, Modal, Spinner } from "reactstrap";
import { Link } from "react-router-dom"


function MyTickets() {

    const column = [
        { label: "ID", field: "TenantID", sort: "asc", width: 150 },
        { label: "First Name", field: "Name", sort: "asc", width: 150 },
        { label: "Last Name", field: "Surname", sort: "asc", width: 150 },
        { label: "Email", field: "Email", sort: "asc", width: 150 },
        { label: "ID/Passport", field: "ID/PassportNumber", sort: "asc", width: 150 },
        { label: "Phone Number", field: "Phone_Number", sort: "asc", width: 150 },
        { label: "Gender", field: "Gender", sort: "asc", width: 150 },
        { label: "Edit", field: "editBtn", sort: "asc", width: 150 },
        { label: "Delete", field: "deleteBtn", sort: "asc", width: 150 },
    ];

    const data = {
        columns: column,
        rows: "",
    }

    return (
        <div>

            <CardBody>
                <div className="d-flex justify-content-between">
                    <Link to="/add-tenant" className="btn login-btn w-md waves-effect waves-light mb-4 report-primary" type="submit"> + Add Tenant </Link>
                </div>
                <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={data} />
            </CardBody>
        </div>
    )
}

export default MyTickets