import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, product) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])
  const [errorText, setErrorText] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        if (product === 'all') {
          console.log(111)
        }

        setData(response.data);
      } catch (error) {
        setErrorText(error.message);
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, [url, product]);

  return [isLoading, isError, data, errorText]
}

export default useFetch