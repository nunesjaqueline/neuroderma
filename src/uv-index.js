import React, { useState, useEffect } from 'react';

export function UvIndex({ lng, lat }) {
    const [uvData, setUvData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-access-token", "openuv-rwselkrluyacs7p-io");
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const currentDate = new Date().toISOString();  // Format current date as ISO string

        fetch(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}&alt=100&dt=${currentDate}`, requestOptions)
            .then(response => response.json())  // Convert response to JSON
            .then(data => {
                setUvData(data);
            })
            .catch(error => {
                console.error('error', error);
                setError(error);
            });
    }, [lat, lng]);  // Dependency array to re-run effect when lat or lng changes
    return (<>
                {uvData && uvData.result? (
                    <p className={"text"}>UV Index: {uvData.result?.uv}</p>
                    ) : (
                    <p className={"text"}>Loading...</p>
                )}
                {error && <p>Error fetching data: {error.message}</p>}
    </>
    );
}
