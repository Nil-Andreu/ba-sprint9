import React, { useState, useEffect } from "react";
import axios from "axios";
// This will have the same components as pilots cards from starhsips page
import {CloseButton, NextButton, ButtonContainer, CircleActivated, CircleDesactivated, ContainerCircles, P, InformationSubContainer, PilotGender, PilotName, InformationContainer, BoxPilots, Container} from "../starshipsPage/PilotsSubDetailComponents"

function StarshipsDetail({ starshipsURLs, StarshipShow }) {
  // We obtain which is the length of the pilot values
  let lengthStarships = starshipsURLs.length;
  let iterator = lengthStarships - 1;
  const [starshipPosition, setStarshipPosition] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // FETCH STARSHIPS
    const FetchUrl = async (id) => {
      let url = starshipsURLs[id];
      // First we make the query to the url at the position of the id
      let result = await axios(url);
      console.log(result)
      setData(result.data);
    };

    FetchUrl(0);
  }, []);

  useEffect(() => {
    if (starshipPosition <= iterator) {
      const FetchUrl = async (id) => {
        let url = starshipsURLs[id];
        // First we make the query to the url at the position of the id
        let result = await axios(url);
        setData(result.data);
      };

      FetchUrl(starshipPosition);
    } else {
      setStarshipPosition(0);
    }
  }, [starshipPosition]);

  return (
    <Container>
      <BoxPilots>
        <InformationContainer>
          <PilotName>{data.name}</PilotName>
          <PilotGender>{data.model}</PilotGender>
        </InformationContainer>
        <InformationSubContainer>
          <P>The capacity is: {data.cargo_capacity}</P>
          <P>The length is: {data.length}</P>
          <P>The speed is: {data.max_atmosphering_speed} atmospheres</P>
          <P>The starship class is: {data.starship_class}</P>
          <P>Was manufactured by {data.manufacturer}</P>
        </InformationSubContainer>
        <ButtonContainer>
          <NextButton onClick={() => setStarshipPosition(starshipPosition + 1)}>
            Next pilot
          </NextButton>
          <CloseButton onClick={() => StarshipShow(false)}>Close</CloseButton>
        </ButtonContainer>
        <ContainerCircles>
          {starshipsURLs.map((i) => {
            if (starshipsURLs.indexOf(i, 0) == starshipPosition) {
              // If we are in the same position of the film being rendered
              return <CircleActivated />;
            } else {
              return <CircleDesactivated />;
            }
          })}
        </ContainerCircles>
      </BoxPilots>
    </Container>
  );
}


export default StarshipsDetail;

