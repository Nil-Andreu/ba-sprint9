import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import StarshipsDetail from "./StarshipsSubDetail"
import FilmsDetail from "../FilmsSubDetail"

// For this detail actors we want to render its films and piltos details
function DetailActors({ i, setIdRendererActors }) {
  const [starshipDetailsShow, setStarshipDetailsShow] = useState(false);
  const [filmDetailsShow, setFilmDetailShow] = useState(false);


  let starshipState = false;
  let filmState = false
  // HANDLING PILOTS
  let starshipsURLs = i.starships; // array of all pilots urls
  let filmsURLs = i.films
  if (starshipsURLs.length == 0) {
  } else {
    starshipState = true;
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
        {filmState ? <ButtonHandlerFilms onClick={() => setFilmDetailShow(true)}>See the films</ButtonHandlerFilms> : <NoInfo>There are no films available</NoInfo>}
        {filmDetailsShow ? <FilmsDetail filmsURLs={filmsURLs} FilmsShow={setFilmDetailShow}/>: ""}
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
  height: 50vh;
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