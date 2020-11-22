import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const ContainerApp=styled.div`
height:100vh;
padding:1rem 1rem;
background:hsl(185, 75%, 39%);
display:flex;
align-items:center;
justify-content:center;
`;

const AppCard = () => {
    return (
        <ContainerApp>
            <Card/>
        </ContainerApp >
    )
}

export default AppCard
