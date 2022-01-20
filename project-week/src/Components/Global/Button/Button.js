export default function Button({ handleClick, buttonText, style }) {
  return (
    <div>
      <button type="button" onClick={handleClick} style={style}>
        {buttonText}
      </button>
    </div>
  );
}
