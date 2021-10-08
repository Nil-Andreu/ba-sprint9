import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function PilotsDetail({ pilotsValues, PilotsShow }) {
  // We obtain which is the length of the pilot values
  console.log("This is the data in the detail", pilotsValues);

  let lengthPilots = pilotsValues.length;
  let iterator = lengthPilots - 1;
  const [pilotPosition, setPilotPosition] = useState(0);
  const [pilot, setPilot] = useState([]);
  const [pilotName, setPilotName] = useState("");
  const [pilotGender, setPilotGender] = useState("");
  const [pilotHeight, setPilotHeight] = useState("");
  const [pilotMass, setPilotMass] = useState("");
  const [pilotBirth, setPilotBirth] = useState("");
  const [pilotEyeColor, setPilotEyeColor] = useState("");
  const [pilotSkinColor, setPilotSkinColor] = useState("");

  useEffect(() => {
    // We incremented for exapmle pilotposition in 1. If we are in posiiton 2 and the length is of 2, we are out of array index. So we set to 0 again
    if (pilotPosition <= iterator) {
      setPilot(pilotsValues[pilotPosition]); // We handle the new pilot
    } else {
      setPilotPosition(0);
      setPilot(pilotsValues[pilotPosition]);
    }

    /*For the pilots, we have the following values:
    - Birth day
    - Eye color
    - Gender
    - Hair color
    - Height
    - Mass
    - Name
    - Skin color*/
    setPilotName(pilot.name);
    setPilotGender(pilot.gender);
    setPilotHeight(pilot.height);
    setPilotMass(pilot.mass);
    setPilotBirth(pilot.birth_year);
    setPilotEyeColor(pilot.eye_color);
    setPilotSkinColor(pilot.skin_color);

    // Every time we change the pilot we are looking for, will update the data
  }, [pilotPosition]);

  return (
    <Container>
      <BoxPilots>
        <InformationContainer>
          <PilotName>{pilotName}</PilotName>
          <PilotGender>{pilotGender.toUpperCase()}</PilotGender>
          <InformationSubContainer>

          </InformationSubContainer>
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
  justify-content: space-between;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InformationSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;



const NextButton = styled.button``;

const CloseButton = styled.button`
  padding: 1vh 3vw;
  background-color: black;
`;

export default PilotsDetail;
