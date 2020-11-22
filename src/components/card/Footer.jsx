import React from 'react'
import styled from 'styled-components'
const ConatinerFooter=styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
padding:1rem;
`;
const SubTitle1=styled.p`
color:${props=>props.colorSubTitle||'red'};
text-align:center
`;
const Title2=styled.h2`
color:${props=>props.colorTitle||'green'};
font-size:1.2rem;
text-align:center;
`;
const Footer = (props) => {
    const {blue:colorSubtitle,dark:colorTitle}=props.palette;
    return (
        <ConatinerFooter>
            <div>
                <Title2 colorTitle={colorTitle}>80K</Title2>
                <SubTitle1 colorSubTitle={colorSubtitle}>Followers</SubTitle1>
            </div>
            <div>
                <Title2 colorTitle={colorTitle}>803K</Title2>
                <SubTitle1 colorSubTitle={colorSubtitle}>Lives</SubTitle1>
            </div>
            <div>
                <Title2 colorTitle={colorTitle}>1.4K</Title2>
                <SubTitle1 colorSubTitle={colorSubtitle}>Photos</SubTitle1>
            </div>
        </ConatinerFooter>
    )
}
export default Footer;