export default function Savebtn({ item, saveHandler, handleClick }) {
  function save() {
    saveHandler(item);
    handleClick();
  }
  return (
    <button onClick={save} className="save">
      save
    </button>
  );
}
