import React, {Fragment, useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios' 
import logo from '../assets/logo.svg'

function PrincipalPage() {
    return (
        <Fragment>
            <Header>
                <Image src={logo} />
            
            </Header>
            <Navbar>
                <Button>
                    Home
                </Button>
                <Button>
                    Starthips
                </Button>
            </Navbar>
        </Fragment>
    )
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
    height: 10vh;
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
    color:white;

    border-top: none;
    border-bottom: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    &:focus {
        border-bottom: 10px solid #3502ad;
    }
`;

export default PrincipalPage
