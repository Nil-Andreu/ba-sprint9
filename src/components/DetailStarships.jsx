import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import PilotsDetail from "./PilotsDetail";
import FilmsDetail from "./FilmsDetail"

function DetailStarships({ i, setIdRenderer }) {
  const [pilotDetailsShow, setPilotDetailsShow] = useState(false);
  const [filmDetailsShow, setFilmDetailShow] = useState(false);


  let pilotState = false;
  let filmState = false
  // HANDLING PILOTS
  let pilotsURLs = i.pilots; // array of all pilots urls
  let filmsURLs = i.films
  if (pilotsURLs.length == 0) {
  } else {
    pilotState = true;
  }

  if (filmsURLs.length == 0) {

  } else {
    filmState = true
  }

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
        {filmState ? <ButtonHandlerFilms onClick={() => setFilmDetailShow(true)}>See the films</ButtonHandlerFilms> : <NoInfo>There are no films available</NoInfo>}
        {filmDetailsShow ? <FilmsDetail filmsURLs={filmsURLs} FilmsShow={setFilmDetailShow}/>: ""}
        {pilotState ? (
          <ButtonHandlerPilots onClick={() => setPilotDetailsShow(true)}>
            See the pilots!
          </ButtonHandlerPilots>
        ) : (
          <NoInfo>There are no pilots for this starship</NoInfo>
        )}
        {pilotDetailsShow ? (
          <PilotsDetail
            pilotsURLs={pilotsURLs}
            PilotsShow={setPilotDetailsShow}
          />
        ) : (
          ""
        )}
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
  margin-bottom: 3vh;
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

const NoInfo = styled.p`
  width: 50%;
  color: white;
  margin: auto;
  text-align: center;
  margin-bottom: 5vh;
`;

const ButtonHandlerFilms = styled.button`
  margin: auto;
  width: 10vw;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 3vh 1vw;
  margin-bottom: 2vh;

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonHandlerPilots = styled.button`
  margin: auto;
  width: 10vw;
  background-color: gray;
  color: black;
  padding: 3vh 1vw;
  margin-bottom: 2vh;

  &:hover {
    transform: scale(1.05);
  }
`;
