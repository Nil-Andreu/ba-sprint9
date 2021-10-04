import React, { useEffect, useState, Fragment } from "react";
import styled from 'styled-components'
import axios from "axios";

function Detail(id) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false)

  useEffect(() => {

    // We create the function with axios
    const FetchUrl = async () => {
      let result = await axios.get(`https://swapi.dev/api/starships/${id}/?format=json`).then(
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
    </Container>
  </Fragment>;
}

export default Detail;

const Container = styled.div`
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
