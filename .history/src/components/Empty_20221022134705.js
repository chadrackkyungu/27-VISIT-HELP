import React from 'react'

function Empty({ empty }) {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="d-flex justify-content-center align-item-center mt-5">
                    <h5> {empty} </h5>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Empty