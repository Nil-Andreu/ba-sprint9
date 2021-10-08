import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function PilotsDetail({ pilotsURLs, PilotsShow }) {
  console.log(pilotsURLs)
  // We obtain which is the length of the pilot values
  let lengthPilots = pilotsURLs.length;
  let iterator = lengthPilots - 1;
  const [pilotPosition, setPilotPosition] = useState(0);
  const [pilot, setPilot] = useState("");

  // Will develop 
  const FetchUrl = async (id) => {

  }

  useEffect(() => {

    // We will first make the query for the first position
  }, []);

  // For handling changes in the pilot position
  useEffect(() => {
    

    // Every time we change the pilot we are looking for, will update the data
  }, [pilotPosition]);

  return (
    <Container>
      <BoxPilots>
        <InformationContainer>
          
        </InformationContainer>
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
  height: 100%;
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
