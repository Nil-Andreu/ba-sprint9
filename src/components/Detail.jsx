import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Detail({ i, setIdRenderer }) {
  return (
    <Fragment>
      <Container>
        <DetailInformation>
          <NameInformation>{i.name}</NameInformation>
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
        <ButtonHandler onClick={() => setIdRenderer(false)}>
          Return to normal
        </ButtonHandler>
      </Container>
    </Fragment>
  );
}

export default Detail;

const Container = styled.div`
  margin: auto;
  border-top: 1px solid white;
  height: 80vh;
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
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30%;
  grid-template-rows: 8vh;
  justify-items: flex-start;
  margin-left: 40%;

`;

const NameInformation = styled.h1`
  color: white;
`;

const ErrorHandler = styled.div`
  color: white;
`;

const ButtonHandler = styled.button`
align-self: center;
max-width: 40%;
  margin-bottom: 5vh;
  padding: 2rem 8rem;
  background-color: white;
  color: #000;
  font-family: "Roboto Mono", "Arial";
`;

