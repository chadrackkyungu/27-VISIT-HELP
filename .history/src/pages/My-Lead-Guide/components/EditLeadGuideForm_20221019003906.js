import React, { useState } from 'react'
import { AvField, AvForm } from "availity-reactstrap-validation"
import { CardBody } from "reactstrap"

function EditLeadGuideForm({ id, leadGuides }) {

    const filterLeadGuideById = leadGuides.filter(lead => {
        return lead._id === id
    })
    console.log(filterLeadGuideById)

    const [loadBtn, setloadBtn] = useState();

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true)
        console.log(values)
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
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            type="number"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="role"
                            label="Role"
                            type="select"
                            required
                        >
                            <option> Select... </option>
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
                        />
                    </div>

                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Address"
                            type="text"
                            required
                        />
                    </div>


                    <button className="btn text-white mt-4" type="submit" onClick={() => setSubmit(true)} >
                        {!loadBtn ? <span className="me-2">Submit</span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>


                </AvForm>
            </CardBody>
        </div>
    )
}

export default EditLeadGuideForm