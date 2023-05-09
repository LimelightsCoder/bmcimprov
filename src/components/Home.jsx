import React, { useState, useEffect } from "react";
import homeBg from "/Users/coryparrish/Desktop/bmc_app/client/bmc_webapp/Media/ezgif.com-video-to-gif.gif";
import centerLogo from "/src/assets/bmclogo1.svg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: "0",
  };

  const centerLogoStyle = {
    width: isMobile ? "80%" : "80%", // adjust the size for mobile and non-mobile screens
    zIndex: "2",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: "1",
  };

  const textDivStyle = {
    position: "fixed",
    top: scrollPosition < 100 ? "50%" : "-50%",
    transition: "top 0.3s ease-in-out",
    width: "100%",
    zIndex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: isMobile ? "30px" : "420px",
    pointerEvents: "none",
  };

  const textDivClass = scrollPosition > 100 ? "hidden" : "";

  return (
    <div style={overlayStyle}>
      <div
        className="flex w-full justify-center items-center py-10"
        style={backgroundStyle}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vh",
            paddingTop: "4rem",
          }}
        >
          <img
            src={centerLogo}
            alt="center-logo"
            className="z-10 center-logo"
            style={centerLogoStyle}
          />
          <div
            className={`flex text-center text-6xl sm:text-9xl w-full text-[#ffe500] z-10 gothic animate-scroll ${textDivClass}`}
            style={textDivStyle}
          >
            EVERYBODY CAN EAT...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
