import { Link } from "react-router-dom";

export default function Button({ handleClick, buttonText, style }) {
  return (
    <div>
      <Link to="/dashboard">
        <button
          type="button"
          onClick={handleClick}
          style={
            style
          }
        >
          {buttonText}
          SNIP
        </button>
      </Link>
    </div>
  );
}
