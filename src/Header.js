import React from "react";
import styled from "styled-components";


const Head = styled.div`
    background-color: royalblue;
    box-sizing: border-box;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    
`;
const SubTitle = styled.h2`
    font-size: 2em;
    

`;

const Header = () => {
    return (
        <Head className="header">
            <Title>NASA</Title>
            <h2>Photo Of The Day</h2>
        </Head>
    )
}

export default Header;