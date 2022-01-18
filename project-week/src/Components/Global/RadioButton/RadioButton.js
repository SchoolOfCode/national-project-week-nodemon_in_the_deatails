export default function RadioButton({ handleClick }) {
  return (
    <div onChange={handleClick}>
      <input type="radio" value="1" name="mood" /> 1
      <input type="radio" value="2" name="mood" /> 2
      <input type="radio" value="3" name="mood" /> 3
      <input type="radio" value="4" name="mood" /> 4
      <input type="radio" value="5" name="mood" /> 5
    </div>
  );
}
