import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
import { useState, useEffect } from "react";

export default function Post() {
  useEffect(() => {
    async function fetchData() {
      const response =
        await fetch`https://desolate-ridge-07270.herokuapp.com/posts/3`;
      const data = await response.json();
    }
  });

  const [codeSnippet, setCodeSnippet] = useState("");

  function getSnippetValue(userInput) {
    setCodeSnippet(userInput.target.value);
  }
  console.log(codeSnippet);

  const [reflectionsField, setReflectionsField] = useState("");

  function getReflectionsValue(userInput) {
    setReflectionsField(userInput.target.value);
  }
  console.log(reflectionsField);

  function addPost(codeSnippet, reflectionsField, mood) {
    const postObject = {
      mood: mood,
      snippet: codeSnippet,
      reflection_text: reflectionsField,
    };
    console.log(postObject);
    return postObject;
  }

  const [mood, setMood] = useState(0);

  const handleClick = (e) => {
    setMood(Number(e.target.value));
  };
  console.log(mood);

  return (
    <div>
      <InputField getTextValue={getSnippetValue} />
      <RadioButton handleClick={handleClick} />
      <InputField getTextValue={getReflectionsValue} />
      <Button
        handleClick={function () {
          addPost(codeSnippet, reflectionsField, mood);
        }}
      />
    </div>
  );
}
