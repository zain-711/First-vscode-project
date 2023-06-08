import "./reciept.css";

export default function RecieptComponent(counter) {
  const id = counter.counter;
  return (
    <div className="ListItem">
      <div className="idBox">{id}</div>
      <input
        className="entryBox"
        placeholder="Enter Item name"
        maxLength={"25"}
      ></input>
      <input
        className="priceBox"
        placeholder="Item price"
        maxLength={"8"}
      ></input>
      <select className="entryBox" id="category-choice">
        <option disabled selected>
          Select category
        </option>
        <option value="food">Food & Drink</option>
        <option value="health">Health & Hiygene</option>
        <option value="garden">Garden</option>
        <option value="cleaning">Cleaning & Laundry</option>
        <option value="appliance">Appliances & Tech</option>
        <option value="auto">Automotive</option>
        <option value="clothes">Clothing</option>
        <option value="entertainment">Entertainment</option>
        <option value="office">Office Supplies</option>
        <option value="sports">Sports & Fitness</option>
        <option value="children">Children</option>
        <option value="bills">Utilites & Bills</option>
        <option value="pets">Pets</option>
        <option value="financial">Financial</option>
        <option value="jewelry">Jewelry</option>
        <option value="arts">Arts & Crafts</option>
        <option value="furniture">Furniture & Decor</option>
        <option value="tools">tools & DIY</option>
        <option value="services">Services</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>

      {/* <table>
                <tr>
                    <th>Item ID</th>
                    <th>item Name</th>
                    <th>Item Price</th>
                    <th>itemCategory</th>
                </tr>
                <tr>
                    <td><input value="" placeholder="Enter Item name"></input></td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table> */}
    </div>
  );
}
