// ******************************************************
// Main root javascript file
// ******************************************************

// Basic import setup
import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// imports page components from other files
import SearchBar from "./SearchBar";
import Add from "./AddBtn";
import ListLabels from "./ListLabels";
import RecieptRender from "./ReceiptRender";

// root function for the app
function App() {
  //sets state for the ID counter

  //sets state for the list of receipts
  const [receiptList, setReceiptList] = useState([
    { id: 1, Name: "apple", Price: 1.99, Category: "Food & Drink" },
    { id: 2, Name: "laptop", Price: 299, Category: "Appliances & Tech" },
    { id: 3, Name: "banana", Price: 2.05, Category: "Food & Drink" },
    { id: 4, Name: "basketball", Price: 15, Category: "Sports & Fitness" },
  ]);
  const [counter, setCounter] = useState([5]);

  function removeHandler(id) {
    setReceiptList(
      receiptList.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function saveHandler(updatedItem) {
    setReceiptList(
      receiptList.map((item) => {
        return updatedItem.id === item.id ? updatedItem : item;
      })
    );
  }

  function addHandler() {
    setCounter(receiptList.length + 1);
    setReceiptList([
      ...receiptList,
      {
        id: receiptList[receiptList.length - 1].id + 1,
        Name: "Click the edit button to fill this reciept",
        Price: undefined,
        Category: "",
      },
    ]);
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReceiptList, setFilteredReceiptList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("Name");

  function optionHandler(option) {
    setSelectedCategory(option);
  }

  function searchHandler(input) {
    setSearchQuery(input);
  }

  useEffect(() => {
    let filteredList = receiptList;

    if (searchQuery) {
      filteredList = receiptList.filter((item) => {
        if (selectedCategory === "Price" || selectedCategory === "id") {
          return item[selectedCategory] === parseFloat(searchQuery);
        } else {
          return item[selectedCategory]
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        }
      });
    }

    setFilteredReceiptList(filteredList);
  }, [receiptList, searchQuery, selectedCategory]);

  //returns the page and all the elements on it
  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <div className="searchBar">
          <SearchBar
            optionHandler={optionHandler}
            searchHandler={searchHandler}
          ></SearchBar>
        </div>

        <br></br>
      </div>
      <div className="body">
        <div className="addbtn">
          <Add addHandler={addHandler}></Add>
        </div>
        <br></br>
        <ListLabels></ListLabels>
        <br></br>
        {filteredReceiptList.map((item) => {
          return (
            <div>
              <RecieptRender
                key={item.id}
                saveHandler={saveHandler}
                removeHandler={removeHandler}
                item={item}
              ></RecieptRender>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;

// "No reciepts" component
// if array is empty return "No reciepts."(grey) and "Add a reciept here" (grey) under add button
