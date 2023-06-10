import "./Button.css";

export default function Removebtn({ id, removeHandler }) {
  function handleRemoveClick(e) {
    removeHandler(id);
  }
  return (
    <button className="remove" onClick={handleRemoveClick}>
      X
    </button>
  );
}
