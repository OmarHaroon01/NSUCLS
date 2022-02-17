import React, { useState } from "react";
import axios from "axios";

function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      setErrorText("To verify please fill your registered email");
      return;
    }

    let response = await axios.post("http://localhost:8000/verifyEmail", {
      email: email,
    });

    if (response.data.error) {
      setErrorText(response.data.error);
    } else {
      //Do something. You need to send the mail here
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
                  setEmail(e.target.value);
                }}
                type="text"
                class="form-control"
                id="floatingVerifyEmail"
                placeholder="joshsmith@gmail.com"
              ></input>
              <label for="floatingVerifyEmail">Email for verification</label>
            </div>
          </div>
          <div class="col-8 offset-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default VerifyEmail;
