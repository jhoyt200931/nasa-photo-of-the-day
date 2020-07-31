import React from "react";
import styled from "styled-components";

const Img = styled.img`
    height: 400px;
    width: 50%;
    border-radius: 10%;
`;

const ImgContainer = styled.div`
    display: flex;

`;


const ImgTitle = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
`;

const Description = styled.p`
    text-align: center;
    line-height: 1.2;
    font-style: italic;
    font-weight: bold;
    width: 80%;
    margin-left: 12%;
`;

const Date = styled.p`
    font-weight: bold;
    font-size: 1.1em;
    font-style: italic;
`;

const Copyright = styled.p`
    font-weight: bold;
    font-size: 1.1em;
    font-style: italic;
`;

const Photo = (props) => {
    console.log(props.photo);
    if (!props.photo) return <h3>Loading...</h3>
    return (
        
        <ImgContainer className="photo"> 
             <Img src={props.photo.hdurl} alt={props.photo.explanation} />
             <div>
                <ImgTitle>Title: {props.photo.title} </ImgTitle>
                <Description>Description: {props.photo.explanation} </Description>
                <Date>Date: {props.photo.date}</Date>
                <Copyright>Copyright: {props.photo.copyright}</Copyright>
            </div>
        </ImgContainer>
    )
}

export default Photo;