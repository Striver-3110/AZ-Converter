import axios from 'axios';
import { useEffect, useState } from 'react'

function useAxios(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        const fetchData = async() =>{
            try {
                setLoaded(false)
                const response = await axios(url)
                setLoaded(true)
                setData(response.data)
            } catch (error) {
                // console.log("error is:"+error)
                setError(error)
            } finally {
            }
        }
        fetchData();
    },[])
  return [data, error, loaded]

}

export default useAxios