import React from 'react'
import styled from 'styled-components'
import User from '../../images/image-victor.jpg'
const ImageUSer=styled.img`
border-radius:50%;
max-width: 100%;
`;
const ContainerImageUser=styled.div`
position:absolute;
top:0;left: calc(50% - 48px);
padding:5px;
border-radius:50%;
margin-bottom:1rem;
height:106px;
background:#fff;
transform:translateY(calc(-50%));
`;
const Title1=styled.h1`
color:${props=>props.colorTitle};
`;
const Edad=styled.span`
color:${props=>props.colorSubTitle};
`;
const SubTitle1=styled.p`
color:${props=>props.colorSubTitle||'red'};
`;

const ContainerMain=styled.div`
padding:4rem 1rem 1rem;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:2rem;
background:#fff;
position:relative;
`;
const Main = (props) => {
    const {dark: colorTitle,blue: colorSubTitle}=props.palette;
    return (
        <ContainerMain>
            <ContainerImageUser>
                <ImageUSer src={User}></ImageUSer>
            </ContainerImageUser>
            <Title1 colorTitle={colorTitle}>Victor Crest <Edad colorSubTitle={colorSubTitle}>26</Edad></Title1>
            <SubTitle1 colorSubTitle={colorSubTitle}>London</SubTitle1>
        </ContainerMain>
    )
}

export default Main
