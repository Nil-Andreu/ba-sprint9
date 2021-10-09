import React, { useEffect, useState, Fragment } from "react";
import StarshipsDetail from "./StarshipsSubDetail";
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
} from "./DetailActorsComponents";

// For this detail actors we want to render its films and piltos details
function DetailActors({ i, setIdRendererActors }) {
  const [starshipDetailsShow, setStarshipDetailsShow] = useState(false);
  const [filmDetailsShow, setFilmDetailShow] = useState(false);

  let starshipState = false;
  let filmState = false;
  // HANDLING PILOTS
  let starshipsURLs = i.starships; // array of all pilots urls
  let filmsURLs = i.films;
  if (starshipsURLs.length == 0) {
  } else {
    starshipState = true;
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
          <ModelInformation>{i.birth_year}</ModelInformation>
          <ContainerInformation>
            <div>The eye color is {i.eye_color}</div>
            <div>The gender is {i.gender}</div>
          </ContainerInformation>
          <ContainerInformation>
            <div>Hair color is {i.hair_color}</div>
            <div>Has a height of {i.height}</div>
          </ContainerInformation>
          <ContainerInformation>
            <div>Has a mass of {i.mass}</div>
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
        {starshipState ? (
          <ButtonHandlerPilots onClick={() => setStarshipDetailsShow(true)}>
            See the starships!
          </ButtonHandlerPilots>
        ) : (
          <NoInfo>There are no starships for this actor</NoInfo>
        )}
        {starshipDetailsShow ? (
          <StarshipsDetail
            starshipsURLs={starshipsURLs}
            StarshipShow={setStarshipDetailsShow}
          />
        ) : (
          ""
        )}
        <ButtonHandlerToNormal onClick={() => setIdRendererActors(false)}>
          Return to normal
        </ButtonHandlerToNormal>
      </Container>
    </Fragment>
  );
}

export default DetailActors;
