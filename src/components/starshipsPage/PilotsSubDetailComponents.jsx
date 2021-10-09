import styled from "styled-components";

export const Container = styled.div`
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

export const BoxPilots = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const InformationContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PilotName = styled.h3`
  display: block;
  width: 100%;
`;

export const PilotGender = styled.h6`
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

export const InformationSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50%;
  flex-wrap: wrap;
`;

export const P = styled.p`
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5vw;
`;

export const ContainerCircles = styled.div`
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

export const CircleActivated = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: black;
`;

export const CircleDesactivated = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: gray;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const NextButton = styled.button`
  background-color: transparent;
  font-family: "Roboto Mono", "Arial";
  width: 10vw;
  border: 1px solid black;
  margin-right: 30px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CloseButton = styled.button`
  width: 10vw;
  font-family: "Roboto Mono", "Arial";
  color: white;
  padding: 1vh 3vw;
  background-color: black;

  &:hover {
    transform: scale(1.05);
  }
`;
