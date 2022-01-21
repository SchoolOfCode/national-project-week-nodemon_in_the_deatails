import React, { useState } from "react";

const Login = ({ setToken, setUserId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [revealCreate, setRevealCreate] = useState(false);

  const loginUser = async (creds) => {
    const response = await fetch(
      `https://desolate-ridge-07270.herokuapp.com/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      }
    );
    const data = await response.json();
    if (data.token === "token-refused") {
      alert("Invalid username or password");
      return null;
    } else {
      setToken(data.token);
      setUserId(data.user_id);
    }
  };

  const createUser = async (user) => {
    const response = await fetch(
      `https://desolate-ridge-07270.herokuapp.com/users/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    setRevealCreate(false);
    alert(`Welcome, ${user.first_name}. Please log in.`);
  };
  const submitNewUser = (e) => {
    e.preventDefault();
    createUser({
      email: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email: username, password: password });
  };

  const handleCreate = () => {
    setRevealCreate(!revealCreate);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h6>New here?</h6>
      <button onClick={handleCreate}> Create an account</button>
      {revealCreate && (
        <>
          <h2>create an account</h2>
          <p>
            The code snippet app provided an improved way to document your daily
            reflections at the School of Code. The code snippet section provides
            a space that makes it easy for you to enter a code pattern that
            represents what you learnt on a particular day. The mood section
            shows 5 emoji which represents your mood for that day; the final
            section is a reflection text where you can put down your thoughts
            for the day and or what you struggled with that day. Please register
            and explore our app while we help you keep track of your learning
            process at the School of Code.
          </p>
          <div>
            <form onSubmit={submitNewUser}>
              <label>
                <p>First Name</p>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label>
                <p>Last Name</p>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label>
                <p>Email (your username)</p>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
