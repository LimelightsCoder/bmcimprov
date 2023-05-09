import React from "react";
import { useState, useEffect } from "react";
import homeBg from "/Users/coryparrish/Desktop/bmc_app/client/bmc_webapp/Media/ezgif.com-video-to-gif.gif";
import centerLogo from "/src/assets/bmclogo1.svg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const centerLogoStyle = {
    width: isMobile ? "50%" : "70%", // adjust the size for mobile and non-mobile screens
  };

//   const backgroundStyle = {
//     backgroundImage: `url(${homeBg})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//   };
  

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  };

  return (
    <div
      className="flex w-full justify-center items-center py-10 z-0"
    >
      <div style={overlayStyle}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "120px",
          justifyContent: "center",
          width: "100vh",
        }}
      >
        <img
          src={centerLogo}
          alt="center-logo"
          className="z-10 center-logo"
          style={centerLogoStyle}
        />
        <div
          className="flex text-center text-9xl w-full text-[#ffe500] z-10 gothic pt-8 animate-scroll"
        >
          EVERYBODY CAN EAT...
        </div>
      </div>
    </div>
  );
};

export default Home;
