import React, { useState, useEffect } from "react";
import { useHistory, Redirect, withRouter } from "react-router-dom";

// Import components from a separated file
import {Container, LoginForm, Form, InputContainer, Button} from "./LoginPageComponents"

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
              <InputContainer>
                <label htmlFor="">Enter your email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </InputContainer>
              <InputContainer>
                <label htmlFor="">Enter your password:</label>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>
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


export default withRouter(LoginPage); // To be able to do the redirect
