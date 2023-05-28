import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="NavigationBar">
      <SearchBar></SearchBar>
      <br></br>
      <div className="EditBar">
        <button className="edit">✎</button>
        <button id="add" className="add">
          +
        </button>

        <button className="remove">X</button>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
export default App;

// test test test

// TO DO -
// Seperate button as component.
// remove second line of inout boxes and keep buttons.

{
  /* <input
          className="name"
          placeholder="enter item name here"
          defaultValue=""
        ></input>
        <input
          className="price"
          placeholder="enter price here"
          defaultValue=""
        ></input>

        <select id="Categories">
          <option value="" disabled selected>
            Please select category
          </option>
          <option value="food">Food and Drink</option>
          <option value="appliance">Appliances</option>
          <option value="stationary">Stationary</option>
          <option value="clothes">Clothing</option>
          <option value="diy">DIY and Repairs</option>
          <option value="entertainment">Entertainment</option>
          <option value="garden">Gardening</option>
          <option value="cleaning">Cleaning Products</option>
          <option value="toiletries">Toiletries</option>
          <option value="other">Other Items</option>
        </select> */
}
