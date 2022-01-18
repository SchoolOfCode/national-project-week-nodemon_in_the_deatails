export default function RadioButton({ handleClick }) {
  return (
    <div>
      <form>
        <input
          type="radio"
          value="1"
          // checked={}
          onChange={handleClick}
          name="mood"
        />
        1
        <input type="radio" value="2" onChange={handleClick} name="mood" /> 2
        <input type="radio" value="3" onChange={handleClick} name="mood" /> 3
        <input type="radio" value="4" onChange={handleClick} name="mood" /> 4
        <input type="radio" value="5" onChange={handleClick} name="mood" /> 5
      </form>
    </div>
  );
}
