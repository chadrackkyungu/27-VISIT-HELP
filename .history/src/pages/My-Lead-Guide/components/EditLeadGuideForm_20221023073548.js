import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { CardBody, Spinner } from "reactstrap"
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import { successMessage, warningMessage } from "../../../components/Toast"

function EditLeadGuideForm({ id, leadGuides, closeModal, reFetch }) {

    const [loadBtn, setloadBtn] = useState();
    const user = useStore1Selector(userDetails);
    const token = user.token

    const filterLeadGuideById = leadGuides.filter(lead => {
        return lead._id === id
    })

    console.log(filterLeadGuideById)

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("IdNumber", values.passport);
        formdata.append("phoneNumber", values.phoneNumber);
        formdata.append("city", values.city);
        formdata.append("role", values.role);
        formdata.append("streetAddress", values.address);
        formdata.append("email", values.email);

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
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

    return (
        <div>
            <CardBody>
                <AvForm className="mt-1" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email Address"
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            required
                            value={filterLeadGuideById[0]?.email}
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="passport"
                            label="ID / Passport"
                            className="form-control"
                            placeholder="Enter your id or passport"
                            type="text"
                            required
                            value={filterLeadGuideById[0]?.IdNumber}
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            type="number"
                            required
                            value={filterLeadGuideById[0]?.phoneNumber}
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="role"
                            label="Role"
                            type="select"
                            required
                            value={filterLeadGuideById[0]?.role}
                        >
                            <option> {filterLeadGuideById[0]?.role} </option>
                            <option> Admin </option>
                            <option> Lead Guide </option>
                        </AvField>
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="city"
                            label="City"
                            className="form-control"
                            type="text"
                            required
                            value={filterLeadGuideById[0]?.city}
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Address"
                            type="text"
                            required
                            value={filterLeadGuideById[0]?.streetAddress}
                        />
                    </div>


                    <button className="btn text-white mt-4" type="submit">
                        {!loadBtn ? <span className="me-2">Submit</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>


                </AvForm>
            </CardBody>
        </div>
    )
}

export default EditLeadGuideForm