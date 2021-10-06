import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

const LoginPage = () => {
    let history = useHistory()

    const SubtmitHandler = (e) => {
        e.preventDefault()
        history.push("/starships/")
    }

  return (
    <Container>
      <LoginForm>
        <h1>Welcome to Star Wars App</h1>
        <form onSubmit={e => SubtmitHandler(e)}>
          <div>
            <label htmlFor="">Enter your email:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Enter your password:</label>
            <input type="text" />
          </div>
          <Button type="submit" >Enter to this app</Button>
        </form>
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

const Button = styled.button`
  background-color: black;
  text-decoration: none;
  color: white;
  max-width: 40%;
  padding: 2rem 8rem;
  font-family: "Roboto Mono", "Arial";
`;

export default LoginPage;
