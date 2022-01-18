import { useState } from "react";

export default function InputField() {
  const [post, setPost] = useState("");

  function getTextValue(userInput) {
    setPost(userInput.target.value);
    console.log(post);
  }

  return (
    <div>
      <input type="text" onChange={getTextValue}></input>
    </div>
  );
}
