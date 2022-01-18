import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
import { useState } from "react";

export default function Post() {

  const [posts, setPosts] = useState([]);

  function addPost(post){
    setPosts([post, ...posts])
    console.log(posts)
  }

  return (
    <div>
      <InputField />
      <RadioButton />
      <InputField />
      <Button handleClick={function(){addPost(posts)}}/>
    </div>
  );
}
