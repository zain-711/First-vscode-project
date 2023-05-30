import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Add from "./AddBtn";

function App() {
  //state array
  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <br></br>
        <br></br>
        <SearchBar></SearchBar>
        <Add></Add>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
export default App;

// "No reciepts" component
// if array is empty return "No reciepts."(grey) and "Add a reciept here" (grey) under add button
