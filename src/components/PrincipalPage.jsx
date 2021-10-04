import React, { Fragment, useEffect, useState } from "react";
import Detail from "./Detail.jsx";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

function PrincipalPage() {
  const [url, setUrl] = useState("https://swapi.dev/api/starships/");
  const [buttonList, setButtonList] = useState(false);
  const [data, setData] = useState([]);
  const [detailRenderer, setDetailRenderer] = useState(false);

  // To handle the number of the startship
  let idStarship = 0;

  let buttonListHandler = (number) => {
    if (number == 1) {
      setButtonList(false);
    } else {
      setButtonList(true);
    }
  };

  useEffect(() => {
    // We create the function with axios
    const FetchUrl = async (urlQuery) => {
      let result = await axios(urlQuery);
      console.log(result);
      setData(result.data.results);
    };
    FetchUrl(url);
  }, [url]);

  const DetailRenderedHandler = (idStarship) => {
    setDetailRenderer(!detailRenderer)
  }

  return (
    <Fragment>
      <Navbar>
        <Button
          checked={buttonList}
          onClick={() => {
            buttonListHandler(1);
          }}
        >
          Home
        </Button>
        <Button
          checked={buttonList}
          onClick={() => {
            buttonListHandler(2);
          }}
        >
          Starthips
        </Button>
      </Navbar>
      {buttonList ? (
        <List>
          {data.map((i) => {
            idStarship += 1;
            if (detailRenderer == true) {
              return <Detail key={idStarship} id={idStarship} setDetailRenderer={setDetailRenderer} detailRenderer={detailRenderer}/>;
            } else {
              return (
                <ListCard key={idStarship} onClick={() => DetailRenderedHandler(idStarship)}>
                  <ListCardTitle>{i.name}</ListCardTitle>
                  <ListCardType>{i.model}</ListCardType>
                </ListCard>
              );
            }
          })}
        </List>
      ) : (
        <HomePage />
      )}
    </Fragment>
  );
}

const Navbar = styled.div`
  border: white;
  height: 5vh;
  background-color: #000;
  border-top: 1px solid #aaaaaa;
  border-bottom: 1px solid #aaaaaa;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  width: 10vw;
  height: 100%;
  border-left: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
  color: #999999;

  border-top: none;
  border-bottom: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  &:focus {
    border-bottom: 3px solid #2a58f1;
  }
`;

const HomePage = styled.div`
  width: 100%;
  height: 80vh;
`;

const List = styled.div`
  background-color: #000;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ListCard = styled.div`
  margin: 2vh 15vw;
  height: 14vh;
  border-radius: 2px;
  width: 70vw;
  background-color: #202020;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const ListCardTitle = styled.h2`
  margin-left: 30px;
  font-size: 1rem;
  color: #999999;
  text-transform: uppercase;
`;

const ListCardType = styled.h3`
  margin-left: 30px;
  font-size: 0.5rem;
  text-transform: uppercase;
  color: #999999;
`;

export default PrincipalPage;
