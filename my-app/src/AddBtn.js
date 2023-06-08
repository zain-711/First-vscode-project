import "./Button.css";
import RecieptComponent from "./reciept";
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
      <RecieptComponent key={counter} counter={counter}></RecieptComponent>,
    ]);
  };

  return (
    <button onClick={add} id="add" className="add">
      +
    </button>
  );
}
