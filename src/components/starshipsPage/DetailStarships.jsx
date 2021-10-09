import React, { useEffect, useState, Fragment } from "react";
import PilotsDetail from "./PilotsSubDetail";
import FilmsDetail from "../FilmsSubDetail";
import {
  Container,
  DetailInformation,
  ContainerInformation,
  NameInformation,
  ModelInformation,
  ButtonHandlerToNormal,
  NoInfo,
  ButtonHandlerFilms,
  ButtonHandlerPilots,
} from "./DetailStarshipsComponents";

function DetailStarships({ i, setIdRenderer }) {
  const [pilotDetailsShow, setPilotDetailsShow] = useState(false);
  const [filmDetailsShow, setFilmDetailShow] = useState(false);

  let pilotState = false;
  let filmState = false;
  // HANDLING PILOTS
  let pilotsURLs = i.pilots; // array of all pilots urls
  let filmsURLs = i.films;
  if (pilotsURLs.length == 0) {
  } else {
    pilotState = true;
  }

  if (filmsURLs.length == 0) {
  } else {
    filmState = true;
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
        {filmState ? (
          <ButtonHandlerFilms onClick={() => setFilmDetailShow(true)}>
            See the films
          </ButtonHandlerFilms>
        ) : (
          <NoInfo>There are no films available</NoInfo>
        )}
        {filmDetailsShow ? (
          <FilmsDetail filmsURLs={filmsURLs} FilmsShow={setFilmDetailShow} />
        ) : (
          ""
        )}
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

export default DetailStarships;
