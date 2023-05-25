import "./App.css";



function App() {
  return (
    <div>
      <div className="NavigationBar">
        <br></br>
        <br></br> 
        <div className="SearchBars">
          <input className= "search" placeholder = "Search..." defaultValue=""></input>

          <select id="search-field-choice">
          <option value="" disabled selected>Select search field</option>
            <option value="itemId">ID number</option>
            <option value="itemName">Name</option>
            <option value="itemPrice">Price</option>
            <option value="itemCategory">Category</option>
          </select>
        </div>
        <br></br> 
        <div className="EditBar">
          <input className="name" placeholder = "enter item name here" defaultValue= ""></input>
          <input className="price" placeholder = "enter price here" defaultValue=""></input>

          <select id="Categories">
            <option value="" disabled selected>Please select category</option>
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
        </select>
          <button className="edit">✎</button>
          <button id="add" className="add">+</button>

          <button className="remove">X</button>
        </div>
        <br></br>
        <br></br> 
      </div>
    </div>
  );
}
export default App;

// test test test
