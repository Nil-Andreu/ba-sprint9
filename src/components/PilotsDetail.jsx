import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function PilotsDetail({pilotsValues, PilotsShow}) {
  // We obtain which is the length of the pilot values
  console.log("This is the data in the detail", pilotsValues);

  let lengthPilots = pilotsValues.length;
  const [pilotPosition, setPilotPosition] = useState(0);

  useEffect(() => {
    // Every time we change the pilot we are looking for, will update the data
  }, [pilotPosition]);

  return (
    <Container>
      <BoxPilots>
          <CloseButton onClick={() => PilotsShow(false)} />
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

`;

const CloseButton = styled.button`
    padding: 1vh 3vw;
    background-color: black;
`;

export default PilotsDetail;
