import React from 'react'
import { useState, useEffect } from "react";

const News = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 const fetchData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85f19a10e8mshcb63bf46fa0fe3cp12263cjsn6f00dfa458d6',
            'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        }
    };
    
    fetch('https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800', options)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
      console.log(data)

    return(
        <div>
          {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {
          Object.entries(data).map(( data ) => (
            <li key={data.countries}>
              <h3 style={{color: "white"}}>{data.cname}</h3>
            </li>
          ))}
      </ul>
        </div>
    )
}

export default News