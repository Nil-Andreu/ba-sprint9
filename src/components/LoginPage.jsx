import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Redirect, withRouter } from "react-router-dom";

const LoginPage = () => {
  let history = useHistory();
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  useEffect(() => {
    let isEmail = window.localStorage.getItem("email");
    let isPassword = window.localStorage.getItem("password");

    if (isEmail == null || isPassword == null) {
    } else {
      setAuth(true); // so it will re-render the app and will be redirected
    }
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    history.push("/starships/")
  };

  let AuthHandler = () => {
    if (!auth) {
      return (
        <Container>
          <LoginForm>
            <h1>Welcome to Star Wars App</h1>
            <Form onSubmit={(e) => SubmitHandler(e)}>
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

export default withRouter(LoginPage); // To be able to do the redirect
