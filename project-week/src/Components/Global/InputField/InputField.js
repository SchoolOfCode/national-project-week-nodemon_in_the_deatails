import { useState } from "react";

export default function InputField({ getTextValue }) {
  // const [inputField, setInputField] = useState("");

  // function getTextValue(userInput) {
  //   setInputField(userInput.target.value);
  // }
  // console.log(inputField);

  return (
    <div>
      <input type="text" onChange={getTextValue}></input>
    </div>
  );
}

