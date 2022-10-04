import React from 'react'

function UserDetails(props) {
    console.log(props.details)
    return (
        <div>
            <p>{props.details}</p>
        </div>
    )
}

export default UserDetails