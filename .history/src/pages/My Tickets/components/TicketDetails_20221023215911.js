import useFetch from 'hooks/useFecth';
import React from 'react'

function TicketDetails(id) {

    const { data } = useFetch(`https://tourisms.herokuapp.com/api/v1/bookings`, token);

    console.log(id)
    console.log(data)

    return (
        <div>

        </div>
    )
}

export default TicketDetails