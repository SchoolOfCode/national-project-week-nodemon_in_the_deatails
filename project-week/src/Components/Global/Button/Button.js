import React from "react";

export default function Button({ handleClick, buttonText }) {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}
