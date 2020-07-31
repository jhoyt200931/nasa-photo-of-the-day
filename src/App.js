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
  const dates = ["2020-07-28", "2020-07-27", "2020-07-26", "2020-07-25", "2020-07-24"];
  
  return (
    <Base className="App">
      <Header />
      <PhotoCard props={dates}/>
    </Base>
  );
}

export default App;
