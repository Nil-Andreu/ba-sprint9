import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  BoxPilots,
  InformationContainer,
  InformationSubContainer,
  PilotName,
  PilotGender,
  P,
  ContainerCircles,
  CircleDesactivated,
  CircleActivated,
  NextButton,
  CloseButton,
} from "./PilotsSubDetailComponents";

function PilotsDetail({ pilotsURLs, PilotsShow }) {
  // We obtain which is the length of the pilot values
  let lengthPilots = pilotsURLs.length;
  let iterator = lengthPilots - 1;
  const [pilotPosition, setPilotPosition] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // FETCH PILOTS
    const FetchUrl = async (id) => {
      let url = pilotsURLs[id];
      console.log(url);
      // First we make the query to the url at the position of the id
      let result = await axios(url);
      setData(result.data);
    };

    FetchUrl(0);
  }, []);

  useEffect(() => {
    if (pilotPosition <= iterator) {
      const FetchUrl = async (id) => {
        let url = pilotsURLs[id];
        // First we make the query to the url at the position of the id
        let result = await axios(url);
        setData(result.data);
      };

      FetchUrl(pilotPosition);
    } else {
      setPilotPosition(0);
    }
  }, [pilotPosition]);

  return (
    <Container>
      <BoxPilots>
        <InformationContainer>
          <PilotName>{data.name}</PilotName>
          <PilotGender>{data.gender}</PilotGender>
        </InformationContainer>
        <InformationSubContainer>
          <P>The weight is: {data.mass}</P>
          <P>The birth date is: {data.birth_year}</P>
          <P>The hair color is: {data.hair_color}</P>
          <P>The eye_color is: {data.eye_color}</P>
          <P>The skin color is: {data.skin_color}</P>
        </InformationSubContainer>
        <ButtonContainer>
          <NextButton onClick={() => setPilotPosition(pilotPosition + 1)}>
            Next pilot
          </NextButton>
          <CloseButton onClick={() => PilotsShow(false)}>Close</CloseButton>
        </ButtonContainer>
        <ContainerCircles>
          {pilotsURLs.map((i) => {
            if (pilotsURLs.indexOf(i, 0) == pilotPosition) {
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

export default PilotsDetail;
