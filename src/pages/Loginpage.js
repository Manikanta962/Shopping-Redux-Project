import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Layout from "../components/Layout";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [passsword, setPasssword] = useState("");
  // const [confirmpasssword, setConfirmPasssword] = useState("");
  return (
    <div className="login-parent">
      <div className="row jusify-content-center">
        <div className="col-md-4 z1">
          <div className="login-form">
            <form action="">
              <h2>Login</h2>
              <hr />

              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="email"
              />

              <input
                type="text"
                value={passsword}
                onChange={(e) => {
                  setPasssword(e.target.value);
                }}
                className="form-control"
                placeholder="Password"
              />

              {/* <input
                type="text"
                value={confirmpasssword}
                onChange={(e) => {
                  setConfirmPasssword(e.target.value);
                }}
                className="form-control"
                placeholder="Confirm Passsword"
              /> */}

              <button className="my-2">Login</button>
              <hr />
              <Link to="/register">Click Here to Register </Link>
            </form>
          </div>
        </div>

        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_IcvJ1B.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>{" "}
      <div className="login-bottom"></div>
    </div>
  );
}

export default Loginpage;
