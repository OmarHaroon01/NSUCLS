import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNameErrorClass, setUserNameErrorClass] = useState("none");
  const [emailErrorClass, setEmailErrorClass] = useState("none");
  const [passwordErrorClass, setPasswordErrorClass] = useState("none");
  const [confirmPasswordErrorClass, setConfirmPasswordErrorClass] =
    useState("none");
  const [emailUsed, setEmailUsed] = useState("none");
  const [isRegistered, setIsRegistered] = useState(false);

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async function submitClicked(e) {
    e.preventDefault();

    if (userName.length < 3) {
      setUserNameErrorClass("block");
      return;
    }

    if (!validateEmail()) {
      setEmailErrorClass("block");
      return;
    }

    if (password.length < 6) {
      setPasswordErrorClass("block");
      return;
    }

    if (password != confirmPassword) {
      setConfirmPasswordErrorClass("block");
      return;
    }

    let response = await axios.post("http://localhost:8000/register", {
      username: userName,
      email: email,
      password: password,
    });

    if (response.data.error){
      setEmailUsed("block");
    } else {
      setIsRegistered(true);
      alert("Verify Email!!");
    }
  }

  if (isRegistered){
    return <Navigate to="/Login" replace />;
  }

  return (
    <>
      <form class="w-50 mx-auto mt-5" onSubmit={submitClicked}>
        <div class="form-floating mb-3">
          <input
            value={userName}
            type="text"
            class="form-control"
            id="usernameInput"
            placeholder="John Smith"
            onInput={(e) => setUserName(e.target.value)}
            onChange={(e) => setUserNameErrorClass("none")}
          ></input>
          <label for="usernameInput">User Name</label>
          <span class={"text-danger d-" + userNameErrorClass}>
            Name cant be less than three character
          </span>
        </div>
        <div class="form-floating mb-3">
          <input
            value={email}
            type="text"
            class="form-control"
            id="emailInput"
            placeholder="name@example.com"
            onInput={(e) => setEmail(e.target.value)}
            onChange={(e) => {
              setEmailErrorClass("none");
              setEmailUsed("none");
            }
          }
          ></input>
          <label for="emailInput">Email address</label>
          <span class={"text-danger d-" + emailErrorClass}>
            Enter a valid Email
          </span>
        </div>
        <div class="form-floating mb-3">
          <input
            value={password}
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Password"
            onInput={(e) => setPassword(e.target.value)}
            onChange={(e) => setPasswordErrorClass("none")}
          ></input>
          <label for="passwordInput">Password</label>
          <span class={"text-danger d-" + passwordErrorClass}>
            Password must be of atleast 6 character
          </span>
        </div>
        <div class="form-floating">
          <input
            value={confirmPassword}
            type="password"
            class="form-control"
            id="confirmPasswordInput"
            placeholder="Confirm Password"
            onInput={(e) => setConfirmPassword(e.target.value)}
            onChange={(e) => setConfirmPasswordErrorClass("none")}
          ></input>
          <label for="confirmPasswordInput">Confirm Password</label>
          <span class={"text-danger d-" + confirmPasswordErrorClass}>
            Passwords dont match!!
          </span>
        </div>
        <div className="d-flex flex-column  mt-5">
          <div className="">
            <span class={"text-danger text-center d-" + emailUsed}>
              Email Address Already Registered!!
            </span>
          </div>
          <button type="submit" class="btn btn-outline-primary btn-lg mb-5">
            Register
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <a href="/" type="button" class="btn btn-outline-primary btn-lg me-3">
          Back
        </a>
        <a
          href="/Login"
          type="button"
          class="btn btn-outline-primary btn-lg me-3"
        >
          Login
        </a>
      </div>
    </>
  );
}

export default Register;
