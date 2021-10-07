import React from "react";
import axios from 'axios'

function PilotsDetail(pilots) {
  // HANDLING PILOTS
  let pilotsArrayFetched = [];

  // Define the function for fecthing the pilot values
  let pilotFetch = async (pilotValue) => {
    axios("https://swapi.dev/api/people/13/")
      .then((res) => pilotsArrayFetched.push(res.data))
  };

  // We first check the length of the array, to see if there are any pilots
  if (pilots.length == 0) {
  } else {
    for (let i in pilots) {
      let pilot = pilots[i];
      console.log(pilot);

      // And now we obtain the value of this pilot
    }
  }
  return <div></div>;
}

export default PilotsDetail;
