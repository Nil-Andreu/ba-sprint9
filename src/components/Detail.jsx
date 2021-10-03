import React, { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");

    // We create the function with axios
    const FetchUrl = async (urlQuery) => {
      let result = await axios.get(`https://swapi.dev/api/starships/${id}/?format=json`).then(
        res => res.data
      ).catch( // For catching the errors
        err => console.log(err)
      )
      console.log(result)
      setData(result)
      console.log(data)
    };
    FetchUrl();
  }, []);

  return <div></div>;
}

export default Detail;
