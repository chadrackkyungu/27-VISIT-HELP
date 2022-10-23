import React from 'react'
import { MdHourglassEmpty } from 'react-icons/md'

function Empty({ empty }) {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="justify-content-center align-item-center mt-5">
                    <p> <MdHourglassEmpty size={40} /> </p>
                    <h3> {empty} </h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Empty