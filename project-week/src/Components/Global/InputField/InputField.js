import "./InputField.css";

export default function InputField({ getTextValue,style }) {
  return (
    <div className="input-field">
      <input
        type="text"
        onChange={getTextValue}
        style={style
        
        }
      ></input>
    </div>
  );
}
