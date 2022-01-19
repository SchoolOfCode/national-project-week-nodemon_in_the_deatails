export default function InputField({ getTextValue }) {
  return (
    <div>
      <input type="text" onChange={getTextValue}></input>
    </div>
  );
}

