import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function StarshipsDetail({ starshipsURLs, StarshipShow }) {
  // We obtain which is the length of the pilot values
  let lengthStarships = starshipsURLs.length;
  let iterator = lengthStarships - 1;
  const [starshipPosition, setStarshipPosition] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // FETCH STARSHIPS
    const FetchUrl = async (id) => {
      let url = starshipsURLs[id];
      // First we make the query to the url at the position of the id
      let result = await axios(url);
      console.log(result)
      setData(result.data);
    };

    FetchUrl(0);
  }, []);

  useEffect(() => {
    if (starshipPosition <= iterator) {
      const FetchUrl = async (id) => {
        let url = starshipsURLs[id];
        // First we make the query to the url at the position of the id
        let result = await axios(url);
        setData(result.data);
      };

      FetchUrl(starshipPosition);
    } else {
      setStarshipPosition(0);
    }
  }, [starshipPosition]);

  return (
    <Container>
      <BoxPilots>
        <InformationContainer>
          <PilotName>{data.name}</PilotName>
          <PilotGender>{data.model}</PilotGender>
        </InformationContainer>
        <InformationSubContainer>
          <P>The capacity is: {data.cargo_capacity}</P>
          <P>The length is: {data.length}</P>
          <P>The speed is: {data.max_atmosphering_speed} atmospheres</P>
          <P>The starship class is: {data.starship_class}</P>
          <P>Was manufactured by {data.manufacturer}</P>
        </InformationSubContainer>
        <ButtonContainer>
          <NextButton onClick={() => setStarshipPosition(starshipPosition + 1)}>
            Next pilot
          </NextButton>
          <CloseButton onClick={() => StarshipShow(false)}>Close</CloseButton>
        </ButtonContainer>
        <ContainerCircles>
          {starshipsURLs.map((i) => {
            if (starshipsURLs.indexOf(i, 0) == starshipPosition) {
              // If we are in the same position of the film being rendered
              return <CircleActivated />;
            } else {
              return <CircleDesactivated />;
            }
          })}
        </ContainerCircles>
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

const P = styled.p`
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5vw;
`;

const ContainerCircles = styled.div`
  position: absolute;
  left: 0;
  width: 30px;
  top: 15vh;
  left: 1.5vw;
  bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
`;

const CircleActivated = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: black;
`;

const CircleDesactivated = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: gray;
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

export default StarshipsDetail;

