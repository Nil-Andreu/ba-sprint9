import styled from 'styled-components'

export const Container = styled.div`
  height: calc(80vh - 1px);
  background-color: black;
  border-top: 1px white solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.form`
height: 30vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

export const InputContainer = styled.div`
width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 2rem 10rem;
  font-family: "Roboto Mono", "Arial";
`;