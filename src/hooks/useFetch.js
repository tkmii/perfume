import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])
  const [errorText, setErrorText] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setErrorText(error.message);
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, [url]);



  return [isLoading, isError, data, errorText]
}

export default useFetch