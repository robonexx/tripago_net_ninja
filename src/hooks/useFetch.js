import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async() => {
            const res = await fetch(url)
            const json = await res.json()

            setData(json)
         }
         
        fetchData()

    }, [url]);

    return{ data, isLoading, error }
}

