import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBars">
      <input className="search" placeholder="Search..." defaultValue=""></input>

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
