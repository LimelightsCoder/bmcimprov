import React from "react";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: -45,
    width: "100%",
    height: "80px",
    zIndex: 1 // set a lower z-index value
  };

  return (
    <div style={footerStyle}>
      <div className="flex mf:flex-col flex-col items-center justify-between mf:p-2 pt-2 px-4">
        <h6
          className="text-black roboto mt-1 justify-center items-center text-center"
          style={{ fontSize: "12px", textAlign: "center" }}
        >
          2023 ©️ Bernie Mac & Cheese
        </h6>
      </div>
    </div>
  );
};

export default Footer;
