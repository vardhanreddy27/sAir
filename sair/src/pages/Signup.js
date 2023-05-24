import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';
import Mobileotp from "../components/Mobileotp";
function Signup() {
  return (
      <div className="row ht">
        <div className="col-5 bgcolor text-center">
          <div className=" pl-5 pt-5 ji pr-5">
 <Mobileotp />
          
            <hr className="loginhr" />
            <div className="form-group ">
              <button
                type="submit"
                className="btn brs btn-lg border btn-block bg-white form-control mar text-center "
              >
                <FcGoogle className="google  " /> Sign in with google
              </button>
            </div>
          </div>
        </div>
        <div className="col-7 text-center">
          <div className="container jii pt-5 pl-5 pr-5">
            <form>
              <h3 className=""><br></br>Create an account</h3>
              <div className="form-text mb-4">
                One account for all your needs
              </div>
              <div className="form-group pe-5 myform">
                <input
                  type="text"
                  className="bg-light form-control"
                  id="user name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group pe-5 myform">
                <input
                  type="email"
                  className="bg-light form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group pe-5 myform">
                <input
                  type="mobile"
                  className="bg-light form-control"
                  id="mobile"
                  placeholder="Mobile number"
                />
              </div>
              <div className="form-group mycode">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block form-control mym text-center"
                >
                   Get OTP
                </button>
              </div>
            </form>
            <hr className="line "></hr>
            <div className="form-group myc2">
              <button
                type="submit"
                className="btn btn-lg border btn-block form-control mym text-center "
              >
                <FcGoogle className="google " /> Sign in with google
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Signup;

