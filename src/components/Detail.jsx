import axios from "axios";
import React, { useEffect } from "react";

function Detail() {
    let url = "https://swapi.dev/api/starships/"

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

    const QueryStarship = async (urlQuery) => {
        let query = await axios(urlQuery)
        console.log(query)
    }

    QueryStarship()
  }, []);

  return <div></div>;
}

export default Detail;
