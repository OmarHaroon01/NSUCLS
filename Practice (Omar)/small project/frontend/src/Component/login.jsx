import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErrorClass, setUserNameErrorClass] = useState("none");
  const [passwordErrorClass, setPasswordErrorClass] = useState("none");
  const [credentialError, setCredentialError] = useState("none");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userName) {
      setUserNameErrorClass("block");
      return;
    }

    if (!password) {
      setPasswordErrorClass("block");
      return;
    }
    let response = await axios.post("http://localhost:8000/login", {
      username: userName, 
      password: password, 
    });

    if (response.data.error) {
      setErrorText(response.data.error);
      setCredentialError("block");
    } else {
      setLoggedIn(true);
    }
  }

  if (loggedIn) {
    return <Navigate to="/Logged" replace />;
  }

  return (
    <>
      <form onSubmit={handleSubmit} class="w-50 mx-auto mt-5">
        <div class="form-floating mb-3">
          <input
            value={userName}
            type="text"
            class="form-control"
            id="usernameLabel"
            placeholder="John Smith"
            onInput={(e) => setUserName(e.target.value)}
            onChange={(e) => {
              setUserNameErrorClass("none");
              setCredentialError("none");
            }}
          ></input>
          <label for="usernameLabel">User Name</label>
          <span class={"text-danger d-" + userNameErrorClass}>
            Please enter a username
          </span>
        </div>
        <div class="form-floating">
          <input
            value={password}
            type="password"
            class="form-control"
            id="passwordLabel"
            placeholder="Password"
            onInput={(e) => setPassword(e.target.value)}
            onChange={(e) => {
              setPasswordErrorClass("none");
              setCredentialError("none");
            }}
          ></input>
          <label for="passwordLabel">Password</label>
          <span class={"text-danger d-" + passwordErrorClass}>
            Please enter a password
          </span>
        </div>

        <div className="d-flex flex-column justify-content-center mt-5">
          <span class={"text-danger text-center d-" + credentialError}>
            {errorText}
          </span>
          <button type="submit" class="btn btn-outline-primary btn-lg mb-5">
            Login
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <a href="/" type="button" class="btn btn-outline-primary btn-lg me-3">
          Back
        </a>
        <a
          href="/Register"
          type="button"
          class="btn btn-outline-primary btn-lg me-3"
        >
          Register
        </a>
      </div>
    </>
  );
}

export default Login;
