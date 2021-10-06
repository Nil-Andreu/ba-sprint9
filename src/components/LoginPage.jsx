import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <LoginForm>
        <h1>Welcome to Star Wars App</h1>
        <Button to="starships/">Enter to this app</Button>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  height: calc(80vh - 1px);
  background-color: black;
  border-top: 1px white solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled(Link)`
  background-color: black;
  text-decoration: none;
  color: white;
  max-width: 40%;
  padding: 2rem 8rem;
  font-family: "Roboto Mono", "Arial";
`;

export default LoginPage;
