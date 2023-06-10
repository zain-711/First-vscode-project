/* ************************************************
This file creates and controls the two search bars
at the top of the page
************************************************ */

// imports the relevant CSS file
import "./SearchBar.css";
import { useState } from "react";

// exports a div containing both the search bars
export default function SearchBar({ searchHandler, optionHandler }) {
  function handlechange(e) {
    const input = e.target.value;
    searchHandler(input);
  }

  function handleOption(e) {
    const option = e.target.value;
    optionHandler(option);
  }

  return (
    <div className="SearchBars">
      {/* this contains the main search bar */}
      <input
        onChange={handlechange}
        className="search"
        placeholder="Search..."
      ></input>

      {/* this contains the search field choice bar,
      and determines its options */}
      <select onChange={handleOption} id="search-field-choice">
        <option value="" disabled selected>
          Select search field
        </option>
        <option value="id">ID number</option>
        <option value="Name">Name</option>
        <option value="Price">Price</option>
        <option value="Category">Category</option>
      </select>
    </div>
  );
}
