import React from "react";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <div className="stick top">
      <div className="row ht">
        <div className="col-5 bgcolor text-center">
          <div className="pt-5 pl-5 pr-5">
           

            <form> <h3 className=" mt-5">Welcome back!</h3>
            <div className="form-text mb-4">
              To keep connected with us,<br></br> please login with your mobile
              number
            </div>
              <div className="form-group code">
                <span className="prefix">+91</span>
                <input
                  type="mobile"
                  className="bg-light form-control mar brs1"
                  id="mobile"
                  placeholder="Mobile number"
                />
              </div>
              <div className="form-group ">
                <button
                  type="submit"
                  className="btn btn-lg brs btn-primary btn-block form-control mar text-center"
                >
                  Get OTP
                </button>
              </div>
            </form>
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
          <div className="container pt-5 pl-5 pr-5">
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
                  className="btn btn-lg btn-primary btn-block form-control text-center"
                >
                  Continue
                </button>
              </div>
            </form>
            <hr className="line "></hr>
            <div className="form-group myc2">
              <button
                type="submit"
                className="btn btn-lg border btn-block form-control text-center "
              >
                <FcGoogle className="google " /> Sign in with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
