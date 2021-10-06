import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";

// We obtain those values before the component is rendered, to be able to redirect directly
let isEmail = window.localStorage.getItem("email");
let isPassword = window.localStorage.getItem("password");
let isAuth = false;
if (isEmail == null || isPassword == null) {
} else {
  isAuth = true;
}

const LoginPage = () => {
  let history = useHistory();
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const SubtmitHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    history.push("/starships/"); // Will redirect to the url we want to use
  };

  let AuthHandler = () => {
    if (!isAuth) {
      return (
        <Container>
          <LoginForm>
            <h1>Welcome to Star Wars App</h1>
            <Form onSubmit={(e) => SubtmitHandler(e)}>
              <div>
                <label htmlFor="">Enter your email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="">Enter your password:</label>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit">Enter to this app</Button>
            </Form>
          </LoginForm>
        </Container>
      );
    } else {
      return <Redirect to="/starships/" />;
    }
  };

  return AuthHandler();
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

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
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
