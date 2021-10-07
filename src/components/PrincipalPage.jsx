import React, { Fragment, useEffect, useState } from "react";
import Detail from "./Detail.jsx";
import styled from "styled-components";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

// For handling the auth (we do this not inside of the component, as we want to handle it before it is rendered)
/* Had a problem as i tried to define this inside of the component. And what happened is that i could not update the value of auth after the first renderer,
so it was always redirected */
let email = window.localStorage.getItem("email");
let password = window.localStorage.getItem("password");
let auth = false;

if (email == null || password == null) {
} else {
  auth = true;
}

function PrincipalPage() {
  const [buttonList, setButtonList] = useState(false);
  const [data, setData] = useState([]);
  const [idRenderer, setIdRenderer] = useState(false);
  const [page, setPage] = useState(1);
  const [emailUser, setEmailUser] = useState(email);
  const [passwordUser, setPasswordUser] = useState(password);

  let buttonListHandler = (number) => {
    if (number == 1) {
      setButtonList(false);
    } else {
      setButtonList(true);
    }
  };

  // For handling first queryset
  useEffect(() => {
    // We create the function with axios for querying the page
    let url = `https://swapi.dev/api/starships/?page=${page}`;

    const FetchUrl = async (urlQuery) => {
      let result = await axios(urlQuery);
      setData(result.data.results);
    };

    FetchUrl(url);
  }, []);

  // For handling the querysets of the button click
  useEffect(() => {
    // We create the new url with the new page number
    let url = `https://swapi.dev/api/starships/?page=${page}`;

    const FetchUrl = async (urlQuery) => {
      let result = await axios(urlQuery);
      // Obtain which will be the data for this new pagination
      let data_incoming = result.data.results;
      //Spreading in a new array the data we had and the new data
      let new_data = [...data, ...data_incoming];
      setData(new_data);
    };

    // The maximum amount of pages that there are, so we only make the fetch when there are more
    if (page > 0 && page < 5) {
      FetchUrl(url);
    }
    // We will also create a handler for this inside of the component
  }, [page]);

  // Function for handling what will be rendered
  const RenderingFunction = () => {
    if (auth == true) {
      // In the case the user is authenticated
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
                if (
                  idRenderer == data.indexOf(i, 0) &&
                  typeof idRenderer == "number"
                ) {
                  return <Detail i={i} setIdRenderer={setIdRenderer} />;
                } else {
                  return (
                    <ListCard
                      key={i.name}
                      onClick={() => {
                        setIdRenderer(data.indexOf(i, 0));
                      }}
                    >
                      <ListCardTitle>{i.name}</ListCardTitle>
                      <ListCardType>{i.model}</ListCardType>
                    </ListCard>
                  );
                }
              })}
              {page > 0 && page < 4 ? (
                <LoadMoreButton onClick={() => setPage(page + 1)}>
                  Load More
                </LoadMoreButton>
              ) : (
                <InformationPage>No more pages to load</InformationPage>
              )}
            </List>
          ) : (
            <HomePage>
              <h3>Welcome to this page! Thanks for logging</h3>
              <p>You have been registered with: {emailUser}</p>
            </HomePage>
          )}
        </Fragment>
      );
    } else {
      // In the case it is false
      return <Redirect to="/" />;
    }
  };

  return RenderingFunction();
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-top: 10vh;
  }
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

// This button when onclick, will load new data and will append this to the data we already have
const LoadMoreButton = styled.button`
  align-self: center;
  margin-top: 10vh;
  max-width: 40%;
  padding: 2rem 8rem;
  margin-bottom: 20vh;
  background-color: white;
  color: #000;
  font-family: "Roboto Mono", "Arial";
`;

const InformationPage = styled.p`
  align-self: center;
  margin-bottom: 10vh;
  color: red;
  font-family: "Roboto Mono", "Arial";
`;

export default PrincipalPage;
