import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import InputField from "../Global/InputField/InputField";
import { useState } from "react";

export default function Post() {
  return (
    <div>
      <InputField />
      <RadioButton />
      <InputField />
      <Button />
    </div>
  );
}
