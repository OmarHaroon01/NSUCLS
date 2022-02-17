import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userName) {
      setErrorText("User name can't be empty");
      return;
    }

    if (!password) {
      setErrorText("Password can't be empty");
      return;
    }

    let response = await axios.post("http://localhost:8000/login", {
      userName: userName,
      password: password,
    });

    if (response.data.error) {
      setErrorText(response.data.error);
    } else {
      // Take this to home page
      alert(response.data.data);
    }
  }
  return (
    <>
      <form class="container-fluid bg-dark py-5" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-8 offset-2">
            <div class="form-floating mb-4 fw-bold">
              <input
                onInput={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                class="form-control"
                id="floatingFullName"
                placeholder="Josh Smith"
              ></input>
              <label for="floatingFullName">Full Name</label>
            </div>
          </div>
          <div class="col-8 offset-2">
            <div class="form-floating mb-4 fw-bold">
              <input
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              ></input>
              <label for="floatingPassword">Password</label>
            </div>
          </div>
          <div class="col-8 offset-2">
            <div class="d-flex justify-content-between">
              <a href="/verifyEmail" type="button" class="btn btn-primary">
                Forgot Password?
              </a>
              <button type="submit" class="btn btn-primary">
                Log In
              </button>
            </div>
          </div>
          <div class="col-8 offset-2">
            <span class="text-danger"> {errorText} </span>
          </div>
          <div class="col-8 offset-2">
            <a href="/register" type="button" class="btn btn-primary">
              Register
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
