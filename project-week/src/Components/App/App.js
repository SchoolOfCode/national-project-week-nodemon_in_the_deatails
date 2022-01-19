import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import CreatePost from "../CreatePost/CreatePost";
function App() {
  return (

      <div className="container">
         <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<CreatePost />} />
        </Routes>
      </header>
      </div>
    </div>
  );
}

export default App;
