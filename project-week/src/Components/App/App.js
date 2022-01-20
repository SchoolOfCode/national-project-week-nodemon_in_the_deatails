import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import CreatePost from "../CreatePost/CreatePost";
import Login from "../Login/Login";
import useToken from "./Hooks/useToken";
import { useState } from "react";
// import useUserId from "./Hooks/useUserId";
function App() {
  const { token, setToken } = useToken();
  // const { userId, setUserId } = useUserId();
  const [userId, setUserId] = useState("");
  console.log("user id at App lvl: " + userId);
  if (!token) {
    return <Login setToken={setToken} setUserId={setUserId} />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/dashboard" element={<Dashboard userId={userId} />} />
          <Route path="/" element={<CreatePost userId={userId} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
