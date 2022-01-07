import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
// import Layout from "../components/Layout";

function Registerpage() {
  const [email, setEmail] = useState("");
  const [passsword, setPasssword] = useState("");
  const [confirmpasssword, setConfirmPasssword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const register = async () => {
    try {
      setLoading(true);

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        passsword
      );
      console.log(result);
      setLoading(false);
      // alert("REGISTRATION SUCCESS");
      toast.success("REGISTRATION SUCCESS");
    } catch (error) {
      console.log(error);
      // alert("REGISTRATION FAILED");
      toast.success("REGISTRATION FAILED");

      setLoading(false);
    }
  };
  return (
    <div className="register-parent">
      {/* IF LOADING IS EQUAL TO TRUE -- THEN DISPALY --LOADER  */}
      {loading && <Loader />}
      <div className="register-top"></div>
      <div className="row jusify-content-center">
        <div className="col-md-5">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_IcvJ1B.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="col-md-4 z1">
          <div className="register-form">
            <form action="">
              <h2>Register</h2>

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

              <input
                type="text"
                value={confirmpasssword}
                onChange={(e) => {
                  setConfirmPasssword(e.target.value);
                }}
                className="form-control"
                placeholder="Confirm Passsword"
              />

              <button className="my-2" onClick={register}>
                Register
              </button>
              <hr />
              <Link to="/login">Click Here to Login </Link>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Registerpage;
