import React, { useEffect, useState } from "react";
import profile from "../assets/profile_picture.jpg";
import { loadingActions } from "../store/loadingSlice";
import { getAxiosInstance } from "../utils/axios";
import { AutherizationAPI } from "../utils/api";
import { authActions } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  window.document.title = "User Profile";
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  // });

  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin user profile submitted:", user);
  };

  useEffect(() => {
    if (isLoggedIn && isLoggedIn) {
      const getInfo = async () => {
        try {
          const res = await getAxiosInstance().get(AutherizationAPI.info, {
            headers: { Authorization: `bearer ${token}` },
          });
          console.log(res.data);
          setUser(res.data);
          const name = res.data.name.split(" ");
          setFirstName(name[0]);
          setLastName(name[1]);
        } catch (error) {
          console.log("🚀 ~ file: Header.js:17 ~ getInfo ~ error:", error);
        }
      };
      getInfo();
    }
  }, [isLoggedIn, token]);

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "white",
          padding: "80px",
          borderRadius: "10px",
          height: "auto",
          width: "700px",
          opacity: "90%",
          backgroundSize: "cover",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div class="container text-center">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4">
              <h2 style={{ color: "#000000" }}>Admin Profile</h2>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4"></div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <img
                src={user.imagePath}
                width={150}
                height={150}
                style={{ borderRadius: "500px" }}
              ></img>
            </div>
          </div>
        </div>
        <div class="container" style={{ padding: "35px" }}>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label
                  for="formGroupExampleInput"
                  class="form-label"
                  style={{ color: "#000000" }}
                >
                  First Name
                </label>
                <input
                  class="form-control"
                  type="text"
                  value={firstName}
                  aria-label="Disabled input example"
                  disabled
                  readonly
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label
                  for="formGroupExampleInput2"
                  class="form-label"
                  style={{ color: "#000000" }}
                >
                  Last Name
                </label>
                <input
                  class="form-control"
                  type="text"
                  value={lastName}
                  aria-label="Disabled input example"
                  disabled
                  readonly
                />
              </div>
            </div>
            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                Email
              </label>
              <input
                class="form-control"
                type="text"
                value={user.email}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>

            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                NIC
              </label>
              <input
                class="form-control"
                type="text"
                value={user.nic}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>
            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                Contact Number
              </label>
              <input
                class="form-control"
                type="text"
                value={user.contactNo}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>
            <div className="mt-3 d-flex align-content-end justify-content-end">
              <Link to="/">
                <button
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#5d0b49",
                    color: "white",
                    borderBottom: "2px solid #db3b8c",
                  }}
                >
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
