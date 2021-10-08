import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
      setPilotPosition(0)
    }
  }, [pilotPosition])

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
      </BoxPilots>
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxPilots = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InformationContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PilotName = styled.h3`
  display: block;
  width: 100%;
`;

const PilotGender = styled.h6`
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

const InformationSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50%;
  flex-wrap: wrap;
`;

const P = styled.p`
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const NextButton = styled.button`
  background-color: transparent;
  font-family: "Roboto Mono", "Arial";
  width: 10vw;
  border: 1px solid black;
  margin-right: 30px;

  &:hover {
    transform: scale(1.05);
  }
`;

const CloseButton = styled.button`
  width: 10vw;
  font-family: "Roboto Mono", "Arial";
  color: white;
  padding: 1vh 3vw;
  background-color: black;

  &:hover {
    transform: scale(1.05);
  }
`;

export default PilotsDetail;
