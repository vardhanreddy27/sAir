import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { auth } from "./Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Mobileotp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);  
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setUser(res.user);
        setLoading(false);
        window.location ="./Dashboard"
      })
      .catch((err) => {
        toast.error("OTP was incorrect");
        setLoading(false);
        
      });
  }

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col  rounded-lg">
          
            {showOTP ? (
              <>
             
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-center mtmy p-2"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container text-center p-2 mb-2"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="btn p-2 m-2 items-center justify-center mycolp btn-primary"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                  
                </button>
              </>
            ) : (
              <>
       <h3 className=" mt-5">Welcome back!</h3>
       <div className="form-text mb-4">
  To keep connected with us,<br></br> please login with your mobile
  number
</div>
             
                <PhoneInput label="Phone Number" country={"in"} value={ph} onChange={setPh} className="thismy text-center" />
               
                <button
                onClick={onSignup}
      className="btn btn-lg brs btn-primary btn-block mar text-center"
    >
   
                  
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Login</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mobileotp;