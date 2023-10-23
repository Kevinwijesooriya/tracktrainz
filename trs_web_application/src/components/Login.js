import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAxiosInstance } from "../utils/axios";
import { AuthenticationAPI } from "../utils/api";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { BiSolidIdCard, BiSolidLockAlt } from "react-icons/bi";

const Login = () => {
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await getAxiosInstance().post(AuthenticationAPI.login, {
        nic,
        password,
      });
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("nic", nic);
      dispatch(authActions.login(res.data.token));
      toast.info("Login Successful !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("🚀 ~ file: Login.js:14 ~ handleLogin ~ error:", error);
      toast.error(error.response ? error.response.data : error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div style={{ margin: "auto", alignItems: "center", padding: "5px" }}>
        <div
          style={{ margin: "auto", alignItems: "center", textAlign: "center" }}
        >
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Sign in to access your account
          </p>
        </div>
        <form>
          <div className="col-auto mb-lg-3">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text rounded-none rounded-r-lg"
                  style={{
                    fontSize: "24px",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                >
                  <BiSolidIdCard />
                </div>
              </div>
              <input
                type="text"
                id="exampleFormControlInput1"
                className="form-control rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your NIC"
                onChange={(e) => setNic(e.target.value)}
              />
            </div>
          </div>

          <div className="col-auto mb-lg-5">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div
                  className="input-group-text rounded-none rounded-r-lg"
                  style={{
                    fontSize: "24px",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                >
                  <BiSolidLockAlt />
                </div>
              </div>
              <input
                type="password"
                id="inputPassword5"
                className="form-control rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Password"
                aria-describedby="passwordHelpBlock"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <center>
            <button
              onClick={handleLogin}
              className="btn"
              style={{
                backgroundColor: "#5d0b49",
                width: "370px",
                color: "white",
              }}
            >
              Sign In
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default Login;
