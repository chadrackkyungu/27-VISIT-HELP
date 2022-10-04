import React from 'react'

function UserDetails(props) {
    console.log(props.details)
    return (
        <div>
            <p>{props.details.firstName}</p>
            <p>{props.details.lastName}</p>
            <p>{props.details.IdNumber}</p>
            <p>{props.details.email}</p>
            <p>{props.details.gender}</p>
            <p>{props.details.houseNumber}</p>
            <p>{props.details.alternativeNumber}</p>
            <p>{props.details.dateOfBirth}</p>
            <p>{props.details.city}</p>
            <p>{props.details.password}</p>
            <p>{props.details.phoneNumber}</p>
            <p>{props.details.stateProvince}</p>
            <p>{props.details.zipCode}</p>
        </div>
    )
}

export default UserDetails