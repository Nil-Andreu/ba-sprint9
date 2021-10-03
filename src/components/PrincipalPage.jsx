import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function PrincipalPage() {
  const [url, setUrl] = useState("https://swapi.dev/api/starships/");
  const [buttonList, setButtonList] = useState(false);
  const [data, setData] = useState([]);

  // To handle the number of the startship
  let idStarship = 1;

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
      setData(result.data.results);
    };
    FetchUrl(url);
  }, [url]);

  return (
    <Fragment>
      <Header>
        <Image src={logo} />
      </Header>
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
            console.log(idStarship);

            let stringurl = "/starships/?id=" + idStarship; // To create a parameter in the url of the name of the starship

            idStarship += 1;

            return (
              <ListCard key={i.name} to={stringurl}>
                <ListCardTitle>{i.name}</ListCardTitle>
                <ListCardType>{i.model}</ListCardType>
              </ListCard>
            );
          })}
        </List>
      ) : (
        <HomePage />
      )}
    </Fragment>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #000;
`;

const Image = styled.img`
  justify-self: center;
  height: 19vh;
`;

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

const ListCard = styled(Link)`
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
