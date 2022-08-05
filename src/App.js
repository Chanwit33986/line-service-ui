import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoardCast from "./Views/BoardCast";
import Message from "./Views/Message";
import Layout from "./Components/Layout";
import Home from "./Views/Home";
import Login from "./Views/Login";
import RequireAuth from "./Auth/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="boardcast" element={<BoardCast />} />
          <Route path="message" element={<Message />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
