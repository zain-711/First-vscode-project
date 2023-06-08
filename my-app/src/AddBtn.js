import "./Button.css";
import RecieptComponent from "./receipt";
import React, { useState } from "react";

export default function Add({
  receiptList,
  setReceiptList,
  counter,
  setCounter,
}) {
  const add = () => {
    setCounter(counter + 1);
    setReceiptList([
      ...receiptList,
      <RecieptComponent key={counter} counter={counter} receiptList={receiptList} setReceiptList={setReceiptList}></RecieptComponent>,
    ]);
  };

  return (
    <button onClick={add} id="add" className="add">
      +
    </button>
  );
}
