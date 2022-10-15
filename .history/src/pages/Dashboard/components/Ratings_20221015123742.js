import React, { useState } from 'react';
import { CardBody, Spinner } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import RatingTooltip from "react-rating-tooltip"

function Ratings(props) {
    const [loadBtn, setloadBtn] = useState();
    const [customize, setcustomize] = useState("")
    const starStyle = {}

    console.log(customize)

    return (
        <CardBody>
            <div className="p-4 text-center">
                <h4 className='text-danger'>Rate us</h4>
                <RatingTooltip max={5} onChange={rate => { setcustomize(rate) }}
                    ActiveComponent={<i key={"active_4"} className="mdi mdi-heart text-danger" style={starStyle} />}
                    InActiveComponent={<i key={"active_04"} className="mdi mdi-heart-outline text-danger" style={starStyle} />}
                />
            </div>

            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                <div className="mb-3">
                    <AvField name="comments" label="Comments" className="form-control" placeholder="Comments"
                        type="textarea" rows={8}
                        required
                    />
                </div>
                <div className="text-end">
                    <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
                        {!loadBtn ? <span className="me-2">Post </span> : null}
                        {!loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>}
                    </button>
                </div>
            </AvForm>
        </CardBody>
    )
}

export default Ratings