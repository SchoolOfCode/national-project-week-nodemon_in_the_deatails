import { Link } from "react-router-dom";

export default function Button({ handleClick, buttonText }) {
  return (
    <div>
      <Link to="/dashboard">
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
          SNIP
        </button>
      </Link>
    </div>
  );
}
