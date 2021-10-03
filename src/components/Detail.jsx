import axios from "axios";
import React, { useEffect, useState } from "react";

function Detail() {
    let url = "https://swapi.dev/api/starships/"
    const [data, setData] = useState([])

  // Now we obtain the name of the startship we clicked the name of
  useEffect(() => {
    let queryString = window.location.search;
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams)
    let id = urlParams.get("id");
    console.log(id)

    // And create the new url for the query
    let urlQuery = url + id +  "/"
    console.log(urlQuery)
    urlQuery = "https://swapi.dev/api/starships/9/"

    // Now let's make the query with fetch
    let QueryStarship = async(urlQuery) => {
      let query = await fetch(urlQuery, {
        method: "GET",
        Headers: "application/json"
      })
      .then(res => res.text()) // Transforming the data to json
      .then(res => console.log(res))
      .catch(error => console.log(error)) // And some error handling when we are not able to request the detail for the given starship
      
      setData(query)
    }
    // fetch(url).then((data) => console.log(data))

    

    QueryStarship()
  }, []);

  return <div></div>;
}

export default Detail;
