import React from 'react'

function Empty({ empty }) {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="d-flex justify-content-center align-item-center mt-5">
                    <h3> {empty} </h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Empty