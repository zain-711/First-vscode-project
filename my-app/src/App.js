import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Add from "./AddBtn";
import RecieptComponent from "./reciept";
import ListLabels from "./ListLabels";

function App() {
  //state array
  const [receiptList, setReceiptList] = useState([<RecieptComponent key="1"></RecieptComponent>])
  
  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <br></br>
        <br></br>
        <SearchBar></SearchBar>
        <Add receiptList = {receiptList} setReceiptList={setReceiptList}></Add>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="array">
        <br></br>
        <ListLabels></ListLabels>
        <br></br>
        {receiptList}</div>
    </div>
  );
}
export default App;

// "No reciepts" component
// if array is empty return "No reciepts."(grey) and "Add a reciept here" (grey) under add button
