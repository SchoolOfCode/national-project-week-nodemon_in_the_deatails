export default function InputField({ getTextValue, style }) {
  return (
    <div>
      <input type="text" onChange={getTextValue} style={style}></input>
    </div>
  );
}
