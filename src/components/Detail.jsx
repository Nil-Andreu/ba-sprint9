import React, { useEffect, useState, Fragment } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from "axios";

function Detail({id, setIdRenderer}) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false)

  useEffect(() => {

    // We create the function with axios
    const FetchUrl = async () => {
      let url = `https://swapi.dev/api/starships/${id}/?format=json`
      console.log(url)
      let result = await axios.get(url).then(
        res => res.data
      ).catch( // For catching the errors
        error => {setErr(error.toString())
        }
        
      )
      setData(result)
    };

    FetchUrl();
  }, []);

  return <Fragment>
    <Container>
      {(!err) ? <DetailInformation>
        <NameInformation>{data.name}</NameInformation>


        </DetailInformation> :
        <ErrorHandler>{err}</ErrorHandler>}
        <ButtonHandler 
        onClick={() => setIdRenderer(false)}></ButtonHandler>
    </Container>
  </Fragment>;
}

export default Detail;

const Container = styled.div`
position: fixed;
top: 30vh;
margin: auto;
border-top: 1px solid white;
  height: 80vh;
  background-color: #000;
  display: flex;
  flex-direction: row;
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
  height: 100px;
  width: 300px;
  background-color: white;
`;
