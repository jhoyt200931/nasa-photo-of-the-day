import React from "react";
import styled from "styled-components";


const Head = styled.div`
    border-bottom: 2px solid black;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
`;
const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    opacity: 1;
`;
const SubTitle = styled.h2`
    font-size: 2em;
    opacity: 1;
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