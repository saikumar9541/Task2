import { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";
import Home from "./components/Home";
import Login from "./components/Login";
import './styles.css';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [homePage, ShowhomePage] = useState(false);
  return (
    <div>
      <LoginContext.Provider
        value={{ username, setUsername, password, setPassword, ShowhomePage }}
      >
        {homePage ? <Home /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
