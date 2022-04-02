import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // fetch data, then update state
  useEffect(() => {
    const abortController = new AbortController();
    
    fetch(url, {
      signal: abortController.signal
    }).then(res => {
      if(!res.ok){
        throw Error('Could not fetch the data')
      }
      return res.json();
    }).then(data => {
      setData(data);
      setIsPending(false);
      setError(null);
    }).catch(err => {
      if(err.name !== 'AbortError') {
        setIsPending(false);
        setError(err.message);
      }
    });
    // abort fetch if page switch before data recieved
    return () => abortController.abort();
  }, [url]);
  return {data, isPending, error}
}
 
export default useFetch;