import "./loading.css";

import React from "react";

const Loading = () => {
  return (
    // <div className="tcontainer">
    //   <div className="track"></div>
    //   <div className="train"></div>
    // </div>

    <div className="trainAnimation">
      <div className="content">
        <div className="buildings"></div>
        <div className="windows"></div>
        <div className="bridge"></div>
        <div className="train">
          <div className="carOne"></div>
          <div className="carTwo"></div>
          <div className="carThree"></div>
        </div>
        <div className="moon"></div>
        <div className="stars"></div>
      </div>
    </div>
  );
};

export default Loading;
