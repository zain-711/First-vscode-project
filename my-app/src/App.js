import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Add from "./AddBtn";

function App() {
  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <br></br>
        <br></br>
        <SearchBar></SearchBar>
        <br></br>
        <br></br>
        <br></br>
        {/* <button className="edit">✎</button> */}
        {/* <button className="remove">X</button> */}
      </div>
      <div className="AddComponent">
        <Add></Add>
      </div>
    </div>
  );
}
export default App;
