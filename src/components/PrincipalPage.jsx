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
    background-color: #000;
`;

export default PrincipalPage
