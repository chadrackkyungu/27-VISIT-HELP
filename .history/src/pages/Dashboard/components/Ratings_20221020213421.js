import React, { useState } from 'react';
import { CardBody, Spinner } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import RatingTooltip from "react-rating-tooltip"
import { successMessage, warningMessage } from "../../../components/Toast"
import { userDetails } from "../../../Redux/Slices/userSlice";
import { useStore1Selector } from "../../../index";

function Ratings({ tourId }) {
    const [loadBtn, setloadBtn] = useState();
    const [customize, setcustomize] = useState("")
    const starStyle = {}
    const user = useStore1Selector(userDetails);
    console.log(user)

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setloadBtn(true);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${5}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "rating": customize,
            "review": values.comments
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://tourisms.herokuapp.com/api/v1/tours/${tourId}/reviews`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data);
                if (result.status === 'success') {
                    successMessage("We are appreciate for your comments");
                    setloadBtn(false);
                }
                if (result.status === 'fail') {
                    warningMessage("Try again something went wrong");
                    setloadBtn(false);
                }
            })
            .catch(error => {
                warningMessage(`Something went wrong try again ${error.message}`);
                setloadBtn(false);
            });
    }

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