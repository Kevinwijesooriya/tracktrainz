//components/TicketBookingManagement.js
import React, { useState, useEffect } from "react";
import Nodata from "../utils/Nodata";
import Loading from "../utils/loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ticket_icon from "../assets/icons/ticket-solid.svg";
import edit_icon from "../assets/icons/pen-to-square-solid.svg";
import delete_icon from "../assets/icons/trash-solid.svg";
import go_back_icon from "../assets/icons/arrow-left-long.svg";
import { useSelector } from "react-redux";
import { getAxiosInstance } from "../utils/axios";
import { RequestManagementAPI, ReservationManagementAPI } from "../utils/api";


const TicketBookingManagement = () => {
  const token = useSelector((state) => state.auth.token);
  const auth = useSelector((state) => state.auth.user);
  console.log("🚀 ~ file: TicketBookingManagement.js:20 ~ TicketBookingManagement ~ auth:", auth)
  // const [reservations, setReservations] = useState([]);
  
  const [bookingReqDetails, setBookingReqDetails] = useState([]);
  const [bookingRequests, setBookingRequests] = useState([]);
  const [bookingReqDetail, setBookingReqDetail] = useState({});
  console.log("🚀 ~ file: TicketBookingManagement.js:25 ~ TicketBookingManagement ~ bookingReqDetail:", bookingReqDetail)
  const [fReservations, setFReservations] = useState("");
  const [filterTraveller, setFilterTraveller] = useState("");
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [isRLoading, setIsRLoading] = useState("");
  const [callback, setCallback] = useState(true);
  const [callbackR, setCallbackR] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isShowAllBookingRequests, setIsShowAllBookingRequests] =useState(true);
  console.log("🚀 ~ file: TicketBookingManagement.js:34 ~ TicketBookingManagement ~ isShowAllBookingRequests:", isShowAllBookingRequests)
  
  const [reservations, setReservations] = useState({
    createdAt: new Date().toISOString(),
    booking: [{
      id: bookingReqDetail.id,
      createdBy: bookingReqDetail.createdBy, 
      scheduleId: bookingReqDetail.scheduleId,
      pickStation: bookingReqDetail.pickStation,
      dropStation: bookingReqDetail.dropStation,
      bookingDate: bookingReqDetail.bookingDate,
      ticketCount: bookingReqDetail.ticketCount,
      ticketPrice: bookingReqDetail.ticketPrice,
    }],
    ownerId: bookingReqDetail.createdBy,
   totalPrice: bookingReqDetail.totalPrice,
  });


  
  console.log("🚀 ~ file: TicketBookingManagement.js:50 ~ TicketBookingManagement ~ reservation:", reservations)

  const [isNewReservation,setIsNewReservation]=useState(true)

  const getAllReservationsByCreatedBy = async () => {
    try {
      setIsLoading(true);
      const path = ReservationManagementAPI.getAllReservationsByCreatedBy;
      const res = await getAxiosInstance().get(
        path + "?ownerId=" + "6517cb823f5bb25d602e4cd8",
        {
          headers: { Authorization: `bearer ${token}` },
        }
      );
      setReservations(res.data);
      console.log(
        "set reservation",
        res.data
      );
      setFReservations(res.data);
      setBookingReqDetail(res.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: TicketBookingManagement.js:155 ~ getAllBookingDetails ~ error:",
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callback && getAllReservationsByCreatedBy();
    setCallback(false);
  }, [callback]);

  useEffect(() => {
    let ReservationList = fReservations;
    if (
      ReservationList.length > 0 &&
      (filterTraveller != null || filterTraveller != "")
    ) {
      ReservationList = ReservationList.filter((reservations) => {
        return reservations.ownerDetails.name
          .toLowerCase()
          .includes(filterTraveller.toLowerCase());
      });
    }
    setReservations(ReservationList);
  }, [filterTraveller]);


  //Requests

  const getAllRequests =async()=>{
    try {
      setIsRLoading(true)
      const path = RequestManagementAPI.getAllRequests;
      const res = await getAxiosInstance().get(
        path,
        {
          headers: { Authorization: `bearer ${token}` },
        }
      );
      setBookingRequests(res.data);
    } catch (error) {
      console.log("🚀 ~ file: TicketBookingManagement.js:94 ~ getAllRequests ~ error:", error)

    }finally{
      setIsRLoading(false);
    }

  }

  useEffect(() => {
    callbackR && getAllRequests();
    setCallbackR(false)
  }, [callbackR]);

  const handleRequest=async(data)=>{
    setBookingReqDetail(data)
  }

  const handleCreateModalClose=()=>{
     setBookingReqDetail('');
  }

  const updateReservation = async()=>{
    try {
      
    } catch (error) {
      console.log("🚀 ~ file: TicketBookingManagement.js:131 ~ updateReservation ~ error:", error)
      
    }
    
  }

  // const createReservation = async () => {
  //   try {
  //     const updatedReservation = {
  //       ...reservation,
  //       booking: [
  //         ...reservation.booking,
  //         {
  //           id: bookingReqDetail?.id,
  //           createdBy: bookingReqDetail?.createdBy,
  //           scheduleId: bookingReqDetail?.scheduleId,
  //           pickStation: bookingReqDetail?.pickStation,
  //           dropStation: bookingReqDetail?.dropStation,
  //           bookingDate: bookingReqDetail?.bookingDate,
  //           ticketCount: bookingReqDetail?.ticketCount,
  //           ticketPrice: bookingReqDetail?.ticketPrice,
  //         },
  //       ],
  //       ownerId: bookingReqDetail?.createdBy,
  //       totalPrice: bookingReqDetail?.totalPrice,
  //     };
  
  //     const path = ReservationManagementAPI.ReservationsCreated;
  //     const res = await getAxiosInstance().post(path, updatedReservation, {
  //       headers: { Authorization: `bearer ${token}` },
  //     });
  
  //     // Handle the response if needed
  //     // ...
  
  //   } catch (error) {
  //     console.log("Error creating reservation:", error);
  
  //     // Display a user-friendly error message to the user
  //     toast.error(error.response ? error.response.data : error.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };
  
  const createReservation = async () => {
    try {
      const reservation = {
        createdAt:bookingReqDetail.createdAt,
        ownerId: bookingReqDetail.createdBy, // Replace with a valid OwnerId
        totalPrice: 64,
        bookings: [
          {
            id: bookingReqDetail.booking.id, // Replace with a valid id
            createdAt: bookingReqDetail.booking.createdAt, // Replace with a valid createdAt
            createdBy: bookingReqDetail.createdBy, // Replace with a valid createdBy
            scheduleId: bookingReqDetail.booking.scheduleId,
            pickStation: bookingReqDetail.booking.pickStation,
            dropStation: bookingReqDetail.booking.dropStation,
            bookingDate: bookingReqDetail.booking.bookingDate,
            tickectCount: bookingReqDetail.booking.tickectCount,
            tickectPrice: bookingReqDetail.booking.tickectPrice,
          },
        ],
        // Add other reservation details here
      };

      console.log("booking req details", bookingReqDetail);
  
      // Debugging: Log the structure of the reservation object
      console.log("Reservation Object:", reservation);
  
      const path = ReservationManagementAPI.ReservationsCreated;
      const res = await getAxiosInstance().post(path, reservation, {
        headers: { Authorization: `bearer ${token}` },
      });
  
      // Handle the response if needed
      // ...
  
    } catch (error) {
      console.log("Error creating reservation:", error);
  
      // Display a user-friendly error message to the user
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
  

  const deleteReservation = async()=>{
    try {
      
    } catch (error) {
      console.log("🚀 ~ file: TicketBookingManagement.js:150 ~ deleteReservation ~ error:", error)
      
    }
  }

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
      <div style={{ overflow: "-moz-hidden-unscrollable" }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <img width={25} src={ticket_icon} />
          <h5 style={{ marginLeft: "10px" }}>Ticket Booking Management</h5>
        </div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#ffff",
                border: "none",
                color: "#0000 !important",
              }}
              className="modal-content"
            >
              <div className="modal-header">
                <h5
                  style={{ color: "black" }}
                  className="modal-title"
                  id="exampleModalLongTitle"
                >
                  {isEdit ? "Edit Reservation" : "Create Reservation"}
                </h5>
                <button
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "red",
                    border: "none",
                    color: "#ffff",
                  }}
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCreateModalClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div style={{ color: "black" }} className="modal-body">
                <form>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      margin: "auto",
                    }}
                  >
                    <div
                      onClick={() => {
                        setIsNewReservation(true);
                      }}
                      style={{
                        width: "100%",
                        padding: "10px",
                        textAlign: "center",
                        backgroundColor: isNewReservation
                          ? "#6fc1ff"
                          : "#ffffff",
                        cursor: "pointer",
                      }}
                    >
                      New
                    </div>
                    <div
                      onClick={() => {
                        setIsNewReservation(false);
                      }}
                      style={{
                        width: "100%",
                        padding: "10px",
                        textAlign: "center",
                        backgroundColor: !isNewReservation
                          ? "#6fc1ff"
                          : "#ffffff",
                        cursor: "pointer",
                      }}
                    >
                      Exists
                    </div>
                  </div>
                  {isNewReservation ? (
                    <>
                      <div style={{ padding: 5, fontWeight: 500 }}>
                        <div>Traveler Details</div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Name : {bookingReqDetails?.createdByDetails?.name}
                        </div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          NIC/Passport No :{" "}
                          {bookingReqDetails?.createdByDetails?.nic}
                        </div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Contact No :{" "}
                          {bookingReqDetails?.createdByDetails?.contactNo}
                        </div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Email : {bookingReqDetails?.createdByDetails?.email}
                        </div>
                      </div>
                      <div style={{ padding: 5, fontWeight: 500 }}>
                        <div>Train Details</div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Train Name :{" "}
                          {bookingReqDetails?.trainDetails?.name}
                        </div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Registration Number :{" "}
                          {
                            bookingReqDetails?.trainDetails
                              ?.registraionNo
                          }
                        </div>
                      </div>
                      <div style={{ padding: 5, fontWeight: 500 }}>
                        <div>Booking Details</div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Booking Date:{" "}
                          {new Date(
                            bookingReqDetails?.bookingDate
                          ).getUTCDate()}
                          {"."}
                          {new Date(
                            bookingReqDetails?.bookingDate
                          ).getUTCMonth()}
                          {"."}
                          {new Date(
                            bookingReqDetails?.bookingDate
                          ).getUTCFullYear()}
                          {" - "}
                          {new Date(
                            bookingReqDetails?.bookingDate
                          ).getUTCHours()}
                          {":"}
                          {new Date(
                            bookingReqDetails?.bookingDate
                          ).getUTCMinutes()}
                          {":"}
                          {new Date(
                            bookingReqDetails?.bookingDate
                          ).getUTCMilliseconds()}
                        </div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Pick Station :{" "}
                          {bookingReqDetails?.pickStation}
                        </div>
                        <div style={{ marginLeft: 10, fontSize: 12 }}>
                          Drop Station :{" "}
                          {bookingReqDetails?.dropStation}
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleCreateModalClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={isEdit ? updateReservation : createReservation}
                >
                  {isEdit ? "Update" : "Create"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Loading />
              </div>
            ) : (
              <div className="col">
                <div>
                  <div
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "rgb(0, 0, 0,0.5)",
                      overflow: "auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "10px",
                        marginBottom: "10px",
                        padding: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1500"
                          className="form-label"
                        >
                          Filter By Traveller
                        </label>
                        <input
                          value={filterTraveller}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1500"
                          placeholder="Ex: Sean Udayantha"
                          onChange={(e) => setFilterTraveller(e.target.value)}
                        />
                      </div>{" "}
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1500"
                          className="form-label"
                        >
                          Filter By Date From
                        </label>
                        <input
                          value={filterTraveller}
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput1500"
                          onChange={(e) => setFilterDateFrom(e.target.value)}
                        />
                      </div>
                    </div>
                    {reservations.length > 0 ? (
                      <div style={{ padding: "10px", overflow: "auto" }}>
                        <table className="table table-striped table-hover table align-middle">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">User Name</th>
                              <th
                                scope="col"
                                style={{
                                  verticalAlign: "middle",
                                }}
                              >
                                <center>Bookings</center>
                              </th>
                              <th scope="col">Total Price</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {reservations.map((u) => (
                              <tr key={u.id} className="pointer">
                                <td class="vertical-align-middle;">
                                  {u.ownerDetails.name}
                                </td>
                                <td>
                                  <table>
                                    <thead>
                                      <th scope="col">From</th>
                                      <th scope="col">To</th>
                                      <th scope="col">Train Name</th>
                                      <th scope="col">Booking Date</th>
                                      <th scope="col">Start Time</th>
                                      <th scope="col">End Time</th>
                                      <th scope="col">Ticket Price</th>
                                      <th scope="col">Ticket Count</th>
                                      <th scope="col"></th>
                                    </thead>
                                    <tbody>
                                      {u.bookings?.map((b) => (
                                        <tr key={b.id} className="pointer">
                                          <td>{b.pickStation}</td>
                                          <td>{b.dropStation}</td>
                                          
                                          <td>{b.trainDetails.name}</td>
                                          <td>
                                            {b.bookingDate.substring(0, 10)}
                                          </td>
                                          <td>{b.scheduleDetails.startTime}</td>
                                          <td>{b.scheduleDetails.endTime}</td>
                                          <td>Rs.{b.tickectPrice}</td>
                                          <td>{b.tickectCount}</td>
                                          <td>
                                            {" "}
                                            {auth.role == "travel_agent" && (
                                              <div
                                                style={{
                                                  display: "flex",
                                                  float: "",
                                                }}
                                              >
                                                <div
                                                  onClick={() => {
                                                    setIsEdit(true);
                                                    console.log("bookingReqDetails", bookingReqDetails)
                                                    setBookingReqDetails(
                                                     b
                                                    );
                                                    
                                                  }}
                                                  style={{
                                                    cursor: "pointer",
                                                    margin: "5px",
                                                    borderRadius: "50px",
                                                    justifyContent: "center",
                                                    backgroundColor:
                                                      "rgb(212, 194, 2)",
                                                    alignItems: "center",
                                                  }}
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Edit Booking"
                                                >
                                                  <div
                                                    data-toggle="modal"
                                                    data-target="#exampleModalCenter"
                                                  >
                                                    <center>
                                                      <img
                                                        style={{
                                                          margin: "10px",
                                                        }}
                                                        width={10}
                                                        src={edit_icon}
                                                      />
                                                    </center>
                                                  </div>
                                                </div>
                                                {/* <div
                                                  style={{
                                                    cursor: "pointer",
                                                    margin: "5px",
                                                    borderRadius: "50px",
                                                    justifyContent: "center",
                                                    backgroundColor:
                                                      "rgb(181, 2, 2)",
                                                    alignItems: "center",
                                                  }}
                                                  data-toggle="tooltip"
                                                  data-placement="bottom"
                                                  title="Delete Booking"
                                                  // onClick={() => {
                                                  //   deleteRoute(u.id);
                                                  // }}
                                                >
                                                  <center>
                                                    <img
                                                      style={{ margin: "10px" }}
                                                      width={10}
                                                      src={delete_icon}
                                                    />
                                                  </center>
                                                </div> */}
                                              </div>
                                            )}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </td>
                                <td>Rs.{u.totalPrice}</td>
                                <td>
                                  
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div>
                        <center>
                          <Nodata />
                        </center>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="col col-lg-3">
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "rgb(0, 0, 0,0.5)",
                    overflow: "auto",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      marginTop: "10px",
                      marginBottom: "10px",
                      padding: "10px",
                    }}
                  >
                    {isRLoading ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <Loading />
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <center>
                            <h5 style={{ textAlign: "center" }}>
                              Booking Requests
                            </h5>
                          </center>
                        </div>
                        <div>
                          {bookingRequests.length > 0 ? (
                            bookingRequests.map((bookReq) => (
                              <>
                                <div
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                  className="container"
                                  style={{
                                    backgroundColor: "rgb(0,0,0,0.9)",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    height: "auto",
                                    width: "98%",
                                    marginBottom: "10px",
                                    cursor: "pointer",
                                    transition: "transform 0.2s",
                                  }}
                                  key={bookReq.id}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                      "scale(1.05)"; // Zoom in on hover
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                      "scale(1)"; // Reset to the original size on hover out
                                  }}
                                  onClick={() => {
                                    handleRequest(bookReq);
                                  }}
                                >
                                  <div style={{ display: "flex", gap: 5 }}>
                                    <img
                                      style={{
                                        width: "25px",
                                        height: "25px",
                                        borderRadius: "50px",
                                      }}
                                      src={bookReq.createdByDetails.imagePath}
                                    ></img>
                                    <h5>{bookReq.createdByDetails.name}</h5>
                                  </div>
                                  <div style={{ fontSize: 12 }}>
                                    Booking Date :{" "}
                                    {new Date(
                                      bookReq.booking.bookingDate
                                    ).getUTCDate()}
                                    {"."}
                                    {new Date(
                                      bookReq.booking.bookingDate
                                    ).getUTCMonth()}
                                    {"."}
                                    {new Date(
                                      bookReq.booking.bookingDate
                                    ).getUTCFullYear()}
                                    {" - "}
                                    {new Date(
                                      bookReq.booking.bookingDate
                                    ).getUTCHours()}
                                    {":"}
                                    {new Date(
                                      bookReq.booking.bookingDate
                                    ).getUTCMinutes()}
                                    {":"}
                                    {new Date(
                                      bookReq.booking.bookingDate
                                    ).getUTCMilliseconds()}
                                  </div>
                                  <div style={{ fontSize: 10 }}>
                                    Pick Station: {bookReq.booking.pickStation}
                                  </div>
                                  <div style={{ fontSize: 10 }}>
                                    End Station: {bookReq.booking.dropStation}
                                  </div>
                                  <div style={{ fontSize: 10 }}>
                                    Request Accepted:{" "}
                                    {bookReq.isReqAccepted
                                      ? "Accepted"
                                      : "Not Accepted"}
                                  </div>
                                </div>
                              </>
                            ))
                          ) : (
                            <div>
                              <center>
                                <Nodata />
                              </center>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBookingManagement;
