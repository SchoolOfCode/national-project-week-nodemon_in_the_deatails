export default function RadioButton({ handleClick}) {
  return (
    <div>
      <form >
        <input type="radio" value="1" onChange={handleClick} name="mood" />
        😭
        <input type="radio" value="2" onChange={handleClick} name="mood" /> 😔
        <input type="radio" value="3" onChange={handleClick} name="mood" /> 😐
        <input type="radio" value="4" onChange={handleClick} name="mood" /> 😊
        <input type="radio" value="5" onChange={handleClick} name="mood" /> 🤩
      </form>
    </div>
  );
}
