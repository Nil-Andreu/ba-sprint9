import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function FilmsDetail({ filmsURLs, FilmsShow }) {
  // We obtain which is the length of the pilot values
  let lengthFilms = filmsURLs.length;
  let iterator = lengthFilms - 1;
  const [filmPosition, setFilmPosition] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // FETCH PILOTS
    const FetchUrl = async (id) => {
      let url = filmsURLs[id];
      console.log(url);
      // First we make the query to the url at the position of the id
      let result = await axios(url);
      console.log(result);
      setData(result.data);
    };

    FetchUrl(0);
  }, []);

  useEffect(() => {
    if (filmPosition <= iterator) {
      const FetchUrl = async (id) => {
        let url = filmsURLs[id];
        // First we make the query to the url at the position of the id
        let result = await axios(url);
        setData(result.data);
      };

      FetchUrl(filmPosition);
    } else {
      setFilmPosition(0);
    }
  }, [filmPosition]);

  return (
    <Container>
      <BoxPilots>
        <InformationContainer>
          <PilotName>{data.title}</PilotName>
          <PilotGender>{data.director}</PilotGender>
        </InformationContainer>
        <InformationSubContainer>
          <PO>Opening crawl is: {data.opening_crawl}</PO>
        </InformationSubContainer>
        <ButtonContainer>
          <NextButton onClick={() => setFilmPosition(filmPosition + 1)}>
            Next film
          </NextButton>
          <CloseButton onClick={() => FilmsShow(false)}>Close</CloseButton>
        </ButtonContainer>
      </BoxPilots>
      <ContainerCircles>{filmsURLs.map((i) => {})}</ContainerCircles>
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
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  justify-content: center;
  align-items: center;
  height: 50%;
  flex-wrap: wrap;
`;

const PO = styled.p`
  width: 40vw;
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

const NextButton = styled.button`
  background-color: transparent;
  font-family: "Roboto Mono", "Arial";
  width: 10vw;
  border: 1px solid black;
  margin-right: 30px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContainerCircles = styled.div`
  position: absolute;
  left: 30vw;
  z-index: 4;
  width: 30px;
  top: 40vh;
  bottom: 40vh;

  height: 20vh;
  background-color: black;
`;

const CloseButton = styled.button`
  width: 10vw;
  font-family: "Roboto Mono", "Arial";
  color: white;
  padding: 1vh 3vw;
  background-color: black;

  &:hover {
    transform: scale(1.05);
  }
`;

export default FilmsDetail;
