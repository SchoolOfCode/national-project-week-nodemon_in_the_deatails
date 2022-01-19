import React from "react";

export default function Button({ handleClick, buttonText }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        style={{
          backgroundColor: "#EFD6AC",
          borderRadius: "10px",
          borderColor: "#EFD6AC",
          color: "#121420",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
