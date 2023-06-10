import "./Button.css";

export default function Add({ addHandler }) {
  return (
    <button onClick={addHandler} id="add" className="add">
      +
    </button>
  );
}
