import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  border-top: 1px solid white;
  height: auto;
  width: 100vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DetailInformation = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid red;
  color: white;
  flex-direction: column;
`;

export const ContainerInformation = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 30% 30%;
  grid-template-rows: 8vh;
  justify-items: flex-start;
  margin-left: 40%;
`;

export const NameInformation = styled.h1`
  color: white;
`;

export const ModelInformation = styled.h3`
  text-transform: uppercase;
  margin-bottom: 3vh;
`;

export const ButtonHandlerToNormal = styled.button`
  align-self: center;
  max-width: 40%;
  margin-bottom: 5vh;
  padding: 2rem 8rem;
  background-color: white;
  color: #000;
  font-family: "Roboto Mono", "Arial";
`;

export const NoInfo = styled.p`
  width: 50%;
  color: white;
  margin: auto;
  text-align: center;
  margin-bottom: 5vh;
`;

export const ButtonHandlerFilms = styled.button`
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

export const ButtonHandlerPilots = styled.button`
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
