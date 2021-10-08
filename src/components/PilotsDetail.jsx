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
          <P>The weight is: {data.mass}</P>
          <P>The birth date is: {data.birth_year}</P>
          <P>The weight is: {data.mass}</P>
          <P>The birth date is: {data.birth_year}</P>
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
  justify-content: space-between;
  align-items: center;
  height: 40%;
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

const NextButton = styled.button``;

const CloseButton = styled.button`
  padding: 1vh 3vw;
  background-color: black;
`;

export default PilotsDetail;
