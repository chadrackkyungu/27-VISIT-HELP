import React from 'react'
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import useFetch from 'hooks/useFecth';

function TicketDetails(id) {
    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data } = useFetch(`https://tourism.up.railway.app/api/v1/bookings`, token);

    console.log(id)
    console.log(data)

    return (
        <div>

        </div>
    )
}

export default TicketDetails