import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer null")

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    console.log(result);
                    setData(result.data.data)
                }
            })
            .catch(error => console.log('error', error));
    }, [url]);


    const reFetch = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer null")

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    console.log(result);
                    setData(result.data.data)
                }
            })
            .catch(error => console.log('error', error));
    };

    return { data, loading, error, reFetch };

};

export default useFetch;
