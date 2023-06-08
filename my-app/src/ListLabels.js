/* ************************************************
This file defines and controls the headings at 
the top of the list of receipts
************************************************ */

// imports the relevant CSS file
import "./ListLabels.css";

// exports a div containing the headings
export default function ListLabels() {
  return (
    <div className="ListLabels">
      <div className="header">
        <div>Item ID</div>
        <div>Item Name</div>
        <div>Item Price</div>
        <div>Item Category</div>
        <div className="editHint">Edit Entry here</div>
      </div>
    </div>
  );
}
