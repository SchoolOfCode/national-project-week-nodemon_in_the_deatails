export default function InputField({ getTextValue, style, placeholder }) {
  return (
    <div style={{ width: "600px" }}>
      <textarea
        type="text"
        onChange={getTextValue}
        style={style}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
