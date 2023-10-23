import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import logo from "../assets/logo.png";

const AuthScreen = () => {
  window.document.title = "Login";

  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="auth" style={{ width: "600px" }}>
      <center>
        <h3 className="mb-4">Ticket Express</h3>
        <img width={150} src={logo} alt="logo" />
      </center>
      <div className="container w-75">
        <div className="row justify-content-center">
          <div className="">
            <CSSTransition
              in={showLogin}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="slide">
                <Login />
              </div>
            </CSSTransition>
            <CSSTransition
              in={!showLogin}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="slide">
                <ForgotPassword />
              </div>
            </CSSTransition>
          </div>
          <div onClick={handleToggle} className="divButton">
            {showLogin ? "Forget Password" : "Back to Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
