import "./App.css";

function App() {
  return (
    <div>
      <div className="NavigationBar">
        <div className="SearchBars">
          <input className= "search" defaultValue = "Search..."></input>
          <select id="search-field-choice">
            <option value="itemId">ID number</option>
            <option value="itemName">Name</option>
            <option value="itemPrice">Price</option>
            <option value="itemCategory">Category</option>
        </select>
        </div>
        <div className="EditBar">
          <input defaultValue = "Item Name"></input>
          <input defaultValue = "Price"></input>
          <select id="Categories">
            <option value="blank">please select category</option>
            <option value="food">Food and Drink</option>
            <option value="appliance">Appliances</option>
            <option value="stationary">Stationary</option>
            <option value="clothes">Clothing</option>
            <option value="diy">DIY and repairs</option>
            <option value="entertainment">Entertainment</option>
            <option value="garden">Gardening</option>
            <option value="cleaning">Cleaning Products</option>
            <option value="Other">Other items</option>
        </select>
          <button className="edit"> <image src =""></image> </button>
          <button className="Add">+</button>
          <button className="remove">X</button>
        </div>
      </div>
    </div>
  );
}
export default App;

// test test test

