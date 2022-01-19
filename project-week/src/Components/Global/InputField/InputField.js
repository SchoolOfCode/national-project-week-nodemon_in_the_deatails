export default function InputField({ getTextValue, style, placeholder }) {
  return (
    <div style={{ width: "600px" }}>
      <input
        type="text"
        onChange={getTextValue}
        style={style}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
