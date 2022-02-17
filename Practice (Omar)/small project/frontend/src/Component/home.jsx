import React, { useState } from "react";

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Basic outlined example"
        >
          <a href="/Login" type="button" class="btn btn-outline-primary">
            Login
          </a>
          <a href="/Register" type="button" class="btn btn-outline-primary">
            Register
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
