import React, { useEffect, useState, Fragment } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from "axios";

function Detail({i, setIdRenderer}) {
  
  return <Fragment>
    <Container>
      <NameInformation>{i.name}</NameInformation>
        <ButtonHandler 
        onClick={() => setIdRenderer(false)}></ButtonHandler>
    </Container>
  </Fragment>;
}

export default Detail;

const Container = styled.div`
margin: auto;
border-top: 1px solid white;
  height: 80vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailInformation = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid red;

`;

const NameInformation = styled.h1`
  color: white;

`;

const ErrorHandler = styled.div`
  color: white;
`;

const ButtonHandler = styled.button`
  padding: 3rem 10rem;
  background-color: white;
`;
