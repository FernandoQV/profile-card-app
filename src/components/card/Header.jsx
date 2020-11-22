import React from 'react'
import styled from 'styled-components'
import Bg from '../../images/bg-pattern-card.svg'
const ContainerHeader=styled.div`
background-image:url(${Bg});
background-repeat:no no-repeat;
height:150px;
`;
const Header = () => {
    return (
        <ContainerHeader />
            
      
    )
}

export default Header

