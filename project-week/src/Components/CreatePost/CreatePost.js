import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
// import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CreatePost.css";
import { Link } from "react-router-dom";

export default function CreatePost({ userId }) {
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
          `https://desolate-ridge-07270.herokuapp.com/posts/${userId}`,
          {
            method: "POST",
            body: JSON.stringify(postObject),
            headers: { "Content-Type": "application/json" },
          }
        );
        const response = await fetch(request);
        const data = await response.json();
        alert("Post created.");
        return data;
      }
    }
    fetchData();
  }, [postObject, userId]);

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
    // Navigate("/dashboard");
    return post;
  }

  const handleClick = (e) => {
    setMood(Number(e.target.value));
  };

  const codeSnippetStyle = {
    backgroundColor: "#EFD6AC",
    borderRadius: "10px",
    height: "125px",
    width: "250px",
    borderColor: "#EFD6AC",
    fontSize: "20px",
    fontFamily: "Roboto Mono",
  };

  const reflectionStyle = {
    backgroundColor: "#EFD6AC",
    borderRadius: "10px",
    height: "145px",
    width: "600px",
    borderColor: "#EFD6AC",
    fontSize: "20px",
    fontFamily: "Merriweather",
  };

  const buttonStyle = {
    backgroundColor: "#EFD6AC",
    borderRadius: "35px",
    borderColor: "#EFD6AC",
    color: "#121420",
    height: "50px",
    width: "150px",
    fontSize: "24px",
    fontFamily: "Merriweather",
  };

  return (
    <div className="flex-wrapper">
      <div className="create-post">
        <h1 className="heading">Your Reflection Of The Day ✨</h1>
        <div className="code-input">
          <InputField
            getTextValue={getSnippetValue}
            placeholder="//code snippet"
            style={codeSnippetStyle}
          />
        </div>
        <div className="radio-button">
          <h3>How Did You Feel Today?</h3>
          <RadioButton handleClick={handleClick} />
        </div>
        <div className="reflection-input">
          <InputField
            getTextValue={getReflectionsValue}
            style={reflectionStyle}
            placeholder="Your thoughts and worries go here..."
          />
        </div>
        <div className="button1">
          <Button
            handleClick={function () {
              addPost(codeSnippet, reflectionsField, mood);
            }}
            style={buttonStyle}
            buttonText={"Submit"}
          />{" "}
        </div>
        <div className="button2">
          <Button
            style={buttonStyle}
            buttonText={<Link to="/dashboard">Dashboard</Link>}
          />
        </div>
      </div>
    </div>
  );
}
