import "./Button.css";

export default function EditBtn({ handleClick }) {
  return (
    <button onClick={handleClick} className="edit">
      E
    </button>
  );
}
