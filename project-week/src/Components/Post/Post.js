import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
import { useState, useEffect } from "react";

export default function Post() {

  const [postObject, setPostObject] = useState({});
  const [codeSnippet, setCodeSnippet] = useState("");
  const [reflectionsField, setReflectionsField] = useState("");
  const [mood, setMood] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (postObject.length === 0){
        return null
      } else{

      const request = new Request('https://desolate-ridge-07270.herokuapp.com/posts/3', {method: 'POST', body: JSON.stringify(postObject)});


      const response = await fetch(request);
      const data = await response.json();
      console.log(postObject)
    }}
    fetchData();
  }, [postObject]);

  
   function getSnippetValue(userInput) {
    setCodeSnippet(userInput.target.value);
  }
  console.log(codeSnippet);

   function getReflectionsValue(userInput) {
    setReflectionsField(userInput.target.value);
  }
  console.log(reflectionsField);

  function addPost(codeSnippet, reflectionsField, mood) {
    const post = {
      mood: mood,
      snippet: codeSnippet,
      reflection_text: reflectionsField,
    };
    setPostObject(post);
    return post;
  }

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

