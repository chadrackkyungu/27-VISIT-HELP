import React from 'react'
import { BsBasket2 } from 'react-icons/bs'

function Empty({ empty }) {
    return (
        <div className="page-content">
            <div className="d-flex justify-content-center align-item-center mt-5">
                <div>
                    <p className='text-center text-success'> <BsBasket2 size={40} /> </p>
                    <h3 className='text-success'> {empty} </h3>
                </div>
            </div>
        </div>
    )
}

export default Empty