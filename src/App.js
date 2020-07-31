import React from "react";
import "./App.css";
import Header from "./Header"
import PhotoCard from "./PhotoCard";
import styled from "styled-components";

const Base = styled.div`
  background-image: url('https://s3.envato.com/files/176875474/Untitled-1.jpg');
  background-size: cover;
`;


function App() {
  
  
  return (
    <Base className="App">
      <Header />
      <PhotoCard/>
    </Base>
  );
}

export default App;
