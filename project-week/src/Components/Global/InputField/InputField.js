import "./InputField.css";

export default function InputField({ getTextValue }) {
  return (
    <div className="input-field">
      <input
        type="text"
        onChange={getTextValue}
        style={{
          backgroundColor: "#EFD6AC",
          borderRadius: "10px",
          height: "115px",
          width: "400px",
          borderColor: "#EFD6AC",
        }}
      ></input>
    </div>
  );
}
