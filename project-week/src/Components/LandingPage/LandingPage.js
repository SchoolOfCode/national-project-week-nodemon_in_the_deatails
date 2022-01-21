import Button from "../Global/Button/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <h1>Welcome to Snippet Snap! ⭐️</h1>
      <p>
        We aim to improve the way bootcampers, such as yourself, document their
        daily reflections at the School of Code. <br></br>
        The code snippet section provides a space that makes it easy for you to
        enter a code pattern that represents what you learnt on a particular
        day. <br></br>
        The mood section shows five emojis which represent your mood for that
        day.<br></br>
        The final section is a reflection text where you can put down your
        thoughts for the day and or what you struggled with that day.<br></br>
        Please register and explore our app while we help you keep track of your
        learning process at the School of Code!
      </p>
      <div className="login-button">
        <Button buttonText={<Link to="/login">Login</Link>} />
      </div>
    </>
  );
}

export default LandingPage;
