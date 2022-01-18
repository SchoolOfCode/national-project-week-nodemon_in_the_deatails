import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
import { useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);

  function addPost(post) {
    setPosts([post, ...posts]);
    console.log(posts);
  }

  const [mood, setMood] = useState("");

  function getMoodValue(e) {
    setMood(e.target.value);
    console.log(mood);
  }

  return (
    <div>
      <InputField />
      <RadioButton
        handleClick={function () {
          getMoodValue(mood);
        }}
      />
      <InputField />
      <Button
        handleClick={function () {
          addPost(posts);
        }}
      />
    </div>
  );
}
