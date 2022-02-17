import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [okayText, setOkayText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userName) {
      setErrorText("User name can't be empty");
      return;
    }
    if (!email) {
      setErrorText("Email can't be empty");
      return;
    }
    if (!password) {
      setErrorText("Password can't be empty");
      return;
    }
    if (confirmPassword != password) {
      setErrorText("Passwords don't match");
      return;
    }

    let response = await axios.post('http://localhost:8000/register', {
      userName: userName,
      email: email,
      password: password
    })

    if(response.data.error){
      setErrorText(response.data.error);
    }else{
      setErrorText("");
      setOkayText(response.data.data);
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
                  setEmail(e.target.value);
                }}
                type="text"
                class="form-control"
                id="floatingEmail"
                placeholder="joshsmith@gmail.com"
              ></input>
              <label for="floatingEmail">Email address</label>
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
            <div class="form-floating mb-4 fw-bold">
              <input
                onInput={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                class="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
              ></input>
              <label for="floatingConfirmPassword">Confirm Password</label>
            </div>
          </div>
          <div class="col-8 offset-2">
            <div class="d-flex justify-content-between">
              {/* what is passsword doesn't change */}
              <a href="/login" type="button" class="btn btn-primary">
                Log In
              </a>
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </div>
          </div>
          <div class="col-8 offset-2">
              <span class="text-danger"> {errorText} </span>
              <span class="text-success"> {okayText} </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
