import React from 'react'
import styled from 'styled-components'
import Header from './card/Header'
import Main from './card/Main'
import Footer from './card/Footer'
import getPalette from './helpers/getPalette'
const ContainerCard=styled.div`

display:flex;
flex-direction:column;
background:#fff;
border-radius:15px;
overflow:hidden;
`;
const Card = () => {
    const palette=getPalette();
    
    return (
        <ContainerCard>
            <Header/>
            <Main palette={palette}/>
            <Footer palette={palette}/>
        </ContainerCard>
    )
}

export default Card
