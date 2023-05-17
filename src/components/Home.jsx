import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoBg from '/bmcvidbg.mp4';
import centerLogo from "/src/assets/bmclogo1.svg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 390); // adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const centerLogoStyle = {
    width: isMobile ? "90%" : "60%", // adjust the size for mobile and non-mobile screens
    zIndex: "2",
    paddingTop: isMobile ? "20px" : "80px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: "1",
  };

  const textDivStyle = {
    transform: "translateY(-50%)",
    maxWidth: isMobile ? "390px" : "none",
    zIndex: "5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: isMobile ? "60px" : "10px",
    pointerEvents: "none",
    bottom: "",
  };

  const footerStyle = {
    position: "absolute",
    bottom: -100,
    width: "100%",
    height: "80px",
    zIndex: 1 // set a lower z-index value
  };
  

  const textDivClass = "animate-scroll";

  return (
    <div className="home-container">
      <video className="home-background" autoPlay loop muted style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="flex w-full justify-center items-center" >
        <div  style={overlayStyle} ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vh",
            paddingTop: isMobile ? "40px" : "40px",
          }}
        >
          <img
            src={centerLogo}
            alt="center-logo"
            className="z-10 center-logo"
            style={centerLogoStyle}
          />
          {isMobile && window.innerWidth <= 390 ? null : (
            <div
              className={`flex text-center text-6xl sm:text-9xl w-full text-[#ffe500] z-100 gothic animate-scroll ${textDivClass}`}
              style={textDivStyle}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                EVERYBODY CAN EAT...
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center w-full " style={footerStyle}>
      <p className="text-center mt-3 text-white font-bold text-base justify-end items-end relative roboto pr-10">
          <Link to="/show-dates">SHOW DATES</Link>
        </p>
        <p className="text-center mt-3 text-white font-bold text-base justify-end items-end relative roboto pr-10">
          <Link to="/classes">CLASSES</Link>
        </p>
        <p className="text-center mt-3 text-white font-bold text-base justify-end items-end relative roboto pr-10">
          <Link to="/squad">THE SQUAD</Link>
        </p>
        </div>
    </div>
  );
};

export default Home;
