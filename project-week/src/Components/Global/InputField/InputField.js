export default function InputField({ getTextValue, style, placeholder }) {
  return (
    <div >
      <textarea
        type="text"
        onChange={getTextValue}
        placeholder={placeholder}
        style={style}
      ></textarea>
    </div>
  );
}
