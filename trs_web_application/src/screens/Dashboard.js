import React, { useState } from "react";
import user_icon from "../assets/user-man-1.jpg";
import dashboard_icon from "../assets/icons/gauge-solid.svg";
import ticket_icon from "../assets/ticket-man.jpg";
import train_icon from "../assets/train-man.jpg";
import track_icon from "../assets/route-man.jpg";
import DashboardComp from "../components/Dashboard";
import UserManagement from "../components/UserManagement";
import TicketBookingManagement from "../components/TicketBookingManagement";
import TrainManagement from "../components/TrainManagement";
import TrainRoutesManagement from "../components/TrainRoutesManagement";
import { FaUserCircle } from "react-icons/fa";
import Button from "bootstrap/js/src/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  window.document.title = "Dashboard";

  const [isDasboardSelected, setIsDashboardSelected] = useState(true);
  const [isUserManagementSelected, setIsUserManagementSelected] =
    useState(false);
  const [
    isTicketBookingManagementSelected,
    setIsTicketBookingManagementSelected,
  ] = useState(false);
  const [isTrainManagementSelected, setIsTrainManagementSelected] =
    useState(false);
  const [isRouteManagementSelected, setIsRouteManagementSelected] =
    useState(false);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/*<div className="nav_side_bar" style={{}}>*/}
      {/*  <div*/}
      {/*    className={isDasboardSelected ? "nav_item_selected" : "nav_item"}*/}
      {/*    onClick={() => {*/}
      {/*      setIsDashboardSelected(true);*/}
      {/*      setIsUserManagementSelected(false);*/}
      {/*      setIsTicketBookingManagementSelected(false);*/}
      {/*      setIsTrainManagementSelected(false);*/}
      {/*      setIsRouteManagementSelected(false);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img width={20} src={dashboard_icon} />*/}

      {/*    <div className="nav_text">Dashboard</div>*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      isUserManagementSelected ? "nav_item_selected" : "nav_item"*/}
      {/*    }*/}
      {/*    onClick={() => {*/}
      {/*      setIsDashboardSelected(false);*/}
      {/*      setIsUserManagementSelected(true);*/}
      {/*      setIsTicketBookingManagementSelected(false);*/}
      {/*      setIsTrainManagementSelected(false);*/}
      {/*      setIsRouteManagementSelected(false);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img width={20} src={user_icon} />*/}

      {/*    <div className="nav_text">User Management</div>*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      isTicketBookingManagementSelected ? "nav_item_selected" : "nav_item"*/}
      {/*    }*/}
      {/*    onClick={() => {*/}
      {/*      setIsDashboardSelected(false);*/}
      {/*      setIsUserManagementSelected(false);*/}
      {/*      setIsTicketBookingManagementSelected(true);*/}
      {/*      setIsTrainManagementSelected(false);*/}
      {/*      setIsRouteManagementSelected(false);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img width={20} src={ticket_icon} />*/}

      {/*    <div className="nav_text">Ticket Booking Management</div>*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      isTrainManagementSelected ? "nav_item_selected" : "nav_item"*/}
      {/*    }*/}
      {/*    onClick={() => {*/}
      {/*      setIsDashboardSelected(false);*/}
      {/*      setIsUserManagementSelected(false);*/}
      {/*      setIsTicketBookingManagementSelected(false);*/}
      {/*      setIsTrainManagementSelected(true);*/}
      {/*      setIsRouteManagementSelected(false);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img width={20} src={train_icon} />*/}

      {/*    <div className="nav_text">Train Management</div>*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      isRouteManagementSelected ? "nav_item_selected" : "nav_item"*/}
      {/*    }*/}
      {/*    onClick={() => {*/}
      {/*      setIsDashboardSelected(false);*/}
      {/*      setIsUserManagementSelected(false);*/}
      {/*      setIsTicketBookingManagementSelected(false);*/}
      {/*      setIsTrainManagementSelected(false);*/}
      {/*      setIsRouteManagementSelected(true);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img width={20} src={track_icon} />*/}

      {/*    <div className="nav_text">Train Routes Management</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="container p-lg-5">
        <div className="row gap-4 h-50 p-5">
          <div className="col-sm">
            <img
              src={user_icon}
              className="d-inline-block w-25 border-0"
              alt="User-Management"
              style={{
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            />
            <Link to="/user/manage">
              <button
                className="w-75 h-100 d-inline-block border-0 text-white"
                style={{
                  backgroundColor: "#586279",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                User Management
              </button>
            </Link>
          </div>
          <div className="col-sm">
            <img
              src={ticket_icon}
              className="d-inline-block w-25 border-0"
              alt="User-Management"
              style={{
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                objectFit: "fill",
              }}
            />
            <Link to="/tikets/manage">
            <button
              className="w-75 h-100 d-inline-block border-0 text-white"
              style={{
                backgroundColor: "#586279",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Ticket Booking Management
            </button>
            </Link>
          </div>
        </div>
        <div className="row gap-4 h-50 p-5">
          <div className="col-sm">
            <img
              src={train_icon}
              className="d-inline-block w-25 border-0"
              alt="User-Management"
              style={{
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            />
            <Link to="/train/manage">
            <button
              className="w-75 h-100 d-inline-block border-0 text-white"
              style={{
                backgroundColor: "#586279",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Train Management
            </button>
            </Link>
          </div>
          <div className="col-sm">
            <img
              src={track_icon}
              className="d-inline-block w-25 border-0"
              alt="User-Management"
              style={{
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                objectFit: "fill",
              }}
            />
              <Link to="/trainRoute/manage">
            <button
              className="w-75 h-100 d-inline-block border-0 text-white"
              style={{
                backgroundColor: "#586279",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Train Route Management
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/*<div className="dash">*/}
      {/*  {isDasboardSelected && <DashboardComp />}*/}
      {/*  {isUserManagementSelected && <UserManagement />}*/}
      {/*  {isTicketBookingManagementSelected && <TicketBookingManagement />}*/}
      {/*  {isTrainManagementSelected && <TrainManagement />}*/}
      {/*  {isRouteManagementSelected && <TrainRoutesManagement />}*/}
      {/*</div>*/}
    </div>
  );
};

export default Dashboard;
