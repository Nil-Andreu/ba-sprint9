import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import PilotsDetail from "./PilotsDetail"

function Detail({ i, setIdRenderer }) {
  const [pilotsState, setPilotsState] = useState(false)
  

  // Now we can define a modal, for which we pass the data in the form of pilotArrayFetched[0]. And then when clicked a button, is a usestate that 
  // increments the value to 1, so the modal is re-rendered with the new pilot data in the position [1]. Have to handle the max number by the length
  // Here put a conditional rendering to a button to render a new component. In this component is where i fetch the data, and has a usestate to handle this 
  // array. In the modal there is also a map of circles that are bold or not depending on the position of which pilot is rendered
  return (
    <Fragment>
      <Container>
        <DetailInformation>
          <NameInformation>{i.name}</NameInformation>
          <ModelInformation>{i.model}</ModelInformation>
          <ContainerInformation>
            <div>The MLGT of the starship is {i.MGLT}</div>
            <div>Cargo Capacity of the starship is {i.cargo_capacity}</div>
          </ContainerInformation>
          <ContainerInformation>
            <div>The cost of credits was {i.cost_in_credits}</div>
            <div>The amount it wastes in consumables is {i.consumables}</div>
          </ContainerInformation>
          <ContainerInformation>
            <div>The length of the starship is {i.length}</div>
            <div>The name of the manufacturer is {i.manufacturer}</div>
          </ContainerInformation>
          <ContainerInformation>
            <div>
              The maximum atmospheric speed is {i.max_atmosphering_speed}
            </div>
            <div>The maximum passengers are {i.passengers}</div>
          </ContainerInformation>
        </DetailInformation>
        <ButtonHandlerPilots onClick={() => setPilotsState(true)}>
          Get the pilots
        </ButtonHandlerPilots>
        {pilotsState ? <PilotsDetail pilots={i.pilots}/> : ""}
        <ButtonHandlerToNormal onClick={() => setIdRenderer(false)}>
          Return to normal
        </ButtonHandlerToNormal>
      </Container>
    </Fragment>
  );
}

export default Detail;

const Container = styled.div`
  margin: auto;
  border-top: 1px solid white;
  height: auto;
  width: 100vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DetailInformation = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid red;
  color: white;
  flex-direction: column;
`;

const ContainerInformation = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 30% 30%;
  grid-template-rows: 8vh;
  justify-items: flex-start;
  margin-left: 40%;

`;

const NameInformation = styled.h1`
  color: white;
`;

const ModelInformation = styled.h3`
  text-transform: uppercase;
  margin-bottom: 8vh;
`;

const ButtonHandlerToNormal = styled.button`
align-self: center;
max-width: 40%;
  margin-bottom: 5vh;
  padding: 2rem 8rem;
  background-color: white;
  color: #000;
  font-family: "Roboto Mono", "Arial";
`;

const ButtonHandlerPilots = styled.button``;

