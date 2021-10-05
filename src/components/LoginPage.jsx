import React from 'react'
import styled from 'styled-components'
import {useHistory,Link} from 'react-router-dom'

const LoginPage = () => {
    /*const Submit = () => {
        // We will redirect when the button is clicked
        useHistory().push("starships/") 
    }*/
    return (
        <Container>
            <LoginForm>
                <h1>Welcome to the page</h1>
                <Button to="starships/"></Button>
            </LoginForm>
        </Container>
    )
}

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
`;

const Button = styled(Link)`
    background-color: black;
    color: white;
  max-width: 40%;
  padding: 2rem 8rem;
  margin-bottom: 20vh;
  font-family: "Roboto Mono", "Arial";
`;


export default LoginPage
