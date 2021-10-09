import React, { Fragment, useEffect, useState } from "react";
import DetailStarships from "./DetailStarships.jsx";
import DetailActors from "./DetailActors.jsx"
import styled from "styled-components";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

function PrincipalPage() {
  // For handling what is rendered
  const [buttonList, setButtonList] = useState(1);

  // For handling auth
  const [emailUser, setEmailUser] = useState(false);
  const [passwordUser, setPasswordUser] = useState(false);
  const [auth, isAuth] = useState(true);  
  /*By default is true. In the case it turns false, 
  we will then redirect. If by default is false, we 
  redirect when the page is loaded and cannot check auth*/


  // For handling starships
  const [dataStarships, setDataStarships] = useState([]);
  const [idRendererStarships, setIdRendererStarships] = useState(false);
  const [pageStarships, setPageStarships] = useState(1);

  // For handling actors
  const [dataActors, setDataActors] = useState([]);
  const [idRendererActors, setIdRendererActors] = useState(false);
  const [pageActors, setPageActors] = useState(1);

  // Handling auth
  useEffect(() => {
    let email = window.localStorage.getItem("email");
    let password = window.localStorage.getItem("password");
    if (email == null || password == null) {
      isAuth(false); // Will be re-rendered, and now will render the Redirect component
    } else {
      setEmailUser(email);
      setPasswordUser(password);
    }
  }, []);

  // For handling first queryset
  useEffect(() => {
    // We create the function with axios for querying the page pf the starthips
    let urlStarships = `https://swapi.dev/api/starships/?page=${pageStarships}`;

    const FetchUrlStarships = async (urlQuery) => {
      let result = await axios(urlQuery);
      setDataStarships(result.data.results);
    };

    FetchUrlStarships(urlStarships);

    // Now handling the actors
    let urlActors = "https://swapi.dev/api/people/"

    const FetchUrlActors = async(urlQuery) => {
      let result = await axios(urlQuery)
      console.log(result)
      setDataActors(result.data.results)
    }

    FetchUrlActors(urlActors)
    console.log(dataActors)
  }, []);

  // For handling the querysets of the button click
  useEffect(() => {
    // We create the new url with the new page number
    let url = `https://swapi.dev/api/starships/?page=${pageStarships}`;

    const FetchUrl = async (urlQuery) => {
      let result = await axios(urlQuery); // Obtain which will be the data for this new pagination
      let data_incoming = result.data.results;
      //Spreading in a new array the data we had and the new data
      let new_data = [...dataStarships, ...data_incoming];
      setDataStarships(new_data);
    };

    // The maximum amount of pages that there are, so we only make the fetch when there are more
    if (pageStarships > 0 && pageStarships < 5) {
      FetchUrl(url);
    }
    // We will also create a handler for this inside of the component
  }, [pageStarships]);

  // Handling for the actors
  useEffect(() => {
    // We create the new url with the new page number
    let url = `https://swapi.dev/api/people/?page=${pageActors}`;

    const FetchUrl = async (urlQuery) => {
      let result = await axios(urlQuery); // Obtain which will be the data for this new pagination
      let data_incoming = result.data.results;
      //Spreading in a new array the data we had and the new data
      let new_data = [...dataActors, ...data_incoming];
      setDataActors(new_data);
      console.log(dataActors)
    };

    // The maximum amount of pages that there are, so we only make the fetch when there are more
    if (pageActors > 0 && pageActors < 9) {
      FetchUrl(url);
    }
    // We will also create a handler for this inside of the component
  }, [pageActors]);

  // Log out handler
  const LogoutHandler = () => {
    // We first remove the items, to make also the auth to stay in false in the case the page is re-rendered
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("password");
    isAuth(false); // Will re-render the component, and itself will make the logout
  };

  // For handling the list is rendered
  const RendererListHandler = (buttonList) => {
    if (buttonList == 1) {
      return (
        <HomePage>
          <h3>Welcome to this page! Thanks for logging</h3>
          <p>You have been registered with: {emailUser}</p>
          <ButtonLogout onClick={LogoutHandler}>Log out</ButtonLogout>
        </HomePage>
      );
    }
    if (buttonList == 2) {
      return (
        <List>
          {dataStarships.map((i) => {
            if (
              idRendererStarships == dataStarships.indexOf(i, 0) &&
              typeof idRendererStarships == "number"
            ) {
              return (
                <DetailStarships i={i} setIdRenderer={setIdRendererStarships} key={i.name} />
              ); // Meaning that they clicking the i
            } else {
              return (
                <ListCard
                  key={i.name}
                  onClick={() => {
                    setIdRendererStarships(dataStarships.indexOf(i, 0));
                  }}
                >
                  <ListCardTitle>{i.name}</ListCardTitle>
                  <ListCardType>{i.model}</ListCardType>
                </ListCard>
              );
            }
          })}
          {pageStarships > 0 && pageStarships < 4 ? (
            <LoadMoreButton onClick={() => setPageStarships(pageStarships + 1)}>
              Load More
            </LoadMoreButton>
          ) : (
            <InformationPage>No more pages to load</InformationPage>
          )}
        </List>
      );
    } else {
      return (
          <List>
            {dataActors.map((i) => {
            if (
              idRendererActors == dataActors.indexOf(i, 0) &&
              typeof idRendererActors == "number"
            ) {
              return (
                <DetailActors i={i} setIdRendererActors={setIdRendererActors} key={i.name} />
              ); // Meaning that they clicking the i
            } else {
              return (
                <ListCard
                  key={i.name}
                  onClick={() => {
                    setIdRendererActors(dataActors.indexOf(i, 0));
                  }}
                >
                  <ListCardTitle>{i.name}</ListCardTitle>
                  <ListCardType>{i.birth_year}</ListCardType>
                </ListCard>
              );
            }
          })}
          {pageActors > 0 && pageActors < 9 ? (
            <LoadMoreButton onClick={() => setPageActors(pageActors + 1)}>
              Load More
            </LoadMoreButton>
          ) : (
            <InformationPage>No more pages to load</InformationPage>
          )}
          </List>
      )
    }
  };

  // Function for handling what will be rendered
  const RenderingFunction = () => {
    // In the case the user is authenticated
    if (auth == true) {
      return (
        <Fragment>
          <Navbar>
            <Button
              checked={buttonList == 1}
              onClick={() => {
                setButtonList(1);
              }}
            >
              Home
            </Button>
            <Button
              checked={buttonList == 2}
              onClick={() => {
                setButtonList(2);
              }}
            >
              Starthips
            </Button>
            <Button
              checked={buttonList == 3}
              onClick={() => {
                setButtonList(3);
              }}
            >
              Pilots
            </Button>
          </Navbar>
          {RendererListHandler(buttonList)}
        </Fragment>
      );
    } else {
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

const ButtonLogout = styled.button`
  color: white;
  width: 10vw;
  font-family: "Roboto Mono", "Arial";
  color: white;
  padding: 1vh 3vw;
  background-color: black;

  &:hover {
    transform: scale(1.05);
  }
`;

export default PrincipalPage;
