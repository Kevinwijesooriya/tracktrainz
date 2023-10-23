import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import logout from "../assets/logout.svg";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { authActions } from "../store/authSlice";
import { getAxiosInstance } from "../utils/axios";
import { AutherizationAPI } from "../utils/api";
import { loadingActions } from "../store/loadingSlice";
import Colors from "../assets/colors/colors";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav
      className="navbar navbar navbar-expand-lg"
      data-bs-theme="dark"
      style={{
        backgroundColor: "rgb(4,33,91,0.8)",
        borderBottom: "2px solid #db3b8c",
      }}
    >
      <div className="container-fluid">
        <a
          className="flex-row justify-content-center align-items-center navbar-brand"
          href="/"
        >
          <img
            src={logo}
            alt="Bootstrap"
            width="40"
            height="40"
            className="flex justify-content-center align-items-center align-text-center"
            style={{ marginRight: "10px" }}
          ></img>
          Ticket Express
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn && user && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={user.imagePath}
                        width={30}
                        className="profile_image"
                      ></img>
                      {user.name}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                      <li>
                        <a className="dropdown-item" href="/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <div
                          onClick={handleLogout}
                          className="dropdown-item logout"
                        >
                          <i className="fa fa-sign-out"></i>
                          Logout
                        </div>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
