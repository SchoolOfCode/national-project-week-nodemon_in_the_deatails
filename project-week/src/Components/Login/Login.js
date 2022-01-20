import React, { useState } from "react";

const Login = ({ setToken, setUserId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(data);
    if (data.token === "token-refused") {
      alert("Invalid username or password");
      return null;
    } else {
      setToken(data.token);
      setUserId(data.user_id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email: username, password: password });
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
    </div>
  );
};

export default Login;
