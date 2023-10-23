import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ width: "100%", height: "45px" }}
      className="bg-dark text-center text-white position-fixed bottom-0"
    >
      <div
        className="text-center p-3"
        style={{
          padding: "5",
          backgroundColor: "rgba(4, 13, 54)",
          fontSize: "13px",
          borderTop: "2px solid white",
        }}
      >
        All Rights Reserved<sup>©</sup> - 2023 by&nbsp;
        <a className="text-white" href="#">
          Beta Solutions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
