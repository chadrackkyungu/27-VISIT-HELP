import useFetch from 'hooks/useFecth';
import React from 'react'

function TicketDetails(id) {

    const { data } = useFetch(`https://tourism.up.railway.app/api/v1/bookings`, token);

    console.log(id)
    console.log(data)

    return (
        <div>

        </div>
    )
}

export default TicketDetails