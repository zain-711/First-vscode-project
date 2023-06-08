import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Add from "./AddBtn";
import RecieptComponent from "./reciept";
import ListLabels from "./ListLabels";

function App() {
  //state array

  const [counter, setCounter] = useState(1);
  const [receiptList, setReceiptList] = useState([]);

  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <div className="searchBar">
          <SearchBar></SearchBar>
        </div>
        <div className="addbtn">
          <Add
            receiptList={receiptList}
            setReceiptList={setReceiptList}
            counter={counter}
            setCounter={setCounter}
          ></Add>
        </div>
        <br></br>
      </div>
      <div className="body">
        <br></br>
        <ListLabels></ListLabels>
        <br></br>
        {receiptList}
      </div>
    </div>
  );
}
export default App;

// "No reciepts" component
// if array is empty return "No reciepts."(grey) and "Add a reciept here" (grey) under add button
