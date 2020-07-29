import React from "react";
import "./App.css";
import Header from "./Header"
import PhotoCard from "./PhotoCard";

function App() {
  const dates = ["2020-07-28", "2020-07-27", "2020-07-26", "2020-07-25", "2020-07-24"];
  
  return (
    <div className="App">
      <Header />
      <PhotoCard props={dates}/>
    </div>
  );
}

export default App;
