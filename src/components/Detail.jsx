import React, { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  /*let url = "https://swapi.dev/api/starships/";
  const [data, setData] = useState([]);

  // Now we obtain the name of the startship we clicked the name of
  useEffect(() => {
    let queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    let id = urlParams.get("id");
    console.log(id);

    // And create the new url for the query
    let urlQuery = url + id + "/?format=json";
    console.log(urlQuery.toString());

    // Now let's make the query with fetch
    let QueryStarship = async (urlQuery) => {
      await fetch(urlQuery, {
        headers: {
          type: "application/json",
        },
      })
        .then((query) => console.log(query))
        .then((query) => setData(query));
    };
    // fetch(url).then((data) => console.log(data))

    QueryStarship();
  }, []);*/

  useEffect(() => {
    // We create the function with axios
    const FetchUrl = async () => {
      let result = await axios.get("https://swapi.dev/api/starships/2/?format=json")
      result = result.data
      console.log(result)
    };
    FetchUrl();
  }, []);

  return <div></div>;
}

export default Detail;
