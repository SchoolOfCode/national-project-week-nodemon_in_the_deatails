import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
import { useState, useEffect } from "react";

export default function CreatePost() {
  const [postObject, setPostObject] = useState({});
  const [codeSnippet, setCodeSnippet] = useState("");
  const [reflectionsField, setReflectionsField] = useState("");
  const [mood, setMood] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (postObject.mood === undefined) {
        return;
      } else {
        const request = new Request(
          "https://desolate-ridge-07270.herokuapp.com/posts/3",
          {
            method: "POST",
            body: JSON.stringify(postObject),
            headers: { "Content-Type": "application/json" },
          }
        );
        const response = await fetch(request);
        const data = await response.json();
        return data;
      }
    }
    fetchData();
  }, [postObject]);

  function getSnippetValue(userInput) {
    setCodeSnippet(userInput.target.value);
  }

  function getReflectionsValue(userInput) {
    setReflectionsField(userInput.target.value);
  }

  function addPost(codeSnippet, reflectionsField, mood) {
    const d = new Date();
    let today = d.toISOString();
    const post = {
      mood: mood,
      snippet: codeSnippet,
      reflection_text: reflectionsField,
      post_date: today,
    };
    setPostObject(post);
    return post;
  }

  const handleClick = (e) => {
    setMood(Number(e.target.value));
  };

  const codeSnippetStyle = {
    backgroundColor: "#EFD6AC",
    borderRadius: "10px",
    height: "115px",
    width: "400px",
    borderColor: "#EFD6AC",
  };
  const reflectionStyle = {
    backgroundColor: "#EFD6AC",
    borderRadius: "10px",
    height: "115px",
    width: "400px",
    borderColor: "#EFD6AC",
  };

  return (
    <div>
      <h3 style={{ color: "white" }}>Your Reflection Of The Day ✨</h3>
      <InputField getTextValue={getSnippetValue} style={codeSnippetStyle} />
      <h3 style={{ color: "white", fontSize: "1em" }}>
        How Did You Feel Today?
      </h3>
      <RadioButton handleClick={handleClick} />
      <InputField getTextValue={getReflectionsValue} style={reflectionStyle} />

      <Button
        handleClick={function () {
          addPost(codeSnippet, reflectionsField, mood);
        }}
        buttonText="Button"
      />
    </div>
  );
}