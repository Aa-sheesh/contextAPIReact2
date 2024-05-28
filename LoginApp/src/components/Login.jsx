import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h1 className="underline align-top text-5xl mb-5">Facebook</h1>
      <h1 className="text-xl mb-2">Login</h1>
      <input
        className="mb-2"
        type="text"
        name="username"
        id="username"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <input
      className="mb-2"
        type="password"
        name="password"
        id="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button className='mb-2'type="submit" onClick={handleSubmit}>
        Submit!
      </button>
    </>
  );
}

export default Login;
