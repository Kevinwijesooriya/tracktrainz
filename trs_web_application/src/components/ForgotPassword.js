import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAxiosInstance } from "../utils/axios";
import { AuthenticationAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { BiSolidIdCard } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ForgotPassword = () => {
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await getAxiosInstance().post(
        AuthenticationAPI.forgot_password,
        {
          nic,
          email,
        }
      );
      const token = res.data.token;
      toast.success("Your request send successfully !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate(`/resetPassword/${token}`);
    } catch (error) {
      console.log(
        "🚀 ~ file: ForgotPassword.js:12 ~ handleForgotPassword ~ error:",
        error
      );
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
            Did you forgot your password
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
                  <MdEmail />
                </div>
              </div>
              <input
                type="email"
                id="exampleFormControlInput1"
                className="form-control rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <center>
            <button
              onClick={handleForgotPassword}
              className="btn"
              style={{
                backgroundColor: "#5d0b49",
                width: "370px",
                color: "white",
              }}
            >
              Forgot Password
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
