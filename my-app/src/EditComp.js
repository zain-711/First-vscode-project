import Savebtn from "./Savebtn";
import "./EditComp.css";
import { useState } from "react";

export default function EditComp({ saveHandler, item, handleClick }) {
  const [name, setName] = useState(item.Name);
  const [price, setPrice] = useState(item.Price);
  const [category, setCategory] = useState(item.Category);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="Object">
      <div className="idBox">{item.id}</div>
      <div>
        <input
          maxLength={"25"}
          className="entryBox"
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>
      <div>
        <input
          maxLength={"8"}
          className="priceBox"
          value={price}
          onChange={handlePriceChange}
        ></input>
      </div>
      <div>
        <select
          className="entryBox"
          id="category-choice"
          onChange={handleCategoryChange}
        >
          <option value={category}>{category}</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Health & Hiygene">Health & Hiygene</option>
          <option value="Garden">Garden</option>
          <option value="Cleaning & Laundry">Cleaning & Laundry</option>
          <option value="Appliances & Tech">Appliances & Tech</option>
          <option value="Automotive">Automotive</option>
          <option value="Clothing">Clothing</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Sports & Fitness">Sports & Fitness</option>
          <option value="Children">Children</option>
          <option value="Utilites & Bills">Utilites & Bills</option>
          <option value="Pets">Pets</option>
          <option value="Financial">Financial</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Arts & Crafts">Arts & Crafts</option>
          <option value="Furniture & Decor">Furniture & Decor</option>
          <option value="Tools & DIY">Tools & DIY</option>
          <option value="Services">Services</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div>
        <Savebtn
          item={{ id: item.id, Name: name, Price: price, Category: category }}
          saveHandler={saveHandler}
          handleClick={handleClick}
        ></Savebtn>
      </div>
    </div>
  );
}
