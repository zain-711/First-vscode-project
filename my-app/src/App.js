// ******************************************************
// Main root javascript file
// ******************************************************

// Basic import setup
import React, { useState } from "react";
import "./App.css";

// imports page components from other files
import SearchBar from "./SearchBar";
import Add from "./AddBtn";
import RecieptComponent from "./receipt";
import ListLabels from "./ListLabels";


// root function for the app
function App() {
  //state array

  //sets state for the ID counter
  const [counter, setCounter] = useState(1);

  //sets state for the list of receipts
  const [receiptList, setReceiptList] = useState([]);

  //returns the page and all the elements on it
  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <div className="searchBar">
          <SearchBar></SearchBar>
        </div>

        <br></br>
      </div>
      <div className="body">
        <br></br>
        <ListLabels></ListLabels>
        <br></br>
        {receiptList}
        <div className="addbtn">
          <Add
            receiptList={receiptList}
            setReceiptList={setReceiptList}
            counter={counter}
            setCounter={setCounter}
          ></Add>
        </div>
      </div>
    </div>
  );
}
export default App;

// "No reciepts" component
// if array is empty return "No reciepts."(grey) and "Add a reciept here" (grey) under add button
