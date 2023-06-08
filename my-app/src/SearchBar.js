/* ************************************************
This file creates and controls the two search bars
at the top of the page
************************************************ */

// imports the relevant CSS file
import "./SearchBar.css";

// exports a div containing both the search bars
export default function SearchBar() {
  return (
    <div className="SearchBars">

      {/* this contains the main search bar */}
      <input className="search" placeholder="Search..." defaultValue=""></input>

      {/* this contains the search field choice bar,
      and determines its options */}
      <select id="search-field-choice">
        <option value="" disabled selected>
          Select search field
        </option>
        <option value="itemId">ID number</option>
        <option value="itemName">Name</option>
        <option value="itemPrice">Price</option>
        <option value="itemCategory">Category</option>
      </select>
    </div>
  );
}
