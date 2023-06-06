import "./Button.css";
import RecieptComponent from "./reciept";

export default function Add({receiptList, setRecieptList}) {

const add = () =>{
    setRecieptList([...receiptList, <RecieptComponent></RecieptComponent>])
  }
  
  return (
    <button onClick={add} id="add" className="add">
      +
    </button>
  );
}
