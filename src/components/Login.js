import React, { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Login() {
  const { username, password, setUsername, setPassword, ShowhomePage } = useContext(LoginContext);
  const validation = ()=>{
    if(password.length<8){
      ShowhomePage(false);
    }
    else{
      ShowhomePage(true);
    }
  }
  return (
    <center>
      <h1>Welcome to Databeats</h1>
    <div className="ContainerClass">
      <h1>Login Page</h1>
      <input
        type="email"
        className="inputClass"
        placeholder="enter username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="password"
        className="inputClass"
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button type="submit" placeholder="submit"
          onClick={validation}
        style={{backgroundColor:'lightgreen'}}
      >Submit</button>
    </div>
    </center>
  );
}

export default Login;
